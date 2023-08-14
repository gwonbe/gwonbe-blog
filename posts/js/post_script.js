/* jQuery : resize 이벤트 */

$(window).ready(function(){
    $(window).resize(function(){
        // 전체 padding
        if(window.innerWidth <= 500){
            $('#body-area').css('padding', '20px');
            $('#main').css('width', '100%');
        }else if(window.innerWidth <= 800){
            $('#body-area').css('padding', '30px');
            $('#main').css('width', '90%');
        }else if(window.innerWidth <= 1100){
            $('#body-area').css('padding', '40px');
            $('#main').css('width', '80%');
        }else{
            $('#body-area').css('padding', '50px');
            $('#main').css('width', '70%');
        }
        // 메뉴바 display
        if(window.innerWidth < 1400){
            $('#menubar').css('display', 'none');
        }else{
            $('#menubar').css('display', 'block');
        }
    });
});

/* 스크롤 버튼 */

areaH = document.getElementById("body-area");
areaF = document.getElementById("footer");
btnU = document.getElementById("scroll-up");
btnD = document.getElementById("scroll-down");

function moveToTop(){
    areaH.scrollIntoView({behavior:"smooth"});
}
function moveToBottom(){
    areaF.scrollIntoView({behavior:"smooth"});
}

btnU.addEventListener("click", moveToTop);
btnD.addEventListener("click", moveToBottom);