// 2.13 ~ 2.15 Conditionals IF문


 // 이방법은 잘안씀(오래된 방식) 그이유는 코드가 이쁘지않고 css적용 불가능함
 //const age = prompt("how old are you?");
// console.log(typeof age); type 확인방법


//parseInt(age);  String을 int로 변환함


// 받는값을 숫자로 변환 숫자가아닐경우 NaN이뜸 (Not of Number)
//const age = parseInt( prompt("How old are you?"));

// console.log(age);

const age = parseInt( prompt("How old are you?"));
console.log(isNaN(age));

if(isNaN(age)){ //숫자가 아닐경우 해당
    console.log("please write a number");
}
else if(age < 18 ) {  //18살보다 작을떄 해당
    console.log("your too young");
}
else if(age >= 18 && 30 >= age) {  //18살 이상이거나 30살 이하 둘다 충족할때 
    console.log("You so nice age!");
}
else if(age < 0 || age > 100){   // 0살보다 작거나 100살보다 많으면 해당 
    console.log("your age is ..... sorry");
}
//else 는 선택적사항 꼭 넣어야 하는건 아님

if((a && b) || (c && d)) {  // 뒤에꺼부터 계산됨 C , D 가 트루, a , b 가 트루, 또 둘중하나가 트루면 작동

}