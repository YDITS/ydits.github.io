// 
// main.js | YDITS site
//
// Copyright (c) YDITS, よね/Yone
//
// No modification or reproduction of any kind is permitted.
// 改変や複製を一切禁じます。
// 

$(() => {
    setTimeout(() => {
        $("header").load("./ko-kr/elements/header.html");
    }, 500);
    setTimeout(() => {
        $("footer").load("./ko-kr/elements/footer.html");
    }, 500);
});
