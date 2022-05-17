AOS.init({ duration: 800, easing: "slide", once: false });
jQuery(document).ready(function ($) {
  "use strict";
  $(".loader").delay(1000).fadeOut("slow");
  $("#overlayer").delay(1000).fadeOut("slow");
  var siteMenuClone = function () {
    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });
    setTimeout(function () {
      var counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        var $this = $(this);
        $this.prepend('<span class="arrow-collapse collapsed">');
        $this
          .find(".arrow-collapse")
          .attr({
            "data-toggle": "collapse",
            "data-target": "#collapseItem" + counter,
          });
        $this
          .find("> ul")
          .attr({ class: "collapse", id: "collapseItem" + counter });
        counter++;
      });
    }, 1000);
    $("body").on("click", ".arrow-collapse", function (e) {
      var $this = $(this);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });
    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();
      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
    $("body").on("click", ".js-menu-toggle", function (e) {
      var $this = $(this);
      e.preventDefault();
      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });
     $("body").on("click", ".site-nav-wrap .nav-link", function (e) {
       var $this = $(this);
       console.log("close");
      e.preventDefault();
      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  };
  siteMenuClone();
  var sitePlusMinus = function () {
    $(".js-btn-minus").on("click", function (e) {
      e.preventDefault();
      if ($(this).closest(".input-group").find(".form-control").val() != 0) {
        $(this)
          .closest(".input-group")
          .find(".form-control")
          .val(
            parseInt(
              $(this).closest(".input-group").find(".form-control").val()
            ) - 1
          );
      } else {
        $(this).closest(".input-group").find(".form-control").val(parseInt(0));
      }
    });
    $(".js-btn-plus").on("click", function (e) {
      e.preventDefault();
      $(this)
        .closest(".input-group")
        .find(".form-control")
        .val(
          parseInt(
            $(this).closest(".input-group").find(".form-control").val()
          ) + 1
        );
    });
  };
  var siteSliderRange = function () {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  };
  // var siteCarousel = function () {
  //   if ($(".nonloop-block-13").length > 0) {
  //     $(".nonloop-block-13").owlCarousel({
  //       center: false,
  //       items: 1,
  //       loop: true,
  //       stagePadding: 0,
  //       margin: 0,
  //       autoplay: true,
  //       nav: true,
  //       smartSpeed: 1000,
  //       navText: [
  //         '<span class="icon-arrow_back">',
  //         '<span class="icon-arrow_forward">',
  //       ],
  //       responsive: {
  //         600: { margin: 0, nav: true, items: 2 },
  //         1000: { margin: 0, stagePadding: 0, nav: true, items: 3 },
  //         1200: { margin: 0, stagePadding: 0, nav: true, items: 4 },
  //       },
  //     });
  //   }
  //   $(".slide-one-item").owlCarousel({
  //     center: false,
  //     items: 1,
  //     loop: true,
  //     stagePadding: 0,
  //     margin: 0,
  //     smartSpeed: 1000,
  //     autoHeight: true,
  //     autoplay: true,
  //     pauseOnHover: false,
  //     nav: true,
  //     navText: [
  //       '<span class="icon-keyboard_arrow_left">',
  //       '<span class="icon-keyboard_arrow_right">',
  //     ],
  //   });
  // };
  // siteCarousel();
  // var siteStellar = function () {
  //   $(window).stellar({
  //     responsive: false,
  //     parallaxBackgrounds: true,
  //     parallaxElements: true,
  //     horizontalScrolling: false,
  //     hideDistantElements: false,
  //     scrollProperty: "scroll",
  //   });
  // };
  var siteCountDown = function () {
    $("#date-countdown").countdown("2020/10/10", function (event) {
      var $this = $(this).html(
        event.strftime(
          "" +
            '<span class="countdown-block"><span class="label">%w</span> weeks </span>' +
            '<span class="countdown-block"><span class="label">%d</span> days </span>' +
            '<span class="countdown-block"><span class="label">%H</span> hr </span>' +
            '<span class="countdown-block"><span class="label">%M</span> min </span>' +
            '<span class="countdown-block"><span class="label">%S</span> sec</span>'
        )
      );
    });
  };
  siteCountDown();
  var siteDatePicker = function () {
    if ($(".datepicker").length > 0) {
      $(".datepicker").datepicker();
    }
  };
  siteDatePicker();
  var siteSticky = function () {
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  };
  siteSticky();
  var OnePageNavigation = function () {
    var navToggler = $(".site-menu-toggle");
    $("body").on(
      "click",
      ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a",
      function (e) {  
        e.preventDefault();
        var hash = this.hash;
    

        $("html, body").animate(

          
          { scrollTop:$(hash).offset() && $(hash).offset().top ? $(hash).offset().top - 5 : null },
          200,
          "easeInOutCirc",
          function () {
            window.location.hash = hash;
          }
        );  
      }
    );
  };
  OnePageNavigation();
  var siteScroll = function () {
    $(window).scroll(function () {
      var st = $(this).scrollTop();
      if (st > 100) {
        $(".js-sticky-header").addClass("shrink");
      } else {
        $(".js-sticky-header").removeClass("shrink");
      }
    });
  };
  if ($(window).innerWidth() < 992) {
    siteScroll();
      $(".nav-link").click(function (e) {
      var $this = $(this);
        e.preventDefault();
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
          $this.removeClass("active");
        } else {
          $("body").addClass("offcanvas-menu");
          $this.addClass("active");
        }
      });
  }
});






