## 서버와 통신하기

### API(Application Programming Interface)

: 클라이언트와 서버 간의 데이터를 주고받는 통로 역할을 한다. 서로 다른 소프트웨어인 두 역할간 상호작용을 돕는 인페터이스이다.

```jsx
fetch("https://jsonplaceholder.typicode.com/users1/1/todos") //fetch는 서버 데이터를 받아오는 JS표준 API 함수
  .then((response) => response.json())
  .then((json) => console.log(json));
```

여기서 json이란?

JavaScript Object Notation. JS 객체 문법을 따르는 문자 기반의 데이터 형식을 말한다.

JSON Placeholder? 가짜 데이터를 API형태로 제공하는 서버이다.
https://jsonplaceholder.typicode.com/

### fetch( )

```jsx
fetch(url, options)
  .then((response) => console.log("response:", response))
  .catch((error) => console.log("error:", error));
```

fetch함수는 네트워크 요청을 서버 데이터로부터 받아오는 **표준 API함수**이다.

fetch 함수는 첫번째 인자로 url, 두번째 인자로 옵션 객체를 받고 Promise 타입의 객체를 반환한다. API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고, 실패했을 경우에는 예외(error) 객체를 reject한다.

옵션 객체에는 HTTP method, 요청 header, 요청 body 등을 설정하고, response 객체로부터는 status, 응답 header, 응답 body 등을 읽어온다.

### Promise

: 나중에 결과를 주겠다는 약속. 콜백패턴이 가진 단점을 보완하며, 비동기 처리 시점을 명확하게 표현할 수 있다.

```jsx
// Promise 객체의 생성
const promise = new Promise((resolve, reject) => {
  // 비동기 작업을 수행한다.

  if (/* 비동기 작업 수행 성공 */) {
    resolve('result'); //result는 Promise 객체의 후속 처리 메소드로 전달
  }
  else { /* 비동기 작업 수행 실패 */
    reject('failure reason'); //오류 메세지는 Promise 객체의 후속처리 메소드로 전달
  }
});
```

Promise는 비동기 처리가 성공하였는지 또는 실패하였는지 등의 상태(state) 정보를 갖는다.

**후속 처리 메소드**

- `then()`: then 메소드는 두 개의 콜백 함수를 인자로 전달 받는다. 첫 번째 콜백 함수는 성공(fulfilled, resolve 함수가 호출된 상태) 시 호출되고 두 번째 함수는 실패(rejected, reject 함수가 호출된 상태) 시 호출된다.**then()은 Promise를 반환한다**
- `catch()`: 예외(비동기 처리에서 발생한 에러와 then 메소드에서 발생한 에러)가 발생하면 호출된다. catch 메소드는 Promise를 반환한다.

**Promise 체이닝**

Promise는 후속 처리 메소드인 `then`이나 `catch`로 **메소드를 체이닝(chainning)**하여 여러 개의 Promise를 연결하여 사용할 수 있다. 이로써 콜백 헬을 해결한다. then 메소드는 Promise를 반환하고, Promise는 then 메소드를 사용한다.

## 데이터를 화면에 뿌리기

이번주에는 새로운 HTML 태그를 만들고, id 속성을 활용해서 그 태그 안에 데이터를 fetch해보았다.

- 데이터가 여러개일때, 반복문을 활용해서 원하는 만큼 데이터를 뿌리기
- addEventListener 함수를 이용해서 버튼을 눌렀을 때 API 요청해서 화면에 뿌리기

* **id:** 나만을 식별할 수 있는 고유한 무언가를 말한다. class와는 다르다.
* **addEventListener**는 button에 무언가 중요한 사건(이벤트)이 발생하면 잘 귀 기울여 듣다가 실행하라는 의미이다.

## 배포하기

나는 vercel을 이용해서 배포를 해보았지만, vercel말고 다른 플랫폼들도 있다. 플랫폼들은 IaaS, PaaS, Saas로 나눌 수 있고, vercel은 PaaS에 속한다. PaaS는 플랫폼에서 개발에 필요한 모든걸 제공한다.

- CI (Continuous Integration): 지속적 통합
- CD (Continuous Delivery/Deployment): 코드를 github에 업데이트하면 배포가 다시 자동으로 되는 시스템

내가 배포한 코드는 다음과 같다.

https://basic-web-study.vercel.app/
