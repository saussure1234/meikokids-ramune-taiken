
/*========================================*
pagetop
*=========================================*/
lastScrollTop = 0;
$(window).scroll(function() {
   var st = $(this).scrollTop();
   if (lastScrollTop != 0) {
      if (st < lastScrollTop) {
         $(".pagetop").addClass("visible");
         if (st < 10) {
            $(".pagetop").removeClass("visible");
         }
      } else if (st > lastScrollTop) {
         $(".pagetop").removeClass("visible");
      }
   }
   lastScrollTop = st;

   if ( $(".nav-target").offset().top < $(window).scrollTop()) {
      $(".takeout-fixed").addClass("fixed");
   } else {
      $(".takeout-fixed").removeClass("fixed");
   }

   if( $(".pagetop-change").length>0 ) {
      var pagetop_ = $(".pagetop-change").offset().top - ($(window).height())+10;
      if (st > pagetop_) {
         $(".pagetop").addClass("change");
      } else {
         $(".pagetop").removeClass("change");
      }
   }
});

$(function() {
   $(window).scroll(function() {
      var content = $(window).height(),
         ScrollPos = $(window).scrollTop();
      if (ScrollPos > content) {
         $('#fixed-sp').addClass('visible');
      } else {
         $('#fixed-sp').removeClass('visible');
      }
   });
});

function preventDefault(e) {
   e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
   if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
   }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
   window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function() {
         supportsPassive = true;
      }
   }));
} catch (e) {}

var wheelOpt = supportsPassive ? {
   passive: false
} : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
   window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
   window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
   window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
   window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
   window.removeEventListener('DOMMouseScroll', preventDefault, false);
   window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
   window.removeEventListener('touchmove', preventDefault, wheelOpt);
   window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
// 
$(document).ready(function() {
   if ($('.scroll-active').length)
      $(document).on('scroll', onScroll2)
});

function onScroll2() {
   var scroll = $(window).scrollTop()
   var header = 0
   $('.scroll-active a[href^="#"]').each(function() {
      var el = $(this).attr('href')
      var offset = $(el).length ? $(el).offset().top : 0
      if ($(this).find('img').length) {
         var _src_ = $(this).find('img').attr("src");
         _src_ = _src_.replace(/^(.*?)_on\.(.*)$/, "$1.$2");
         $(this).find('img').attr("src", _src_)
      }
      if ((scroll + header + 1) >= offset && ($(el).outerHeight() + offset) > (scroll + header)) {
         $('.scroll-active a').removeClass('active')
         $(this).addClass('active')
      }
   })
}

$(document).ready(function() {
   $(window).scroll(function() {
      var TargetPos = $(window).height();
      var ScrollPos = $(window).scrollTop();
      if (ScrollPos > TargetPos) {
         $("body").addClass('has_nav');
      } else {
         $("body").removeClass('has_nav');
      }

      if (ScrollPos > 0) {
         $("body").addClass('has_scroll');
      } else {
         $("body").removeClass('has_scroll');
      }
   });
   $('.i-search').click(function() {
      $("body").toggleClass('s-show');
   });
   $('#search-show .item .close').click(function() {
      $("body").removeClass('s-show');
   });
});

$(document).ready(function() {
   $('#key-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 2000,
      fade: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      centerMode: true,
      variableWidth: true
   });
   $('.s6-slide,.s3-slide,.s5-slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 2000,
      fade: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      centerMode: true,
      variableWidth: true
   });
   $('.course-slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 2000,
      fade: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      centerMode: true,
      variableWidth: true
   });
   $('.column-slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 2000,
      fade: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      centerMode: true,
      variableWidth: true,
      responsive: [{
              breakpoint: 768,
              settings: {
                  arrows: false,
              }
          }, ]
   });
   $(window).on('load resize orientationchange', function() {
      $('#key-slider,.s5-slide,.s6-slide, .column-slide,.course-slide,.s3-slide').slick('resize');
   });
});
$('#key-slider,.s5-slide,.s6-slide, .column-slide,.course-slide,.s3-slide').on('touchstart', function() {
   $(this).slick('slickPlay');
});

function triggerScroll(targetObj) {
   var targetName = targetObj.attr("id"); //for console.log
   var targetFlag = false;
   var scrollTop = $(window).scrollTop();
   var scrollBottom = scrollTop + $(window).height();
   var targetTop = targetObj.offset().top;
   var targetBottom = targetTop + targetObj.height();
   // while loading
   if (scrollBottom > targetTop && scrollTop < targetBottom) {
      if (!targetFlag) {
         targetObj.slick('slickPlay');
         targetFlag = true;
      }
   } else {
      targetObj.slick('slickPause');
      targetFlag = false;
   }

   $(window).on('scroll', function() {
      scrollTop = $(window).scrollTop();
      scrollBottom = scrollTop + $(window).height();
      targetTop = targetObj.offset().top;
      targetBottom = targetTop + targetObj.height();
      if (scrollBottom > targetTop && scrollTop < targetBottom) {
         // Start autoplay when entering the viewport
         if (!targetFlag) {
            targetObj.slick('slickPlay');
            targetFlag = true;
         }
      } else {
         // Stop autoplay when you get out of the viewport
         if (targetFlag) {
            targetObj.slick('slickPause');
            targetFlag = false;
         }
      }
   });
}

/* -- -- */
$("#fixed-sp ul li").each(function(){
   var _this = $(this);
});


document.getElementById('areaForm2').addEventListener('submit', function(event) {
    event.preventDefault(); // デフォルトのフォーム送信を防ぐ

    const selectElement = document.getElementById('area-select2');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const values = selectedOption.getAttribute('data-values');

    if (values) {
        const valueArray = values.split(',');
        const urlParams = new URLSearchParams();

        valueArray.forEach(function(value) {
            urlParams.append('area[]', value);
        });

        // ./school/ の後にクエリパラメータを追加して送信
        window.location.href = '/meikokids/school/?' + urlParams.toString();
    } else {
        // 値が空の場合はそのまま送信
        window.location.href = '/meikokids/school/';
    }
});


