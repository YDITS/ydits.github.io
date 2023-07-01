// 
// main.js | YDITS site
//
// Copyright (c) YDITS, よね/Yone
//
// No modification or reproduction of any kind is permitted.
// 改変や複製を一切禁じます。
// 

const pageLangages = [
    "ja-jp",
    "en-us",
    "zh-cn",
    "zh-tw"
]

$(() => {
    let isActive_headerLink = false;

    $("header").load("./elements/header.html");

    $(document).on('click', 'header .btn_link', () => {
        $('header .btn_link>.close').toggleClass('active');
        $('header .btn_link>.open').toggleClass('active');
        $('header nav').toggleClass('active');
    });

    $("footer").load("./elements/footer.html");

    $(document).on('change', '#langSelectBox', () => {
        const langSelectBox = document.getElementById('langSelectBox');
        let path = location.pathname;
        let pathArray = path.split("/");
        let langValue = langSelectBox.value;

        if (pageLangages.includes(pathArray[1])) {
            if (langValue == "ja-jp") {
                location.pathname = path.slice(6);
            } else {
                location.pathname = langValue + path.slice(6);
            }
        } else {
            if (langValue == "ja-jp") {
                location.pathname = path;
            } else {
                location.pathname = langValue + path;
            }
        }
    });
});
