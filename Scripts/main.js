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
    "zh-tw",
    "ko-kr"
]

const langChange = (lang) => {
    let path = location.pathname;
    let pathArray = path.split("/");
    let langValue = lang;

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
}

$(() => {
    let isActive_headerLink = false;

    $("header").load("./elements/header.html");

    $(document).on('click', 'header .btn_link', () => {
        $('header .btn_link>.close').toggleClass('active');
        $('header .btn_link>.open').toggleClass('active');
        $('header nav').toggleClass('active');
    });

    $("footer").load("./elements/footer.html");

    // Language select
    const langSelectLabelQuery = '#langSelect .label';
    $(document).on('click', langSelectLabelQuery, () => {
        $('#langSelect').toggleClass('active');

    });
    pageLangages.forEach(lang => {
        $(document).on('click', `#langSelect .${lang}`, () => {
            langChange(lang);
        });
    });
});
