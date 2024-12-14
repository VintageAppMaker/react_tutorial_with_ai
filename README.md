# React 기초 학습 예제

## 👾 일러두기 
>  windsurf를 이용하여 한 줄 코딩도 없이 tutorial을 작성 

- 프롬프트만으로 코드와 문서를 작성 
- How to use `prompt`가 목적 
- sonet 3.5 기반 프롬프트 

## 🤔 반드시 숙지:
프롬프트가 만들어주는 코드와 문서는 훌륭하다. 단지, 프로그래밍은 손과 머리로 하는 것임을 잊어서는 안된다. 
손이 코딩에 익숙하지 못하면 실제로 프로그래밍은 불가능하다.

1. 생성 ai는 도구일 뿐이다. 
2. AI 를 활용한 프로그래밍은 사고방식이 중요하다. 
3. 사고방식은 "손"이 만든다.
4. 손으로 코딩을 체화하지 않으면 사고방식이 형성되지 않는다. 

## 👉🏾 프롬프트와 문서 

- [windsurf 프롬프트](prompt/)
- [튜토리얼 문서정리](docs/README.md) 

---
## 🤖 아래부터는 생성 AI가 만들어주는 문서 

이 프로젝트는 React의 핵심 개념들을 학습하기 위한 예제 애플리케이션입니다.

## 포함된 개념들

1. **Props**
   - `Welcome` 컴포넌트에서 props를 통한 데이터 전달
   - 부모-자식 컴포넌트 간의 통신

2. **State**
   - `useState` 훅을 사용한 상태 관리
   - `Counter` 컴포넌트에서 상태 변경 예제

3. **이벤트 핸들링**
   - 버튼 클릭 이벤트
   - 폼 제출 이벤트
   - 입력 필드 변경 이벤트

4. **리스트와 조건부 렌더링**
   - `TodoList` 컴포넌트에서 배열 데이터 렌더링
   - 조건부 렌더링 예제

5. **Router Example**
   - `RouterExample` 컴포넌트에서 React Router를 사용한 라우팅 예제

6. **Class Component와 Function Component 예제**
   - `ClassComponent`: Class 기반 컴포넌트 예제
   - `FunctionComponent`: 함수형 컴포넌트 예제

7. **Event 처리 예제**
   - `EventExample`: 다양한 React 이벤트 처리 예제
   - 마우스, 키보드, 폼 이벤트 처리 방법

8. **Component Lifecycle 예제**
   - `ClassLifecycle`: 클래스 컴포넌트의 생명주기 메서드
   - `FunctionLifecycle`: 함수형 컴포넌트의 생명주기 (Hooks)

9. **React Hooks 예제**
   - `UseStateExample`: useState Hook을 사용한 상태 관리
   - `UseEffectExample`: useEffect Hook을 사용한 사이드 이펙트 처리
   - `UseRefExample`: useRef Hook을 사용한 DOM 조작과 값 보존

10. **Context API 예제**
    - `ThemeContext`: Context 생성 및 Provider 구현
    - `ThemedComponent`: Context 사용 예제
    - 테마 전환 기능 구현

11. **Redux 예제**
    - `counterSlice`: Redux Toolkit을 사용한 상태 관리
    - `store`: Redux 스토어 설정
    - `Counter`: Redux 상태와 액션 사용

12. **API 통신 예제**
    - `UserList`: GET 요청을 통한 데이터 조회
    - `PostForm`: POST 요청을 통한 데이터 생성
    - 로딩 상태와 에러 처리 구현

## 시작하기

1. [React 기초 정보 (JSX, Import, Build)](./docs/basicinfo.md)

2. 의존성 설치:
   ```bash
   npm install
   ```

3. 개발 서버 실행:
   ```bash
   npm start
   ```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속

## 프로젝트 구조

