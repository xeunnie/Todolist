# 📝 Todo List 프로젝트

## 📋 프로젝트 소개
이 프로젝트는 사용자가 할 일을 추가, 삭제, 완료 상태로 관리할 수 있는 Todo List 애플리케이션입니다. 최신 프론트엔드 및 백엔드 기술을 연습하고, 실무에서 자주 활용하는 다양한 개발 도구들을 사용하여 구성했습니다.

---

## 🚀 기능 요약
- **할 일 추가**: 사용자가 새로운 할 일을 추가할 수 있습니다.
- **할 일 삭제**: 목록에서 할 일을 삭제할 수 있습니다.
- **완료 표시**: 할 일의 완료 상태를 체크하여 표시할 수 있습니다.
- **무한 스크롤**: 할 일 목록이 길어질 경우, 무한 스크롤을 통해 부드럽게 목록을 탐색합니다.
- **UI 애니메이션**: `framer-motion`을 사용한 애니메이션 효과를 통해 시각적 요소를 강화했습니다.
- **실시간 상태 관리**: `Zustand`로 상태를 관리하여, 상태 변경에 따라 컴포넌트들이 즉각적으로 반응하도록 설정했습니다.
- **테스트**: `Cypress`로 UI 테스트와 `Storybook`으로 컴포넌트 스토리 작성 및 테스트를 진행했습니다.

---

## 🛠️ 기술 스택
### 프론트엔드
<p>
  <img src="https://img.shields.io/badge/React-white?style=flat&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-white?style=flat&logo=typescript&logoColor=007ACC" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/SCSS-white?style=flat&logo=sass&logoColor=CC6699" alt="SCSS"/>
  <img src="https://img.shields.io/badge/Styled_Components-white?style=flat&logo=styled-components&logoColor=DB7093" alt="Styled Components"/>
  <img src="https://img.shields.io/badge/Framer_Motion-white?style=flat&logo=framer&logoColor=0055FF" alt="Framer Motion"/>
</p>

### 상태 관리 및 API 통신
<p>
  <img src="https://img.shields.io/badge/Zustand-white?style=flat&logo=Zustand&logoColor=8D6CAB" alt="Zustand"/>
  <img src="https://img.shields.io/badge/MSW-white?style=flat&logo=mock-service-worker&logoColor=FF4785" alt="MSW"/>
</p>

### 백엔드 및 서버
<p>
  <img src="https://img.shields.io/badge/Firebase-white?style=flat&logo=firebase&logoColor=FFCA28" alt="Firebase"/>
  <img src="https://img.shields.io/badge/Google_Analytics-white?style=flat&logo=google-analytics&logoColor=E37400" alt="Google Analytics"/>
  <img src="https://img.shields.io/badge/Sentry-white?style=flat&logo=sentry&logoColor=362D59" alt="Sentry"/>
</p>

### DevOps & 배포
<p>
  <img src="https://img.shields.io/badge/GitHub_Actions-white?style=flat&logo=github-actions&logoColor=2088FF" alt="GitHub Actions"/>
  <img src="https://img.shields.io/badge/Vercel-white?style=flat&logo=vercel&logoColor=000000" alt="Vercel"/>
</p>

### 테스트 및 문서화
<p>
  <img src="https://img.shields.io/badge/Storybook-white?style=flat&logo=storybook&logoColor=FF4785" alt="Storybook"/>
  <img src="https://img.shields.io/badge/Cypress-white?style=flat&logo=cypress&logoColor=17202C" alt="Cypress"/>
</p>


---

## 📈 성능 최적화 및 유저 추적
- **React Window**로 가상 스크롤링을 통해 성능을 최적화했습니다.
- **Google Analytics**를 활용해 사용자 활동을 추적하고 개선 포인트를 분석했습니다.

---

## 🗂️ 설치 및 실행 방법

1. **프로젝트 클론**
   ```bash
   git clone https://github.com/your-username/todo-list.git
   cd todo-list
    ```
2. **의존성 설치**
    ```bash
    yarn install
    ```
3. **개발 서버 실행**
    ```bash
    yarn start
    ```
4. **Storybook 실행**
    ```bash
    yarn storybook
    ```
5. **Cypress 실행**
    ```bash
    yarn cypress:open
    ```