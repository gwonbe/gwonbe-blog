// div를 가져온 후 p삽입하기

const div = document.getElementById("div1");
div.innerHTML = (
    "<p id='typing' style='" 
    + " height: 300px;"
    + " padding: 100px;"
    + " font-size: 50px;"
    + " font-weight: bold;"
    + " line-height: 100px;"
    + " color: white;"
    + " text-shadow: 5px 5px 5px gray;"
    + "'></p>"
);

// p에 타이핑 효과 넣기

const tag = document.getElementById("typing");
const text = "Hello!\n I'm GWONBE.\n Welcome to my blog.";
let i=0;

function typing(){
    tag.innerHTML += text[i];
    if(text[i] === "\n"){
        tag.innerHTML += "<br>";
    }
    i++;
    if(i > text.length){
        tag.textContent = "";
        i = 0;
    }
};

setInterval(typing, 200);
