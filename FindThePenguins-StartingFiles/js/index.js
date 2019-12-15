$(document).ready(function () {

    //This code will run after your page loads
    var num;
    var score = 0;
    var highScore = 0;
    var flag = 0;
    var span = document.getElementsByClassName("close")[0];
    getRandomImage();
    $(".divClick").on('click', function (event) {
        setgame($(this));

    });

    function setgame(all) {
        var number = all.attr('id');
        var lastChar = number.substr(number.length - 1);
        if (all.hasClass("divClick yetti")) {
            all.css('background-image', 'url(images/yeti.png)');
            var playPromise = document.getElementById("LooseAudio").play();
            alertbox();

            if (playPromise !== undefined) {
                playPromise.then(function () {






                }).catch(function () {
                    console.log('Play function has an error.');
                });
            }
        } else {
            score = score + 1;
            var playPromise = document.getElementById("winAudio").play();
            if (playPromise !== undefined) {
                playPromise.then(function () {
                    $("#score").html('score : ' + score + '<br>High Score : ' + highScore);
                    all.css('background-image', 'url(images/penguin_' + lastChar + '.png)');
                    setPointer(lastChar);
                }).catch(function () {
                    console.log('Play function has an error.');
                });
            }
        }

    }

    function setPointer(lastChar) {
        document.getElementById('penguin' + lastChar).style.pointerEvents = 'none';
    }

    function update_score(score, highScore) {
        if (highScore < score) {
            highScore = score;
            return highScore;
        } else {
            highScore = highScore;
            return highScore;
        }

    }

    function getRandomImage() {

        num = Math.floor((Math.random() * 9) + 1);
        $("#penguin" + num).addClass('yetti');
        $("#penguin" + num).attr('id', 'yeti')
    }

    function default_image(fn) {
        $("#yeti").attr('id', 'penguin' + num);
        $("#penguin1").removeClass('yetti');
        $("#penguin2").removeClass('yetti');
        $("#penguin3").removeClass('yetti');
        $("#penguin4").removeClass('yetti');
        $("#penguin5").removeClass('yetti');
        $("#penguin6").removeClass('yetti');
        $("#penguin7").removeClass('yetti');
        $("#penguin8").removeClass('yetti');
        $("#penguin9").removeClass('yetti');

        $("#penguin1").css('background-image', 'url("images/mound_1.png")');
        $("#penguin2").css('background-image', 'url("images/mound_2.png")');
        $("#penguin3").css('background-image', 'url("images/mound_3.png")');
        $("#penguin4").css('background-image', 'url("images/mound_4.png")');
        $("#penguin5").css('background-image', 'url("images/mound_5.png")');
        $("#penguin6").css('background-image', 'url("images/mound_6.png")');
        $("#penguin7").css('background-image', 'url("images/mound_7.png")');
        $("#penguin8").css('background-image', 'url("images/mound_8.png")');
        $("#penguin9").css('background-image', 'url("images/mound_8.png")');

        //to reset the pointer for clicking again
        document.getElementById('penguin1').style.pointerEvents = 'auto';
        document.getElementById('penguin2').style.pointerEvents = 'auto';
        document.getElementById('penguin3').style.pointerEvents = 'auto';
        document.getElementById('penguin4').style.pointerEvents = 'auto';
        document.getElementById('penguin5').style.pointerEvents = 'auto';
        document.getElementById('penguin6').style.pointerEvents = 'auto';
        document.getElementById('penguin7').style.pointerEvents = 'auto';
        document.getElementById('penguin8').style.pointerEvents = 'auto';
        document.getElementById('penguin9').style.pointerEvents = 'auto';
        // a callback function.
        fn();
    }
    $("#btn").on('click', function (event) {
        window.location.reload();
    });
    $("#yes").on('click', function (event) {
        
        default_image(getRandomImage);
        highScore = update_score(score, highScore);
        $("#score").empty();
        score = 0;
        $("#score").html('score : ' + score + '<br>High Score : ' + highScore);
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    });
    $("#no").on('click', function (event) {
        $("#gameholder").css("display", "none");
        $("#thanks").html("<h2>Thanks for Playing</h2>");
        $("#btn").css('display', 'block');
        $("#score").css('display', 'block');
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
         $("#score").css("display","none");
    });

    function alertbox() {
        var modal = document.getElementById('myModal');
        var btn = document.getElementById("myBtn");
        modal.style.display = "block";
    }
   

});
