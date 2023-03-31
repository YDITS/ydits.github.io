// 
// main.js | YDITS Official site
//
// (c) 2022-2023 よね/Yone
//
// No modification or reproduction of any kind is permitted.
// 改変や複製を一切禁じます。
// 

$(() => {
    $("header").load("./elements/header.html");

    $(document).on('click', 'header .btn_link', () => {
            $('#headerLinksBtn>.close').toggleClass('active');
            $('#headerLinksBtn>.open').toggleClass('active');
            $('header nav').toggleClass('active');
    });

    $("footer").load("./elements/footer.html");
});
