//온수 영상
function warterVideo() {
	var warterVideo = $(".warm_water video").get(0);
	$(".warm_water .play").hide();
	$(".warm_water .pause").show();
	setInterval(function () {
		if ($(".warm_water video").prop("ended")) {
			//영상종료 후 진행할 함수 입력부분
			$(".warm_water .pause").hide();
			$(".warm_water .play").show();
		}
	}, 200);
	$(".warm_water .play").on("click", function () {
		warterVideo.play();
		$(".warm_water .play").hide();
		$(".warm_water .pause").show();
	});
	$(".warm_water .pause").on("click", function () {
		warterVideo.pause();
		$(".warm_water .pause").hide();
		$(".warm_water .play").show();
	});
}

//듀얼온도센싱
function dualVideo() {
	var dualVideo = $(".dual_wrap video").get(0);
	$(".dual_wrap .play").hide();
	$(".dual_wrap .pause").show();
	setInterval(function () {
		if ($(".dual_wrap video").prop("ended")) {
			//영상종료 후 진행할 함수 입력부분
			$(".dual_wrap .pause").hide();
			$(".dual_wrap .play").show();
		}
	}, 200);
	$(".dual_wrap .play").on("click", function () {
		dualVideo.play();
		$(".dual_wrap .play").hide();
		$(".dual_wrap .pause").show();
	});
	$(".dual_wrap .pause").on("click", function () {
		dualVideo.pause();
		$(".dual_wrap .pause").hide();
		$(".dual_wrap .play").show();
	});
}

//듀얼온도센싱
function safeVideo() {
	var dualVideo = $(".safe_design video").get(0);
	$(".safe_design .play").hide();
	$(".safe_design .pause").show();
	setInterval(function () {
		if ($(".safe_design video").prop("ended")) {
			//영상종료 후 진행할 함수 입력부분
			$(".safe_design .pause").hide();
			$(".safe_design .play").show();
		}
	}, 200);
	$(".safe_design .play").on("click", function () {
		dualVideo.play();
		$(".safe_design .play").hide();
		$(".safe_design .pause").show();
	});
	$(".safe_design .pause").on("click", function () {
		dualVideo.pause();
		$(".safe_design .pause").hide();
		$(".safe_design .play").show();
	});
}

function infraredVideo() {
	var dualVideo = $(".infrared video").get(0);
	$(".infrared .play").hide();
	$(".infrared .pause").show();
	setInterval(function () {
		if ($(".infrared video").prop("ended")) {
			//영상종료 후 진행할 함수 입력부분
			$(".infrared .pause").hide();
			$(".infrared .play").show();
		}
	}, 200);
	$(".infrared .play").on("click", function () {
		dualVideo.play();
		$(".infrared .play").hide();
		$(".infrared .pause").show();
	});
	$(".infrared .pause").on("click", function () {
		dualVideo.pause();
		$(".infrared .pause").hide();
		$(".infrared .play").show();
	});
}



/* Ready */
$(document).ready(function () { 
	warterVideo();
	dualVideo();
	safeVideo();
	infraredVideo();
});