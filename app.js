const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

const link = document.querySelector("a");

// const loginInput = document.querySelector("#login-form input"); 쿼리셀렉터를쓸때는 이렇게

function onLoginSubmit(event) {
event.preventDefault();
//  const username = loginInput.value;
    console.log(loginInput.value);
}

function linkClick(event) {
event.preventDefault();
console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);

link.addEventListener("click", linkClick)

