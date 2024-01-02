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


    $("main").prepend(`
        <a id="notice" href="./news/2024/01/0201/">
            <div class="wrapper">
                <p>能登半島地震についての情報</p>
                <span class="material-symbols-outlined">
                    double_arrow
                </span>
            </div>
        </a>
    `)
    $("#notice").css({
        "display": "block",
        "padding": ".5em",
        "background-color": "#d04020ff",
        "user-select": "none",
        "text-decoration": "none"
    });
    $("#notice>.wrapper").css({
        "display": "flex",
        "align-items": "center",
        "width": "calc(100% - 2em)",
        "padding": "1em",
        "background-color": "#f06040ff",
        "color": "#ffffffff",
    });
});
