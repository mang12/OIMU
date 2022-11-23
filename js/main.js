$(document).ready(function(){
   /*  //slide menu
    $(".menu > li").click(function(){
        $(this).children("ul").slideToggle();
    }); */

    $(".menu > li").hover(function(){//mouseout
        $(this).children("ul").stop().slideToggle();
    },function(){//mouseout
        $(this).children("ul").stop().slideToggle();
    })

    $(".menu > li").hover(function(){//mouseout
        $(this).css("border","2px solid #eaeaea");
    },function(){//mouseout
        $(this).css("border","");
    })


    //gnb
    //wrap1
    //초기설정
    $(".submenu2").hide();
    
    $(".submenu2 li a").hover(function(){//mouseover
        $(this).css({"color":"#fff"});
    },function(){//mouseout
        $(this).css({"color":""});
    });

    //이벤트
    $("#menu1 li").hover(function(){
        $(this).children("ul").stop().slideDown(500,"easeOutBounce");
    },function(){
        $(this).children("ul").stop().slideUp(500);
    });



    //menu_wrap
    $(".all_menu").click(function(){
        $(".menu_wrap").animate({"left":"0"},"slow");
    });

    $(".menu_close").click(function(){
        $(".menu_wrap").animate({"left":"-100%"},"slow");
    });

    //1-1
    $(document).ready(function(){
        var mySlider=$("#slide_banner").bxSlider({
            mode:"horizontal",   // 가로 수평으로 슬라이드
            speed:500,              // 이동 속도를 설정
            pager:false,            // 현재 위치 페이징 표시 여부 설정
            moveSlides:1,         // 슬라이드 이동시 갯수 설정
            slideWidth:90,        // 슬라이드 마다 너비 설정
            minSlides:4,           // 최소 노출 개수를 설정
            maxSlides:4,          // 최대 노출 개수를 설정
            slideMargin:10,      // 슬라이드간의 간격을 설정
            auto:true,             // 자동으로 흐를지 설정
            autoHover:true,    // 마우스 오버시 정시킬지 설정
            controls:false        // 이전 다음 버튼 노출 여부 설정
        });
        //이전 버튼을 클릭하면 이전 슬라이드로 전환
       $("#prevBtn").on("click",function(){
            mySlider.goToPrevSlide();  //이전 슬라이드 배너로 이동
            return false; //<a>에 링크를 차단
       });
        //다음 버튼을 클릭하면 다음 슬라이드로 전환
       $("#nextBtn").on("click",function(){
            mySlider.goToNextSlide();  //다음 슬라이드 배너로 이동
            return false;
       });
    });
    

    //tab(화면구성)
    $("#container article:not("+$("#gnb ul li a.selected").attr("href") +")").hide();
    //이벤트
    $("#gnb ul li a").click(function(){
        //메뉴 => 1.모든 메뉴에서 클래스 제거 +2.클릭된 메뉴만 클래스 추가
        $("#gnb ul li a").removeClass("selected");
        $(this).addClass("selected");
        //내용 => 1. 모든 내용 숨김 + 2.클릭된 메뉴와 연결된 내용만 보임
        $("#container article").hide();
        $($(this).attr("href")).show();
        return false;
    });

    //list_wrap4
    //내용 숨기기
    $("#project > div:not("+$("#num2 ul li a.select").attr("href") +")").hide();
    //이벤트
    $("#num2 ul li a").click(function(){
        //메뉴 => 1.모든 메뉴에서 클래스 제거 +2.클릭된 메뉴만 클래스 추가
        $("#num2 ul li a").removeClass("select");
        $(this).addClass("select");
        //내용 => 1. 모든 내용 숨김 + 2.클릭된 메뉴와 연결된 내용만 보임
        $("#project > div").hide();
        $($(this).attr("href")).show();
        //return false; =>빼야지 번호누를때 맨 위로 올라감.
    });
    

    //list_wrap5
    //내용 숨기기
    $("#work > div:not("+$("#num3 ul li a.pgselect").attr("href") +")").hide();
    //이벤트
    $("#num3 ul li a").click(function(){
        //메뉴 => 1.모든 메뉴에서 클래스 제거 +2.클릭된 메뉴만 클래스 추가
        $("#num3 ul li a").removeClass("pgselect");
        $(this).addClass("pgselect");
        //내용 => 1. 모든 내용 숨김 + 2.클릭된 메뉴와 연결된 내용만 보임
        $("#work > div").hide();
        $($(this).attr("href")).show();
         //return false; =>빼야지 번호누를때 맨 위로 올라감.
    });




});


function show_img1(){
    $(".img_all1").delay(5000).animate({"margin-top":"-230px"},"slow");//2
    $(".img_all1").delay(5000).animate({"margin-top":"-460px"},"slow");//3
    $(".img_all1").delay(5000).animate({"margin-top":"-690px"},"slow");//4
    $(".img_all1").delay(5000).animate({"margin-top":"-920px"},"slow");//5
    $(".img_all1").delay(5000).animate({"margin-top":"-1150px"},"slow");//6
    $(".img_all1").delay(5000).animate({"margin-top":"-920px"},"slow");//5
    $(".img_all1").delay(5000).animate({"margin-top":"-690px"},"slow");//4
    $(".img_all1").delay(5000).animate({"margin-top":"-460px"},"slow");//3
    $(".img_all1").delay(5000).animate({"margin-top":"-230px"},"slow");//2
    $(".img_all1").delay(5000).animate({"margin-top":"0px"},"slow");//1
}
setInterval("show_img1()",5000);