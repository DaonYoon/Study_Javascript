// 3.7 CSS In JavaScript part tow and toggle
const h1 = document.querySelector("div.hello:first-child h1");

function handletitleClick() {
  //  const clickedClass = "clicked";
//   if  (h1.classList.contains(clickedClass)) {
//       h1.classList.remove(clickedClass);
//   }
//   else {
//       h1.classList.add(clickedClass);
//   }
    h1.classList.toggle("clicked"); // clicked가 있으면 삭제 없으면 생성
}

h1.addEventListener("click", handletitleClick);