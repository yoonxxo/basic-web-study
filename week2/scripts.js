let root = document.getElementById("root"); //"root"라는 id를 가진 태그를 변수로 선언
let postsButton = document.getElementById("posts"); //"posts"라는 id를 가진 태그를 변수로 선언

postsButton.addEventListener("click", onButtonClick); //onButtonClick()로 쓰지 않기 주의

function onButtonClick() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((response) => response.json())
        .then((json) => render(json)); //render 함수에 json 데이터를 전달하여 화면에 렌더링한다.
}

function render(data){
    for (let i=0; i < data.length; i++){ //반복문으로 데이터 넣기
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        //1. h2, p 태그 변수 만들기

        h2.innerText = data[i].title;
        p.innerText = data[i].body;
        //2. 태그에 데이터 넣기

        root.appendChild(h2);
        root.appendChild(p);
        //3. root 태그에 h2, p 태그 추가하기
    }
}