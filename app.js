const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";

// const loginInput = document.querySelector("#login-form input"); 쿼리셀렉터를쓸때는 이렇게

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("HIDDEN_CLASSNAME");
    greeting.innerText ="hello" + username; 
    localStorage.setItem("username", username);  // 값을 저장함
    greeting.classList.remove("HIDDEN_CLASSNAME");
}




function linkClick(event) { // 링크가 클릭됬을때 
event.preventDefault();   // 예의 동작을 막음

}

loginForm.addEventListener("submit", onLoginSubmit); // 제출 클릭 이벤트

link.addEventListener("click", linkClick) // 링크 클릭이벤트

