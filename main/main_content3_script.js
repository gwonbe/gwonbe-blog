const div = document.getElementById("div3");

function App(){
    return (
        <div id="div3-div">
            <p id="div3-p">My Portfolio</p>
            <div id="div3-slide-container">
                <div id="div3-slide-album">
                    <div id="div3-slide-images">
                        <img class="div3-img" src="main/main_image_portfolio1.png" alt="error"></img>
                        <img class="div3-img" src="main/main_image_portfolio2.png" alt="error"></img>
                        <img class="div3-img" src="main/main_image_portfolio3.png" alt="error"></img>
                        <img class="div3-img" src="main/main_image_portfolio4.png" alt="error"></img>
                        <img class="div3-img" src="main/main_image_portfolio5.png" alt="error"></img>
                        <img class="div3-img" src="main/main_image_portfolio6.png" alt="error"></img>
                    </div>
                    <button id="div3-btn-l"><strong>&larr;</strong></button>
                    <button id="div3-btn-r"><strong>&rarr;</strong></button>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, div);

// 이미지 슬라이드 변수

const btnL = document.getElementById("div3-btn-l");
const btnR = document.getElementById("div3-btn-r");
const slideImgs = document.getElementById("div3-slide-images");
const images = document.getElementsByClassName("div3-img");
const len = images.length;
const IMG_WIDTH = 500;
let imgIndex = 0;
let position = 0;

// 이미지 슬라이드 함수

function toLeft(){
    if (imgIndex > 0) {
        btnR.removeAttribute("disabled");
        position += IMG_WIDTH;
        slideImgs.style.transform = `translateX(${position}px)`;
        slideImgs.style.transition = "transform .5s ease-out";
        imgIndex = imgIndex - 1;
    }
    if (imgIndex == 0) {
        btnL.setAttribute("disabled", "true");
    }
};
function toRight(){
    if (imgIndex < len) {
        btnL.removeAttribute("disabled");
        position -= IMG_WIDTH;
        slideImgs.style.transform = `translateX(${position}px)`;
        slideImgs.style.transition = "transform .5s ease-out";
        imgIndex = imgIndex + 1;
    }
    if (imgIndex == len-1) {
        btnR.setAttribute("disabled", "true");
    }
};

// 이미지 슬라이드 실행

function init(){
    // 초기화
    btnL.setAttribute("disabled", "true");
    // 이벤트 리스너 추가
    btnL.addEventListener("click", toLeft);
    btnR.addEventListener("click", toRight);
};

init();

// jquery

$(document).ready(function(){
    $('#div3-div').css({padding: "100px 0px"});
    $('#div3-p').css({fontSize: "30px", padding: "60px 0px", textShadow: "3px 3px 3px gray", color: "white"});
    // 이미지 슬라이드
    const imgW = "500px";
    const imgH = "250px";
    const btnDistance = "15px";
    $('#div3-slide-container').css({width: imgW, height: imgH, border: "3px solid white", boxShadow: "7px 7px 1px 1px LightSteelBlue"});
    $('#div3-slide-album').css({position: "relative", width: imgW, height: imgH, overflow: "hidden"});
    $('#div3-slide-images').css({position: "relative", width: imgW, height: imgH, display: "flex"});
    $('#div3-slide-images img').css({width: imgW, height: imgH});
    // 이미지 슬라이드 - 좌우 버튼
    $('#div3-btn-l, #div3-btn-r, #div3-btn-l:active, #div3-btn-r:active, #div3-btn-l:focus, #div3-btn-r:focus').css({position: "absolute"});
    $('#div3-btn-l, #div3-btn-r').css({top : "50%", width: "30px", height: "30px", backgroundColor: "white", border: "3px solid black", borderRadius: "100%"});
    $('#div3-btn-l, #div3-btn-r').hover(
        function () { $(this).css({cursor: "pointer"}); }, 
        function () { $(this).css({cursor: "default"}); },
    );
    $('#div3-btn-l').css({left: btnDistance});
    $('#div3-btn-r').css({right: btnDistance});
});
