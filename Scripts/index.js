// 
// index.js | Project | YDITS Official site 
//
// (c) 2022-2023 よね/Yone
// 

$(document).on('DOMContentLoaded', form());

function form(){

    let formPath = "https://docs.google.com/forms/d/e/1FAIpQLSce_20PsxNGSIf893ybw00MGUI1X20WrprNBkAhC8L3lHW7eA/viewform";

    $(document).on('click', '#sendBtn', function(){
        if (document.getElementById('agreeChk').checked && document.getElementById('ageChk').checked) {
            console.log('clicked')
            window.open(formPath, '_blank');
        } else {
            $('#error').addClass('show');
        }
    });
}
