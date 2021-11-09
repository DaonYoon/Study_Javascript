//3.0 ~ 3.6  The Document Object ~ EVENT , CSS in javascript

// JS로h1 설정가능
//document.title = "hello! From Js";



// const title = document.getElementById("title");  //title이란 변수에 id가 title인 html 설정

// title.innerText = "Got You!" // 안에 글자 got you로 수정

// console.log(title.className); // title의 클래스 이름

// const title = document.querySelector("div.hello:first-child h1");

// const title = document.querySelectorAll(".hello h1"); All이 붙으면 모든걸 찾아줌

// console.log(title);

// title.style.color = "blue";

const h1 = document.querySelector("div.hello:first-child h1");



// function handletitleClick() { //클릭함수 생성 
//    h1.style.color = "blue"; //호출되면 실행
// }

// function handlemouseEnter() { //마우스 올릴떄 실행되는 함수
// h1.innerText = "Mouse is Here!";

// }
// function handlemouseleave(){  // 마우스 내릴때 실행되는 함수
// h1.innerText = "Mouse is Gone!";
// h1.style.color ="black";
// }
// function handleWindowresize() {  //윈도우 사이즈 바끼면 실행
//     document.body.style.background ="skyblue";
// }
// function handlewindowcopy() {  // 복사할시 실행
//     alert("Copier!");
// }

// function handlewindowoffline() {   //와이파이꺼지면
//     alert("S O S We are offline!");
// }
// function handlewindowonline() {  //다시켜지면
//     alert("All good!");
// }

// //h1.addEventListener("click", handletitleClick); // 이벤트호출 클릭이되면 뒤에 함수 실행
// h1.onclick = handletitleClick; // 이런방식으로도 호출가능함 자기 편한대로 하멷뇜

// h1.onmouseenter = handlemouseEnter;
// h1.onmouseleave = handlemouseleave;



// window.addEventListener("resize", handleWindowresize);
// window.addEventListener("copy", handlewindowcopy);
// window.addEventListener("offline", handlewindowoffline);
// window.addEventListener("online", handlewindowonline);

function handlemouseEnter() {
    const currentcolor = h1.style.color;
    let newcolor;
   if (currentcolor === "blue"){  // h1 컬러가 블루일경우 
       newcolor = "tomato";   // 컬러를 토마토로바꿔라
   } else {                         // 그게아니라면
      newcolor = "blue";      // 블루로 바꿔라
   }
   h1.style.color = newcolor;
}
h1.onclick = handlemouseEnter;