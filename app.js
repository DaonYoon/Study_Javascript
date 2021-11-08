// 0.0 ~ 2.8 복습!


//변수설정 
const a = 5;  //const란 변하지않는값 상수 란 뜻
const isDaonFat = true;


isDaonFat = false; // 선언을해도 변하지않는값이기떄문에 변경이 안됨.


let daonHandSome = true;


daonhandsome = false; // let을 사용하면 변경이 가능함


const b = null;

let hello;
console(hello); // undefined hello가 존재하지만 아무값도없다는뜻


//create array 아무값이나 들어갈수있음
const days = [1, 2, false, true, null, undefined,, "text"]; 

const tobuy =["potato", "tomato", "pizza"];

tobuy[2] // 속성의 2값을불러옴 속성은 0부터시작 ex 0..1...2
tobuy[2] = "water"; // 속성의2값을 water로 수정함
tobuy.push("one") // array 속성의 one 이라는 속성 추가


// Object part
const player = {  //player 오브젝트 생성
    name: "daon",
    age: 25,
};

player.name  // 플레이어의 name값
console.log(player.name) // 플레이어의 name 출력

player.name = "nico"; // player name값을 nico로 변경
player.sexy = "soon"; //player 의 sexy라는 값 추가
 


//function part 계산기 만들기

const calcultor = {    //계산기기능 만들기
    add:function(a, b){
        console.log(a + b);
    },
    minus:function(a, b){
        console.log(a - b);
    },
    div:function(a, b){
        console.log(a / b);
    },
    multi:function(a, b){
        console.log(a * b);
    },
    power:function(a, b){
        console.log(a ** b);
    }
}