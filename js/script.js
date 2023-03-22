$(function(){
    $("ul.gnb>li:not(:eq(0))").hover(function(){
        $("ul.lnb").stop().slideToggle();
    })

    setInterval(mySlide, 3000);
    setInterval(bannerSlide, 2000);

    $(".popup").click(function(){
        $(".pop").show();
    })

    $(".closebtn").click(function(){
        $(".pop").hide();
    })

    $(".family").change(function(){
        const site = $(this).val();
        location.href=site;
    })



    $(".dot1").click(function(){
        $(".bannerslide").animate({
            "left": "0"
        })
    })
    $(".dot2").click(function(){
        $(".bannerslide").animate({
            "left": "400px"
        })
    })
    $(".dot3").click(function(){
        $(".bannerimg:eq(0)").show();
    })
});

function mySlide(){
    $('.slidein').animate({
        'marginLeft': '-1200px'
    }, 1000, function(){
        $('.slideimg:eq(0)')
        .clone()
        .appendTo('.slidein');
        $('.slideimg:eq(0)').remove();
        $('.slidein').css('marginLeft', 0);
    });
};

function bannerSlide(){
    $('.bannerslide').show(1000, function(){
        $('.bannerimg:eq(0)')
        .clone()
        .appendTo('.bannerslide');
        $('.bannerimg:eq(0)').remove();
        $('.bannerslide').css('left', 0);
    });
};