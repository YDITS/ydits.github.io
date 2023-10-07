/*
 *
 * main.js | YDITS Site
 *
 * (c) よね/Yone
 *
 * No modification or reproduction of any kind is permitted.
 * 改変や複製を一切禁じます。
 *
 */

$(() => {
    setTimeout(() => {
        $("header").load("./zh-cn/elements/header.html");
        $("footer").load("./zh-cn/elements/footer.html");
    }, 500);
});
