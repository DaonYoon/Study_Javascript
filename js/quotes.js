const quotes = [
    {
        quote: "어제와 똑같은 하루를 살면서 변화를 원하는것은 정신병의 초기질환이다.",
        author: "Daon Yoon",
    },
    {
        quote: "노력없이 얻는것도 없다.",
        author: "Daon Yoon",
    },
    {
        quote: "쉽게 얻은건 쉽게 떠난다.",
        author: "Daon Yoon",
    },
    {
        quote: "자본주의란 노력하는 자에겐 천국이요 게으른 자에겐 지옥이여다.",
        author: "Daon Yoon",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그꿈을 닮아간다.",
        author: "Will niche",
    },
    {
        quote: "웃음이 없는 하루는 버린 하루다",
        author:"찰리 채플린",
    },
    {
        quote: "행동은 모든 성공의 가장 기초적인 핵심이다",
        author:"파블로 피카소",
    },
    {
        quote: "인생에서 실패한 사람의 대부분은 성공이 눈앞에 왔는데도 모르고 포기한 사람들이다.",
        author:"토마스 에디슨",
    },
    {
        quote: "오늘 나무 그늘에서 쉴 수 있는 이유는 예전에 나무를 심었기 때문이다",
        author:"워렌 버핏",
    },
    {
        quote: "너는 머뭇거릴 수 있지만, 시간은 그렇지 않다",
        author:"벤자민 프랭클린",
    },
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.round(1.8) 반내림 또는 반올림
// Math.ceil(1.1) 2가됨 소수가있으면 그냥 올려버림
// Math.floor(1.9) 1로내려버림 소수가있으면 그냥 내려버림

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

