const div = document.getElementById("div2");

function App(){
    return (
        <div id="div2-div">
            <p id="div2-p">About Me</p>
            <table id="div2-table">
                <tr>
                    <td id="div2-image-td">
                        <img src="main/main_image_profile.png"></img>
                    </td>
                    <td>
                        <table id="div2-information-table">
                            <tr>
                                <td><p>GitHub ID</p></td><td><p>@gwonbe</p></td>
                            </tr>
                            <tr>
                                <td><p>Name</p></td><td><p>Shin Yujin</p></td>
                            </tr>
                            <tr>
                                <td><p>Major</p></td><td><p>Software</p></td>
                            </tr>
                            <tr>
                                <td><p>Dream Job</p></td><td><p>Full Stack Web Developer</p></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    );
}

ReactDOM.render(<App />, div);

$(document).ready(function(){
    $('#div2-div').css({padding: "100px", color: "white"});
    $('#div2-p').css({fontSize: "30px", padding: "100px 0px", textShadow: "3px 3px 3px gray"});
    $('#div2-information-table tr td p').css({border: "2px solid white", margin:"10px", padding: "10px", boxShadow: "5px 5px 1px 1px LightSteelBlue", height: "25px"});
    $('#div2-information-table tr td p').css({width: "100px"});
    $('#div2-information-table tr td:nth-child(even) p').css({width: "220px"});
    $('#div2-image-td').css({textAlign: 'center'});
    $('#div2-image-td img').css({width: "70%", borderRadius: "100%", border: "5px solid LightSteelBlue",});
});
