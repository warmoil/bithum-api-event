# 💰 Bithumb V1 API 이벤트 참여 스크립트 (Node.js)

안녕하세요! 이 스크립트는 빗썸(Bithumb)에서 진행하는 API 연동 지원금 이벤트 참여를 위한 일회성 Node.js 코드입니다.

## ⚠️ 경고: 이 코드는 실제 암호화폐 거래를 발생시킵니다. 사용 전 반드시 내용을 이해하고 신중하게 진행하시기 바랍니다.
키 관리 및 거래는 전적으로 사용자 본인의 책임입니다.

---

## 🚀 이벤트 참여 순서

아래 단계를 따라 안전하게 이벤트에 참여해 보세요.

## 1. 📝 이벤트 참여 및 마케팅 수신 동의 완료

코드를 실행하기 전에 빗썸 이벤트 페이지에서 이벤트 참여 신청과 마케팅 수신 동의를 완료하는 것이 좋습니다.

![수신동의 관련 유의사항](https://github.com/user-attachments/assets/3a8bca6b-943d-4baa-ae45-0b9a90248c6d)

## 2. 🔑 빗썸 API 키 발급 (거래 권한만 승인)

빗썸 마이페이지에서 API 키를 발급받습니다. 이때 '거래 권한'만 승인하여 불필요한 권한 노출을 최소화합니다.

## 3. 📝 AccessKey 및 SecretKey 보관

발급받은 `AccessKey`와 `SecretKey`는 안전한 곳에 잘 보관하고, 절대 외부에 노출되지 않도록 주의합니다.

## 4. 📈 구매할 코인 정보 확인

구매하고자 하는 코인의 현재 가격과 원화 마켓 코드 (예: `KRW-XRP`, `KRW-BTC` 등)를 빗썸 웹사이트에서 정확히 조회합니다.

![이벤트 참여 방법](https://github.com/user-attachments/assets/3358c08f-9e74-4d6c-8fd1-d30587e88009)

## 5. 🛠️ 기본 의존성 설치

Node.js 환경에서 코드를 실행하기 위해 필요한 라이브러리를 설치합니다. 프로젝트 폴더에서 터미널을 열고 다음 명령어를 실행합니다.

```bash
    npm install axios jsonwebtoken uuid crypto querystring
```

## 6. 🚀 스크립트 실행 (환경 변수 주입 방식)

아래 명령어를 터미널에 입력하여 스크립트를 실행합니다. "로 감싸진 부분은 자신의 환경에 맞춰 정확한 값으로 대체해야 합니다.

### Linux/macOS 환경 (Bash/Zsh)
```bash
    BITHUMB_ACCESS_KEY="자신의 액세스 키" \
    BITHUMB_SECRET_KEY="자신의 시크릿 키" \
    MARKET="구매할 코인 (예: KRW-XRP)" \
    PRICE="1개당 지정가 (예: 3500)" \
    VOLUME="구매할 수량 (예: 2)" \
    node order.js
```

### Windows PowerShell 환경
```bash
    $env:BITHUMB_ACCESS_KEY="자신의 액세스 키"; \
    $env:BITHUMB_SECRET_KEY="자신의 시크릿 키"; \
    $env:MARKET="구매할 코인 (예: KRW-XRP)"; \
    $env:PRICE="1개당 지정가 (예: 3500)"; \
    $env:VOLUME="구매할 수량 (예: 2)"; \
    node order.js
```

## 7. 🗑️ API 키 즉시 삭제

주문에 성공했다면 즉시 빗썸 마이페이지에서 발급했던 API 키를 삭제하거나 권한을 회수하여 추가적인 보안 위험을 방지합니다.

## 8. 🔄 지원금 귀속을 위한 2차 거래 (필요 시)

연동 지원금이 들어온 후에, 이를 최종적으로 귀속 상태로 만들기 위해 다시 한번 1~7번 단계를 반복하여 거래를 완료해야 할 수 있습니다. 빗썸 이벤트 유의사항을 확인하세요

![지원금 지급일로부터 30일](https://github.com/user-attachments/assets/3e26f897-2d0b-47ec-84b8-a0b4ffc1134d)


😭 저는 반려됐습니다..

![ㅠㅠ](https://github.com/user-attachments/assets/6f4a9901-f955-4961-84f5-d0d4dd228e31)
