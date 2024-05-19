/*
 *
 * YDITS Website
 *
 * Copyright (c) よね/Yone
 *
 * No modification or reproduction of any kind is permitted.
 * 改変や複製を一切禁じます。
 *
 */

(() => {

const pageLangages = [
    "ja-jp",
    "en-us",
    "zh-cn",
    "zh-tw",
    "ko-kr"
]

const headerInnerHtml = `
<div class="content">
    <a id="headerLogo" href="./">
        <img src="https://cdn.ydits.net/images/ydits_logos/ydits_logo_white_transparent.png" alt="YDITS icon">
    </a>

    <div id="headerMenuButton">
        <span class="material-symbols-outlined open">menu</span>
        <span class="material-symbols-outlined close">close</span>
    </div>

    <nav id="headerMenu">
        <ul>
            <li><a href="./">ホーム</a></li>
            <li><a href="https://www.yoneyo.com/#contact">お問い合わせ</a></li>
        </ul>
    </nav>
</div>
`;

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

    document.getElementsByTagName("header")[0].innerHTML = headerInnerHtml;

    $(document).on('click', '#headerMenuButton', () => {
        $('#headerMenuButton').toggleClass('opened');
        $('#headerMenu').toggleClass('active');
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

})();