$(window).ready(function(){
    $(window).resize(function(){
        if(window.innerWidth <= 500){
            $('#body-area').css('padding', '20px');
            $('#main').css('width', '100%');
        }else if(window.innerWidth <= 800){
            $('#body-area').css('padding', '30px');
            $('#main').css('width', '90%');
        }else if(window.innerWidth <= 1000){
            $('#body-area').css('padding', '40px');
            $('#main').css('width', '80%');
        }else if(window.innerWidth <= 1300){
            $('#body-area').css('padding', '50px');
            $('#main').css('width', '70%');
        }else{
            $('#body-area').css('padding', '50px');
            $('#main').css('width', '50%');
        }
    });
});