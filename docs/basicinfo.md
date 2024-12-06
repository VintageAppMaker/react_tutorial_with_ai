# React 기초 정보

## JSX 기초 문법

### 1. JSX란?
- JavaScript XML의 약자
- JavaScript에 XML/HTML을 추가한 문법 확장
- React 컴포넌트의 구조를 직관적으로 작성 가능

### 2. 기본 규칙
1. 단일 루트 요소
   ```jsx
   // 올바른 예시
   return (
     <div>
       <h1>제목</h1>
       <p>내용</p>
     </div>
   );

   // 잘못된 예시
   return (
     <h1>제목</h1>
     <p>내용</p>
   );
   ```

2. 태그 닫기
   ```jsx
   // HTML 태그
   <div></div>
   
   // 자체 닫는 태그
   <img src="image.jpg" />
   <input type="text" />
   ```

3. JavaScript 표현식 사용
   ```jsx
   const name = "React";
   return (
     <div>
       <h1>{name} 학습하기</h1>
       <p>계산 결과: {1 + 2}</p>
     </div>
   );
   ```

4. 조건부 렌더링
   ```jsx
   // 삼항 연산자
   {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}

   // AND 연산자
   {showMessage && <Message />}
   ```

5. 클래스와 스타일
   ```jsx
   // 클래스 (className 사용)
   <div className="container">

   // 인라인 스타일 (객체 형태)
   <div style={{ backgroundColor: 'blue', color: 'white' }}>
   ```

### 3. 이벤트 처리
```jsx
// 이벤트 핸들러
<button onClick={handleClick}>클릭</button>

// 매개변수 전달
<button onClick={() => handleClick(id)}>클릭</button>
```

## Import와 Export

### 1. 기본 내보내기/가져오기
```jsx
// 내보내기 (export)
export default function MyComponent() {
  return <div>컴포넌트</div>;
}

// 가져오기 (import)
import MyComponent from './MyComponent';
```

### 2. 이름 있는 내보내기/가져오기
```jsx
// 내보내기
export const MyComponent = () => { ... };
export const useMyHook = () => { ... };

// 가져오기
import { MyComponent, useMyHook } from './MyComponent';
```

### 3. 전체 가져오기
```jsx
import * as MyModule from './MyModule';
```

## Build 프로세스

### 1. 개발 환경
- `npm start`: 개발 서버 실행
- 실시간 코드 변경 반영 (Hot Reload)
- 개발자 도구 및 에러 메시지 제공

### 2. 프로덕션 빌드
```bash
# 빌드 명령어
npm run build

# 결과물
/build
  ├── static/
  │   ├── css/      # 최적화된 CSS 파일
  │   ├── js/       # 최적화된 JavaScript 파일
  │   └── media/    # 최적화된 미디어 파일
  ├── index.html
  └── asset-manifest.json
```

### 3. 빌드 최적화
- 코드 분할 (Code Splitting)
- 트리 쉐이킹 (Tree Shaking)
- 파일 압축 및 최소화
- 이미지 최적화

### 4. 환경 변수
```jsx
// .env 파일
REACT_APP_API_URL=https://api.example.com

// 사용
const apiUrl = process.env.REACT_APP_API_URL;
```

## 패키지 관리

### 1. 의존성 설치
```bash
# 프로덕션 의존성
npm install package-name

# 개발 의존성
npm install --save-dev package-name
```

### 2. package.json
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@testing-library/react": "^13.4.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

### 3. node_modules
- 설치된 패키지들의 실제 코드
- .gitignore에 포함하여 버전 관리에서 제외
- `npm install`로 의존성 복원
