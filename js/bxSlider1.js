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

