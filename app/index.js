window.onload = function () {
console.log("giddyup");

/*--------write 'Matt Meyer' function -------------*/
  var text = $('#myname').text();

  var length = text.length;
  var timeOut;
  var character = 0;

    (function typeWriter() {
        timeOut = setTimeout(function() {
            character++;
            var type = text.substring(0, character);
            $('#myname').text(type);
            typeWriter();

            if (character == length) {
                clearTimeout(timeOut);
            }
        }, 300);
    }());


  /*---------function for 'Let's Connect*/
  $('#letsConnect').hide().delay(3000).fadeIn(100).fadeOut(100).fadeIn(150).fadeOut(150).fadeIn(200).fadeOut(200).fadeIn(250).fadeOut(250).fadeIn(100);
  var shimmer = $('#letsConnect');
    setInterval(function(){
      shimmer.hasClass('glow') ? shimmer.removeClass('glow') : shimmer.addClass('shimmer');
     }, 1000);


  /*---------toggle 2nd page (PORTFOLIO)----open/close upon clicking boat 2*/
var portfolioBoat = document.getElementById('rowboat2');
portfolioBoat.addEventListener ("click", function(e) {
  e.preventDefault();
  console.log("clicked");

  var portfolio = document.getElementById('page2');
  $(portfolio).toggle(function() {
    portfolio.style.visibility = "hidden";
    }, function() {
    portfolio.style.visibility = "visible";
    });

  $('html, body').animate({
    scrollTop: $("#page2").offset().top
      }, 1000);
    });//end portfolio eventListener


    /*---------toggle 3nd page (ABOUT)----open/close upon clicking boat 3*/
  var aboutBoat = document.getElementById('rowboat3');
  aboutBoat.addEventListener ("click", function(e) {
    e.preventDefault();
    console.log("clicked");

    var about = document.getElementById('page3');
    $(about).toggle(function() {
      about.style.visibility = "hidden";
      }, function() {
      about.style.visibility = "visible";
      });

  $('html, body').animate({
  scrollTop: $("#page3").offset().top
      }, 1000);
    });//end about eventListener


    /*---------toggle 4th page (SKILLS)----open/close upon clicking boat 4*/
var skillsBoat = document.getElementById('rowboat4')
skillsBoat.addEventListener("click", function() {
console.log("clicked");


var skills = document.getElementById('page4');
  $(skills).toggle(function() {
    skills.style.visibility = "hidden";
    }, function() {
    skills.style.visibility = "visible";
    });

$('html, body').animate({
scrollTop: $("#page4").offset().top
     }, 1000);
    });//end skillsBoat eventListener

    /*----click 'backend' and have paddle appear along with list of backend skills-----*/
var backend = document.getElementById('backend');
backend.addEventListener("click", function () {
console.log("clicked");

  var paddle2 = document.getElementById('paddle2')
  $(paddle2).toggle(function() {
    paddle2.style.visibility = "hidden";
    }, function() {
    paddle2.style.visibility = "visible";
   });
  var backEndList = document.getElementById('backEndList')
  $(backEndList).toggle(function() {
    backEndList.style.visibility = "hidden";
    }, function() {
    backEndList.style.visibility = "visible";
  });
});//end backend eventListenfront


    /*----click/toggle 'frontend' and have paddle appear along with list of frontend skills-----*/
var frontend = document.getElementById('frontend');
frontend.addEventListener("click", function () {
console.log("clicked");

  var paddle1 = document.getElementById("paddle1");
  $(paddle1).toggle(function() {
    paddle1.style.visibility = "hidden";
    }, function() {
    paddle1.style.visibility = "visible";
  });
  $(frontEndList).toggle(function() {
    frontEndList.style.visibility = "hidden";
    }, function() {
    frontEndList.style.visibility = "visible";
  });
});//end frontend eventListener

    /*----click/toggle liferin end and have new lifering appear along with 'other' skills-----*/
var lifering = document.getElementById('lifering');
lifering.addEventListener("click", function() {
  var lifering2 = document.getElementById("lifering2");
  $(lifering2).toggle(function() {
    lifering2.style.visibility = "hidden";
    }, function() {
    lifering2.style.visibility = "visible";
  });
  var music = document.getElementById("music");
  $(music).toggle(function() {
    music.style.visibility = "hidden";
    }, function() {
    music.style.visibility = "visible";
  });
});//end lifering eventListener

var chevron1 = document.getElementById('chevronarrow1');
chevron1.addEventListener("click", function() {
console.log("clicked");
  $('html, body').animate({
  scrollTop: $("#page1").offset().top
  }, 1000);
})
var chevron2 = document.getElementById('chevronarrow2');
chevron2.addEventListener("click", function() {
console.log("clicked");
  $('html, body').animate({
  scrollTop: $("#page1").offset().top
  }, 1000);
})
var chevron3 = document.getElementById('chevronarrow3');
chevron3.addEventListener("click", function() {
console.log("clicked");
  $('html, body').animate({
  scrollTop: $("#page1").offset().top
  }, 1000);
})
var chevron4 = document.getElementById('chevronarrow4');
chevron4.addEventListener("click", function() {
console.log("clicked");
  $('html, body').animate({
  scrollTop: $("#page1").offset().top
  }, 1000);
})
var music = document.getElementById('music')
music.addEventListener("click", function() {
  console.log("clicked");
  var musicPage = document.getElementById('page5')
  $(musicPage).toggle(function() {
    musicPage.style.visibility = "hidden";
    }, function() {
    musicPage.style.visibility = "visible";
  });

  $('html, body').animate({
  scrollTop: $("#page5").offset().top
  }, 1000);
})//end musicEventListener



  $("#music").hover(function() {
    console.log("hovered");
    var playSong = document.getElementById('rainbowsPlay');
     playSong.play();
  });

  $(".lifering2").hover(function() {
    console.log("huvahuva");
    var pauseSong = document.getElementById('rainbowsPlay');
     pauseSong.pause();
  });
}; //end window.onload
