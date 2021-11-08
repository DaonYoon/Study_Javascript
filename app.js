// 2.11 ~ 12 Function Returns and Recap

const age = 96;

function calculateKrAge(ageOfForeigner) {
   return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

const calcultor = {    //계산기기능 만들기
    plus:function(a, b){
       return a + b;   //Return 할시 작업은끝남
       console.log("hello") //이 명령문은 작동하지않음 함수는 return해버리면 function을 종료해버림
    },
    minus:function(a, b){
       return a - b;
    },
    div:function(a, b){
       return a / b;
    },
    multi:function(a, b){
       return a * b;
    },
    power:function(a, b){
       return a ** b;
    }
} 

const plusResult = calcultor.plus(2, 3);
const minusResult = calcultor.minus(plusResult, 10);
const multiResult = calcultor.multi(10, minusResult);
const divResult = calcultor.div(multiResult, plusResult);
const powerResult = calculate.power(divResult, minusResult);


console.log(plusResult);