# 맛집소모임 WIKI APP

맛집을 공유하는 소모임을 
관리하는 웹서비스

### 아키텍쳐

```plaintext
my-wiki-app/
├── src/
│   ├── assets/ #이미지 파일, svg등 저장용
│   ├── components/ #컴포넌트 폴더
│   │   ├── Common/
│   │   │   ├── Header/
|   |   |   |   ├── Header.tsx
|   |   |   |   ├── Header.css
│   │   │   ├── Footer/
│   │   │   |   ├── Footer.tsx
│   │   │   ├── Sidebar/
│   │   │   |   ├── Sidebar.tsx 
│   │   │   ├── Modal/
│   │   │   |   ├── CommuteModal.tsx
│   │   ├── Home/
│   │   │   ├── Carousel/
│   │   │   |   ├── Carousel.tsx
│   │   ├── Wiki/
│   │   │   ├── Markdown/
│   │   │   |   ├── MarkdownRender.tsx
│   │   │   |   ├── MarkdownEditor.tsx
│   │   ├── Gallery/
│   │   │   ├── PhotoRender/
│   │   │   |   ├── PhotoRenderer.tsx
│   │   │   ├── UploadModal/
│   │   │   |   ├── UploadModal.tsx
│   ├── utils/ #Firebase, API 관련 폴더
|   |   ├── firebaseConfig.ts
│   │   ├── addData.js
│   │   ├── updateData.js
│   │   ├── deleteData.js
│   ├── pages/ 라우팅
│   │   ├── Home.js
│   │   ├── Wiki.js
│   │   ├── Gallery.js
|   ├── types/ 타입 관리
|   ├── hooks/ 커스텀 훅 관리
│   ├── App.js
│   ├── index.js
├── public/
├── node_modules/
├── package.json
├── tsconfig.json
├── README.md
└── ...
```

### 🛠 브랜치는 이렇게 구성해요!

- `main`: 서비스 배포용도의 브랜치
- `dev`: 배포 전, 모든 feature 브랜치 병합 및 테스트용도의 브랜치
- `feature/#issuenumber_issuetitle`: github issue 넘버로 기능 구현
    
    > 예시: feature/#3_ButtonComponent

총 가격 : 71,000
치킨 가격 : 42,000 = 20,000 + 22,000

음료 : 2,000

주류 : 그 외 27,000

치킨 값 : 8,400 (5명)
주류 값 : 6,750 (4명)

은지 : 9,400원
나머지 : 15,150원