- `src/App.js`: 메인 애플리케이션 컴포넌트
- `src/components/`:
  - `Welcome.js`: Props 예제
  - `Counter.js`: State 관리 예제
  - `TodoList.js`: 리스트 렌더링 예제
  - `RouterExample/`: 라우팅 예제
  - `ClassComponent.js`: Class 기반 컴포넌트 예제
  - `FunctionComponent.js`: 함수형 컴포넌트 예제
  - `EventExample.js`: 이벤트 처리 예제
  - `LifecycleExample/`: 컴포넌트 생명주기 예제
    - `ClassLifecycle.js`: 클래스 컴포넌트 생명주기
    - `FunctionLifecycle.js`: 함수형 컴포넌트 생명주기
    - `index.js`: 생명주기 예제 통합
  - `HooksExample/`: React Hooks 예제
    - `UseStateExample.js`: useState Hook 예제
    - `UseEffectExample.js`: useEffect Hook 예제
    - `UseRefExample.js`: useRef Hook 예제
    - `index.js`: Hooks 예제 통합
  - `ContextExample/`: Context API 예제
    - `ThemeContext.js`: Context 및 Provider 정의
    - `ThemedComponent.js`: Context 소비자 컴포넌트
    - `index.js`: Context 예제 통합
  - `ReduxExample/`: Redux 예제
    - `counterSlice.js`: Redux 상태 및 액션 정의
    - `store.js`: Redux 스토어 설정
    - `Counter.js`: Redux 상태 사용 컴포넌트
    - `index.js`: Redux 예제 통합
  - `ApiExample/`: API 통신 예제
    - `UserList.js`: GET 요청 예제 컴포넌트
    - `PostForm.js`: POST 요청 예제 컴포넌트
    - `index.js`: API 예제 통합

## 학습 포인트

1. **컴포넌트 기초**
   - 함수형 컴포넌트 작성
   - JSX 문법 이해
   - 컴포넌트 구조화

2. **Props와 State**
   - Props를 통한 데이터 전달
   - useState 훅 사용법
   - 상태 업데이트 방법

3. **이벤트 처리**
   - 이벤트 핸들러 작성
   - 폼 데이터 처리
   - 사용자 입력 관리

4. **조건부 렌더링**
   - 삼항 연산자 사용
   - && 연산자를 통한 조건부 렌더링

5. **리스트 처리**
   - map() 함수를 사용한 리스트 렌더링
   - key props 활용
   - 배열 상태 관리

6. **Router Example**
   - `BrowserRouter`를 사용한 라우팅 설정
   - `Link` 컴포넌트를 사용한 내비게이션
   - `Routes`와 `Route`를 사용한 라우트 구성
   - 라우팅 예제

7. **Class Component vs Function Component**
   - Class 기반 컴포넌트 구현 방법
   - 함수형 컴포넌트와 Hooks 사용
   - 상태 관리의 차이점
   - 생명주기 메서드와 useEffect

8. **이벤트 처리**
   - 마우스 이벤트 (onMouseMove)
   - 키보드 이벤트 (onKeyPress)
   - 폼 이벤트 (onChange, onSubmit)
   - 이벤트 객체 활용
   - 이벤트 핸들러 구현

9. **컴포넌트 생명주기**
   - 클래스 컴포넌트 생명주기 메서드
     - constructor
     - componentDidMount
     - componentDidUpdate
     - componentWillUnmount
   - 함수형 컴포넌트 생명주기
     - useEffect Hook
     - 의존성 배열
     - cleanup 함수

10. **React Hooks**
    - useState
      - 기본 값 관리
      - 객체 상태 관리
      - 배열 상태 관리
    - useEffect
      - 컴포넌트 생명주기 관리
      - 의존성 배열 활용
      - 클린업 함수
    - useRef
      - DOM 요소 참조
      - 렌더링과 무관한 값 저장

11. **Context API**
    - Context 생성 및 Provider 구현
    - useContext Hook 사용
    - 전역 상태 관리
    - Provider 컴포넌트 구조화

12. **Redux**
    - Redux Toolkit 사용
    - 슬라이스 생성
    - 액션 및 리듀서 정의
    - useSelector와 useDispatch 사용

13. **API 통신**
    - fetch API 사용
    - async/await를 통한 비동기 처리
    - 로딩 상태 관리
    - 에러 처리
    - HTTP 메서드 (GET, POST)
    - JSON 데이터 처리

## Router Example

The `RouterExample` component demonstrates how to implement basic routing in React using React Router.

### Components
- `Home`: Simple home page component
- `About`: About page component
- `RouterExample`: Main router component that handles navigation

### Usage
```jsx
import RouterExample from './components/RouterExample/RouterExample';

function App() {
  return (
    <div>
      <RouterExample />
    </div>
  );
}
```

The example shows:
- Basic route setup using `BrowserRouter`
- Navigation using `Link` components
- Route configuration with `Routes` and `Route`
- Simple page components

Note: Make sure to install `react-router-dom` package before using this example:
```bash
npm install react-router-dom
