const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const loginInput = document.querySelector("#login-form input"); 쿼리셀렉터를쓸때는 이렇게

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("HIDDEN_CLASSNAME");
   
    localStorage.setItem("USERNAME_KEY", username);  // 값을 저장함
    paingTreetings();
   
}


loginForm.addEventListener("submit", onLoginSubmit); // 제출 클릭 이벤트

const savedUsername = localStorage.getItem("USERNAME_KEY");

function paingTreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = "hello" + USERNAME_KEY;
    greeting.classList.remove(HIDDEN_CLASSNAME);
   
}

console.log(savedUsername);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
  paingTreetings();
}