<div align=left>
<img src="https://firebasestorage.googleapis.com/v0/b/fc-wiki-allocation.appspot.com/o/readme%2Flogo%EB%A6%AC%EB%93%9C%EB%AF%B8%EC%9A%A9.png?alt=media&token=4e8fef96-e346-4231-a8e0-22886ab7e45d" width="75px">
</div>

# 🍽️ 맛집소모임 WIKI APP

_맛집 & 밥약 관리 웹서비스, --"IKUZO"--_

맛집을 공유하고 같이 먹을 사람을 구하는 웹서비스, "IKUZO"입니다. IKUZO는
맛집을 등록, 공유하고 정보를 나누며 위치기반으로 밥약속을 잡을 수 있는 기능을 구현합니다.

### 📌 IKUZO의 주요 기능

✅ 회원 관리 : 로그인, 로그아웃, 회원가입을 할 수 있습니다.

✅ 맛집 공유 : 맛집을 공유할 수 있습니다. 맛집 이름, 주소, 카테고리를 분류해서 저장할 수 있습니다.

✅ 밥약 관리 : 밥약을 만들거나 참여할 수 있습니다. 최대 9명으로 구성된 밥약속을 만들거나 참여해보세요. 지도에서 맛집을 찾아 합류할 수 있습니다.

### 📌 IKUZO의 사용 방법

IKUZO를 사용하기 위해서는 먼저 회원 가입을 해야 합니다. 회원가입 후 맛집을 공유하거나 밥약속을 만들고 참여하세요!!

### 📌 IKUZO의 비지니스 / 프로덕트 문제

**IKUZO의 비전** : 맛집에서 밥은 다같이 맛있게 먹어야 한다.

**IKUZO의 비지니스 요구사항**

1. 맛집 공유의 편리함
2. 밥약을 빠르게 잡을 수 있는 신속함

**IKUZO의 타겟**

1. 맛집 정보를 나누고 싶은 공유 Lover
2. 밥약을 잡아서 같이 밥을 먹고 싶은 혼밥 Hater

**IKUZO의 프로덕트 구현**

1. **맛집 정보를 나누고 싶은 공유 Lover**

- 카테고리에 맞는 맛집 공유
- 모든 정보를 기입하지 않고 지도 검색으로 간단하게 맛집을 추가할 수 있는 기능

2. **밥약을 잡아서 같이 밥을 먹고 싶은 혼밥 Hater**

- 30분 이내에서 유효한 밥약을 참여할 수 있는 기능
- 모든 정보를 기입하지 않고 지도 검색으로 간단하게 밥약을 추가할 수 있는 기능

### 📌 IKUZO의 유저플로우

<img src="https://firebasestorage.googleapis.com/v0/b/fc-wiki-allocation.appspot.com/o/readme%2FUserflow.png?alt=media&token=787126a6-d95d-4b94-b5fd-3c66dae87c07">

### 📌 IKUZO의 아키텍쳐

```plaintext
IKUZO-WIKI/
├── src/
│   ├── assets/ #이미지 파일, svg등 저장용
│   ├── components/ #컴포넌트 폴더
│   |   ├── ChooseId/
|   |   |   |   ├── index.tsx
|   |   |   |   ├── ChooseEmailButton.tsx
│   │   ├── Common/
│   │   │   ├── Header/
|   |   |   |   ├── index.tsx
|   |   |   |   ├── LoginBtn.tsx
│   │   │   ├── Footer/
│   │   │   |   ├── index.tsx
│   │   │   ├── Layout/
│   │   │   |   ├── GalleryLayout.tsx
│   │   │   |   ├── WikiLayout.tsx
│   │   │   ├── SidebarGallery/
│   │   │   |   ├── index.tsx
│   │   │   |   ├── temp.tsx
│   │   │   |   ├── AddModal.tsx
│   │   │   ├── SidebarWiki/
│   │   │   |   ├── index.tsx
│   │   │   ├── Modal/
│   │   │   |   ├── CommuteModal.tsx
│   │   ├── Home/
│   │   │   ├── index.tsx
│   │   ├── Register/
│   │   │   ├── index.tsx
│   │   ├── Skeleton/
│   │   │   ├── Skeleton.tsx
│   │   │   ├── SkeletonGallery.tsx
│   │   │   ├── SkeletonMarkdown.tsx
│   │   ├── Map/
│   │   │   ├── index.tsx
│   │   │   ├── Map.styled.tsx
│   │   ├── Login/
│   │   │   ├── index.tsx/
│   │   │   |   ├── MarkdownRender.tsx
│   │   │   |   ├── MarkdownEditor.tsx
│   │   ├── Markdown/
│   │   │   ├── MarkdownEditor.tsx/
│   │   │   ├── MarkdownViewer.tsx/
│   │   │   ├── Markdown.styled.tsx/
│   │   ├── Wiki/
|   |   |   ├── index.tsx
│   │   │   ├── Notice/
│   │   │   |   ├── Notice.tsx
│   │   │   ├── Intro/
│   │   │   |   ├── index.tsx
│   │   │   ├── With/
│   │   │   |   ├── index.tsx
│   │   │   |   ├── Modal/
│   │   │   |   |   ├── index.tsx
│   │   │   |   ├── WithButton/
│   │   │   |   |   ├── index.tsx
│   │   │   |   ├── WithItem/
│   │   │   |   |   ├── index.tsx
│   │   │   |   ├── WithTime/
│   │   │   |   |   ├── index.tsx
│   │   ├── Gallery/
|   |   |   ├── index.tsx
│   │   │   ├── GalleryButton/
│   │   │   |   ├── index.tsx
│   │   │   ├── GalleryItem/
│   │   │   |   ├── index.tsx
│   │   │   ├── Modal/
│   │   │   |   ├── DeleteModal.tsx
│   │   │   |   ├── UpdateModal.tsx
│   │   │   ├── Pagination/
│   │   │   |   ├── index.tsx
│   ├── utils/
|   |   ├── firebaseConfig.tsx
│   │   ├── NonProtectedRoute.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── utils.tsx
│   ├── pages/
│   │   ├── Chinese.tsx
│   │   ├── Intro.tsx
│   │   ├── Login.tsx
│   │   ├── Korean.tsx
│   │   ├── Notice.tsx
│   │   ├── Western.tsx
│   │   ├── Register.tsx
│   │   ├── Home.tsx
│   │   ├── ChooseId.tsx
│   │   ├── Register.tsx
│   │   ├── With.tsx
│   ├── recoil/
│   │   ├── authRecoil.ts
│   │   ├── countRecoil.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── index.css
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
