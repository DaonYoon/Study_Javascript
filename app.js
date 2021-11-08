// let myName = "nico";

// myName = "nicolas";

// console.log("your new name is " + myName);



// Array(배열)


const dayofweek = ["mon", "tue", "wed", "thu", "fri", "sat"];


// Get item from array
// console.log(dayofweek[5]);

//add one more day to the array

// dayofweek.push("sun");

// Object


//이렇게 만드는 방식도 있다. 다만 비효율적임
const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";


//

const player = {
    name: "nico",
    points: 10,
    fat: true,
};

// player 접근방법
console.log(player); 
console.log(player["name"]);
console.log(player.name);


player.name
player.lastName = "potato"; // 오브젝트 추가하는 방법 

player.fat = false; // player 속성은 변경이 가능하다 단 전체를 바꾸는건 불가능
console.log(player); 