var bolEmail = true;
var bolphone = true;
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  bolEmail=true
  const $result = $("#result-email");
  const email = $("#email").val();
  $result.text("");

  if (!validateEmail(email)) {
    $result.text(email + " Incorrect");
    $result.css("color", "red");
    bolEmail = false;
  }
  return false;
}

$("#validate").on("click", validate);





function validatePhone(email) {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(email);
}


var country = document.querySelector('.iti__selected-dial-code');
function validateP() {
  bolphone=true
  const $resultPhone = $("#result-phone");
  const phone =  country.textContent +   $("#phone").val();
  $resultPhone.text("");

  if (!validatePhone(phone)) {
    $resultPhone.text(phone + " Incorrect");
    $resultPhone.css("color", "red");
    bolphone=false
  }
  return false;
}

$("#validate").on("click", validate);
$("#validate").on("click", validateP);

// function subscribe() {
//   setTimeout(() => {
//     if (bolEmail && bolphone) {
//       const data = {
//         fullName: $("#fullname").val(),
//         email: $("#email").val(),
//         phone:  country.textContent +  $("#phone").val(),
//       };
//       //console.log("DATA", data);
      
//       let apiUrl; 
//       if(location.hostname=='.com'){
//         apiUrl = location.protocol + "//api...com/subscribers/create";
//       } else{
//         apiUrl = location.protocol + '//'+ location.hostname+':3030/api/subscribers/create';
//       }
      
//       $.ajax({
//         type: "POST",
//         url: apiUrl,
//         data: JSON.stringify(data),
//         contentType: "application/json",
//         dataType: "json",
//         success: function (response) {
//           if (!response.status) {
//             $("#subscribed").modal("show");
//             $("#fullname").val("");
//             $("#email").val("");
//             $("#phone").val("");
//           } else {
//             alert(response.content);
//           }
//           //console.log("content", response);
//         },
//         error: function (response) {
//           //console.log("Error", response);
//         },
//       });
//     }
//   },1000)
  
//   }
  

  // select all accordion items
const accItems = document.querySelectorAll(".accordion__item");

// add a click event for all items
accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));

function toggleAcc() {
  // remove active class from all items exept the current item (this)
  accItems.forEach((item) => item != this ? item.classList.remove("accordion__item--active") : null
  );

  // toggle active class on current item
  if (this.classList != "accordion__item--active") {
    this.classList.toggle("accordion__item--active");
  }
}

$('.carousel').carousel({
  interval: 1000 * 3
});


// $(document).ready(function(){
//     $(this).scrollTop(0);
// });


//window.scrollTo(0,0);

// var starts = document.getElementById('roundedSerStart');
var counts = document.querySelector('.count');
var counts1 = document.querySelector('.counts');
var counts2 = document.querySelector('.countes');



console.log('count',counts);
var interval = null
var someFunction =null
var count = 0;
var c= 0;
var porso = '%';



  function myCount(count,c) {

    if (count > 500) {

      clearInterval(interval);
      window.removeEventListener('scroll', someFunction);
      return 0
    }


    if(count < 101){
      counts2.textContent = count+porso;
    }
    if(count < 501){
      counts1.textContent = count;
    } 

   

  
    scroll() 
   }

   function scroll() {
    console.log('=====================================================================================>');
    interval =  setTimeout(function () {
      count ++;
      c = c+4;
      myCount(count,c)
     }, 10);
   }
var test=false
   someFunction = window.addEventListener('scroll', function(e) {
       var  last_known_scroll_position = window.scrollY;
       console.log(last_known_scroll_position);
       if(last_known_scroll_position > 850){
         scroll() 
       }
    
    });

  // When the user scrolls the page, execute myFunction 
  window.onscroll = function() {myFunction()};
  
  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }


document.querySelector  (".contact-form").addEventListener("submit", submitForm)

    function submitForm(event){ 

      event.preventDefault();

      let fullName = document.querySelector(".fullName").value;
      let numero = document.querySelector(".numero").value;
      let email = document.querySelector(".email").value;
      let message = document.querySelector(".message").value;

      document.querySelector(".contact-form").reset();

      sendEmail(fullName,numero, email, message);
      
    }

    function sendEmail(fullName,numero,email,message){
      Email.send({
        Host : "smtp.gmail.com",
        Username : "alikar.contact@gmail.com",
        Password : "tqmrfveykpinzxof",
        To : 'CONTACT@ALIKAR.MA',
        From : "alikar.contact@gmail.com",  
        Subject : `Alikar Contactez Nous`,
        Body : `Name: 🤵 ${fullName} <br/> Numero: 📞 ${numero} <br/> Email: 📧 ${email}  <br/> Message: 📩 ${message}`,
    }).then(
      $(".notificationSite").fadeIn("slow",function () {
        $(".notificationSite").fadeOut(5000);
      })
    );
    }




    let startNum = 0,
  endNum = 60000,
  nSecond = 3,
  resolutionMS = 44,
  deltaNum = (endNum - startNum) / (600 / resolutionMS) / nSecond;

function countIni() {
  var handle = setInterval(() => {

    var x = startNum.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    document.querySelector('#number').innerHTML = x.toString().toLocaleString();
    
    // if already updated the endNum, stop
    if (startNum >= endNum) clearInterval(handle);
    
    startNum += deltaNum;
    startNum = Math.min(startNum, endNum);
  }, resolutionMS);
}

someFunction = window.addEventListener('scroll', function(e) {
  var  last_known_scroll_position = window.scrollY;
  console.log(last_known_scroll_position);
  if(last_known_scroll_position > 850){
    countIni();
  }

});



// var login= document.querySelector('.login')
// function redrict(){
//   window.location.href="https://www.reservation.alikar.ma/"
  
// }
// login.addEventListener('click',redrict)