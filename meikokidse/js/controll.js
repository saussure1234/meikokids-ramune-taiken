////////////////////////////////////////////////////////////////////
// Fade In
////////////////////////////////////////////////////////////////////
$(document).ready(function(){
	$("body").css("opacity","1");
	setTimeout(function(){
		$("body").css("transition","0s");
	}, 1200);
});

////////////////////////////////////////////
// overflow scroll for position fixed header
////////////////////////////////////////////
$(window).on("scroll", function(){
    $("header").css("left", -$(window).scrollLeft());
});

////////////////////////////////////////////
// smooth scroll
////////////////////////////////////////////
$(function(){
    var headerHeight = $('header').outerHeight();
    var urlHash = location.hash;
    
    // ページ読み込み時のハッシュスクロール処理
    if(urlHash) {
        $('html, body').stop().scrollTop(0);
        setTimeout(function(){
            var target = $(urlHash);
            if (target.length) { // ターゲットが存在する場合のみスクロール
                var position = target.offset().top - headerHeight;
                $('html, body').stop().animate({scrollTop: position}, 1000, "swing");
            }
        }, 500);
    }

    // ページ内リンククリック時の処理
    $('a[href^="#"]').click(function() { 
        var href = $(this).attr("href");
        var target = $(href);
        if (target.length) { // ターゲットが存在する場合のみスクロール
            var position = target.offset().top - headerHeight;
            $('html, body').stop().animate({scrollTop: position}, 1000, "swing");
            return false;
        }
    });
});

