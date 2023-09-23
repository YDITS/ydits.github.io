/*
 *
 * main.js | YDITS Site
 *
 * (c) YDITS, よね/Yone
 *
 * No modification or reproduction of any kind is permitted.
 * 改変や複製を一切禁じます。
 *
 */

$(() => {
    setTimeout(() => {
        $("header").load("./en-us/elements/header.html");
        $("footer").load("./en-us/elements/footer.html");
    }, 500);
});
