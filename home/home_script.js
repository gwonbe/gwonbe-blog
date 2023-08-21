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

/* 게시물 검색 */

function filter(){
    var value, name, item, i;
    value = document.getElementById("value").value.toUpperCase();
    item = document.getElementsByClassName("item");
    for(i=0; i<item.length; i++){
        name = item[i].getElementsByClassName("name");
        if(name[0].innerHTML.toUpperCase().indexOf(value) > -1) item[i].style.display = "flex";
        else item[i].style.display = "none";
    }
}

/* 콘텐츠 가로 너비 */

$(window).ready(function(){
    $(window).resize(function(){
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
    });
});
