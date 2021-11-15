const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); //pad start는 문자크기 2가 아니면 앞에 0을붙여라
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    
}

getClock();
setInterval(getClock, 1000); // 5초마다 실행
// setTimeout(sayHeelo, 5000);  //5초뒤에 한번만 실행