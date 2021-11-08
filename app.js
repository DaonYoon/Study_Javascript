
// 2.7 ~ 2.8 Functions part

// Functions 은 비슷한코드를 반복적으로 적지않고 더욱 적은 코드를 이용하여 
// 더욱 효율적으로 코딩을 할수있게 해주는 것

function sayHello(nameOfperson, age) { // 인자이름은 아무렇게해도 상관없긴하다.
    console.log("Hello my name is " + nameOfperson + " my age is " + age);
}

sayHello("nico", 10); // 속성을 보내줌
sayHello("dal", 23);
sayHello("lynn", 21);



function plus(firstnumber, secondnumber) { // 더하기 함수
    console.log(firstnumber + secondnumber);
}

plus(1, 3);


function divide(a, b) { //나누기 함수
    console.log(a / b);
}
divide(60, 8);

const player = {
    name: "daon",
    sayHello: function(otherPersonName) {
        console.log("hello! " + otherPersonName + " Nice to meet you!");
    }
}

console.log(player.name);
player.sayHello("lynn");