## HTML과 JS 연결하기

### 문자열

문자열 선언과 출력 방법은 다음과 같다.

```jsx
let hello = "Hello Hongik"; // "", '', `` 다 가능
console.log(hello);
```

### 배열

객체 타입의 한 종류이다.

```jsx
//방법1: [] 사용
const array = [];
//방법2: Array 생성자 사용
const arr = new Array(1, 2, 3);

const numbers = new Array(5);
//다음과 같은 경우 길이가 5인 빈 배열이 만들어진다.
```

1. 배열 인자를 추가할 수 있다.

   ```jsx
   let arr = [1, 2];
   arr.push(3);

   console.log(arr); // [1, 2, 3]
   ```

2. 한 배열 안에 서로 다른 타입이 섞여 있을 수 있다.
3. 인덱스로 접근한다.

   ```jsx
   let fruits = ["apple", "banana"];

   console.log(fruits[0]); // apple
   console.log(fruits[1]); // banana
   ```

4. lenth 속성이 있다.

### 객체(Object) 타입

: 변수 하나에서 여러 속성과 값을 가진다.

다음은 객체 타입을 선언하고 출력하는 코드이다.

```jsx
//방법1: 객체 내부에서 속성, 값 정의
let hongik = { name: "hongik university", location: "Seoul" };
console.log(hongik);
console.log(hongik.location); //특정 속성만 출력
//방법2: 객체 외부에서 속성, 값 정의
let wow = {};
wow.name = "WOW";
console.log(wow);
```

위 코드에서 console도 객체이고, log는 속성이다. 브라우저 내부에는 document라는 객체도 있다. Javascript에서 document라는 객체는 script태그로 연결한 HTML문서를 말한다. `<script src="scripts.js"><script>`

HTML 안의 특정 태그에 내용을 추가할 때, HTML 태그 내용을 하나하나 수정하는 것이 아니라 특정 태그를 변수로 지정해서 한번에 관리하면 더 편리하다. 이때 JS를 이용한다. 아래의 예시는 HTML의 section태그 밑에 p태그를 추가하는 코드이다.

```jsx
let bodyTag = document.body;

// section 태그를 찾는다.
let sectionTag = document.querySelector("section");

// p태그를 만든다.
let pTag = document.createElement("p");

// p 태그에 텍스트를 추가한다.
pTag.innerText = "프로미스나인";

// p 태그를 section 태그에 추가한다.
sectionTag.appendChild(pTag);

//축제 라인업 객체 생성
let hongikFestival = {
  name: "축제 라인업",
  date: "2026.05.13-2026.05.15",
  location: "홍익대학교",
  lineup: {
    day1: "다이나믹듀오",
    day2: "백예린",
    day3: "프로미스나인",
  },
};
//축제 라인업 중 다이나믹듀오를 추가한다.
let dynamicDuoTag = document.createElement("p");
dynamicDuoTag.innerText = hongikFestival.lineup.day1;
sectionTag.appendChild(dynamicDuoTag);
```

### JS에서 특정 class가 붙은 HTML 태그 조작

1. getElementsByClassName(): 클래스명으로 요소 가져오기

   ```jsx
   <p class="text">안녕</p>
   <p class="text">반가워</p>
   const texts = document.getElementByClassName("text"); //안녕, 반가워 가져옴

   texts[0] // 안녕
   texts[1].style.color="red"; 반가워의 color를 red로 바꿈
   ```

2. querySelector(): 첫번째 요소 가져오기

   ```jsx
   const text = document.querySelector(".text"); //.text: class 선택자
   text.style.color = "blue"; //안녕 color를 blue로 바꿈
   ```

3. querySelectorAll(): 해당 class 요소 전부 가져오기

   ```jsx
   const texts = document.querySelectorAll(".text");

   texts.forEach((item) => {
     item.style.color = "green";
   }); //전체 수정
   ```

4. class 추가, 제거, 토글

   ```jsx
   const box = document.querySelector(".box");
   box.classList.add("active"); //class 추가
   box.classList.remove("active"); //class 제거
   box.classList.toggle("active"); //토글 (있으면 제거, 없으면 추가)
   ```

### DOM

: HTML 태그 하나하나를 JS로 컨트롤할 수 있도록 만든 객체 체계. 계층적 구조이다. HTML의 구조적 문서와 같은 맥락이다.

![image.png](attachment:9a2169fd-2e9c-4a2f-9083-bad5c8a3a7e4:image.png)

## JavaScript

: HTML과 달리 같은 페이지 내에서 다른 정보를 볼 수 있도록 한다. 웹 문서를 동적으로 만든것

**_script 태그는 </body>앞에 작성해야 한다._**

<브라우저의 동작 방식>

1. HTML 파일 열기
2. HTML문서 파싱하다가 script 발견하면 파싱을 중단하고, script 파일을 실행한다. 그 후 이어서 파싱한다.
3. DOM 트리 만들기

   \*DOM(Document Object Model): HTML 태그 하나하나를 자바스크립트로 컨트롤할 수 있도록 만든 객체 체계. 트리구조이다.

4. 화면에 표시하기

_그래야 화면이 늦게 뜨고, 순서가 꼬이는 문제가 안생긴다._
