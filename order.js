/**
 * Bithumb V1 (Open API) 거래 주문 스크립트 - JWT 인증 방식
 * * Bithumb V1 API는 JWT(JSON Web Token)를 사용하여 인증합니다.
 * JWT의 payload에는 요청 본문(JSON string)의 SHA512 해시가 포함되어야 합니다.
 * * * 실행 전:
 * 1. Node.js 설치
 * 2. 다음 라이브러리 설치:
 * npm install axios jsonwebtoken uuid crypto querystring
 */

const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
const axios = require('axios');
const querystring = require('querystring');

const accessKey = process.env.BITHUMB_ACCESS_KEY;
const secretKey = process.env.BITHUMB_SECRET_KEY;
const price= process.env.PRICE;
const volume = process.env.VOLUME;
const market = process.env.MARKET;

const apiUrl = 'https://api.bithumb.com';

// [필수] 거래 주문 파라미터 설정 (JSON Body로 전송)
const requestBody = {
    // 주문 마켓 (예: 원화-비트코인)
    // market: 'KRW-XRP',
    market: market,
    // 주문 종류: bid (매수) 또는 ask (매도)
    side: 'bid',
    // 주문량
    volume: volume,
    // 지정가 주문 가격 (문자열로 전달)
    price: price,
    // 주문 타입: limit (지정가)
    ord_type: 'limit'
};

/**
 * JWT 토큰을 생성하고 API를 호출하는 함수
 */
(async function placeOrderV1() {
    const query = querystring.encode(requestBody)
    const alg = 'SHA512'
    const hash = crypto.createHash(alg)
    const queryHash = hash.update(query, 'utf-8').digest('hex')
    const payload = {
        access_key: accessKey,
        nonce: uuidv4(),
        timestamp: Date.now(),
        query_hash: queryHash,
        query_hash_alg: alg
    }
    const jwtToken = jwt.sign(payload, secretKey)
    const config = {
        headers: {
            Authorization: `Bearer ${jwtToken}`,
            'Content-Type': 'application/json'
        }
    }

    const endpoint = '/v1/orders';

    console.log(`[${requestBody.side.toUpperCase()}] 주문 실행 중... (V1 JWT 방식)`);
    console.log(`대상 마켓: ${requestBody.market}`);

    try {
        // 5. API 호출 (본문은 JSON 객체 그대로 전송)
        const response = await axios.post(apiUrl + endpoint, requestBody, config);

        console.log('✅ 주문 성공!');
        console.log('HTTP Status:', response.status);
        console.log('응답 데이터:', response.data);

    } catch (error) {
        if (error.response) {
            // API 서버에서 받은 오류 응답
            console.log('❌ 통신 또는 시스템 오류 발생:');
            console.log('HTTP Status:', error.response.status);
            // Bithumb 에러 데이터는 error.response.data에 포함됨
            console.log('Bithumb 에러 데이터:', error.response.data);
            console.log('--- 해결 가이드 ---');
            console.log('1. API Key와 Secret Key가 정확한지 다시 한번 확인하세요.');
            console.log('2. Bithumb에서 해당 Key에 "거래 권한"이 활성화되어 있는지 확인하세요.');

        } else if (error.request) {
            console.log('❌ API 서버로부터 응답을 받지 못했습니다. 네트워크 연결을 확인하세요.');
        } else {
            console.log('❌ 스크립트 실행 중 알 수 없는 오류 발생:', error.message);
        }
    }
})()

