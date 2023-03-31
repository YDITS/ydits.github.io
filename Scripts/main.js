// 
// main.js | YDITS Official site
//
// (c) 2022-2023 よね/Yone
//
// No modification or reproduction of any kind is permitted.
// 改変や複製を一切禁じます。
// 

$(() => {
    let isActive_headerLink = false;

    $("header").load("./elements/header.html");

    $(document).on('click', 'header .btn_link', () => {
        if (!isActive_headerLink) {
            isActive_headerLink = true;

            $('header .btn_link>.open').removeClass('active');
            $('header .btn_link>.close').addClass('active');

            $('header nav').addClass('active');
        } else if (isActive_headerLink) {
            isActive_headerLink = false;

            $('header .btn_link>.close').removeClass('active');
            $('header .btn_link>.open').addClass('active');

            $('header nav').removeClass('active');
        }
    });

    $("footer").load("./elements/footer.html");
});
