const div = document.getElementById("div4");

function App(){
    return (
        <div id="div4-div">
            <p id="div4-p">MY Pages</p>
            <div>
                <a href="https://github.com/gwonbe" target="_blank" title="GitHub">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://codesandbox.io/u/gwonbe" target="_blank" title="CodeSandbox">
                    <i class="fa-sharp fa-regular fa-square"></i>
                </a>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, div);

$(document).ready(function(){
    $('#div4-div').css({padding: "100px"})
    $('#div4-p').css({fontSize: "30px", padding: "70px 0px", textShadow: "3px 3px 3px gray", color: "white"});
    $('#div4-div div a').css({textDecoration: "none", padding: "0px 25px"});
    $('#div4-div div a i').css({color: "black", fontSize: "80px"});
    $('#div4-div div a i').hover(
        function () { $(this).css({fontSize: "100px", padding: "20px 0px 0px 0px", transition: "0.3s ease-out"}); }, 
        function () { $(this).css({fontSize: "80px", padding: "20px 0px 0px 0px", transition: "0.3s ease-out"}); },
    );
});
