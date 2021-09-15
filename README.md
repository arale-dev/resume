# Resume

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Start Project

```sh
$ yarn
$ yarn start
```

### Branch & Commit Style

-   Branch Name은 /[objective]/[keyword]로 지정
    -   ex) d/readme
-   Commit Message는 [[objective]] [message]로 지정
    -   ex) [docs] 설치 가이드 및 브랜치, 커밋 컨벤션을 포함한 README 추가
    -   message 첫줄은 80글씨 이내로, 아랫 줄에 커밋 내용을 최대한 상세하게 작성

| Branch | Commit   | Objective                            |
| ------ | -------- | ------------------------------------ |
| f      | feat     | 기능 추가, 라이브러리 추가, API 변경 |
| r      | refactor | 코드 구조 변경 - 리팩토링            |
| b      | bugfix   | 버그 수정                            |
| d      | docs     | 문서 수정 - README or guide 등       |
| test   | test     | 테스트 코드 작성                     |
| c      | config   | config 및 기타 설정 파일 수정        |

-   rebase를 사용하여 브랜치를 합칩니다. (이후 각 커밋 별 수정 내용 확인을 위해 스쿼시는 사용하지 않습니다.)

### 프로젝트 구조

```bash
├── README.md                      - 리드미 파일
│
├── public/                      - 퍼블릭 폴더
│
├── src/                           - 소스 폴더
│   │
│   ├── apis/                      - 서비스 API 정의 폴더
│   │
│   ├── assets/                    - Image, Font 리소스 폴더
│   │
│   ├── components/                - 공통 컴포넌트 폴더
│   │
│   ├── interfaces/                - 공통 인터페이스 정의 폴더
│   │
│   ├── navigations/               - 네비게이션 폴더
│   │
│   ├── screens/                   - 화면 정의 폴더
│   │
│   ├── stores/                    - MobX 스토어 정의 폴더
│   │
│   ├── styles/                    - 공통 스타일 속성 정의 폴더
│   │
│   ├── types/                     - 각종 d.ts 정의 폴더
│   │
│   ├── utils/                     - 유틸 폴더
│   │
│   ├── App.tsx                    - 메인 앱 파일
│
```
