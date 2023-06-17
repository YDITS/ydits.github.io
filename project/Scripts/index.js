// 
// index.js | Project | YDITS Official site 
//
// Copyright (c) YDITS
// 

$(() => {
    const FORM_PATH = "https://docs.google.com/forms/d/e/1FAIpQLSce_20PsxNGSIf893ybw00MGUI1X20WrprNBkAhC8L3lHW7eA/viewform";

    $(document).on('click', '#sendBtn', () => {
        if (document.getElementById('agreeChk').checked && document.getElementById('ageChk').checked) {
            window.open(FORM_PATH, '_blank');
        } else {
            $('#error').addClass('show');
        }
    });
});
