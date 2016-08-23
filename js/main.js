$(document).scroll(function() {
var header = $(document).scrollTop(); 
	if (header > 500) {
		$('.header').addClass('hidden');
		$('.header-hidden').removeClass('hidden', function() {
			$('.header-hidden').slideDown('slow');
		});	
	}else{
		$('.header').removeClass('hidden');
		$('.header-hidden').addClass('hidden')
	}
});

$(document).scroll(function() {
	var logo = $(document).scrollTop();

	if(logo> 300){
		$('.first, .second, .third, .fourth, .fifth').css({
			animationPlayState : 'running'
		})
	}
});

$(document).scroll(function() {
	var startup = $(document).scrollTop();

	if(startup> 600){
		$('#startup .photo, #startup .text').css({
			animationPlayState : 'running'
		})
	}
});

$(document).scroll(function() {
	var technology = $(document).scrollTop();

	if(technology> 1100){
		$('#technology .photo, #technology .text').css({
			animationPlayState : 'running'
		})
	}
});

$(document).scroll(function() {
	var helmet = $(document).scrollTop();

	if(helmet> 1700){
		$('#helmet .photo, #helmet .text').css({
			animationPlayState : 'running'
		})
	}
});

$(document).scroll(function() {
	var features = $(document).scrollTop();

	if(features> 2900){
		$('#features .firstRow').css({
			animationPlayState : 'running'
		})
	}
});

$(document).scroll(function() {
	var featuresTwo = $(document).scrollTop();

	if(featuresTwo> 2500){
		$('#features .secondRow').css({
			animationPlayState : 'running'
		})
	}
});

$(document).scroll(function() {
	var updates = $(document).scrollTop();

	if(updates> 3465){
		$('#updates .content, #updates .subscribe').css({
			animationPlayState : 'running'
		})
	}
});

$(document).scroll(function() {
	var packages = $(document).scrollTop();

	if(packages> 3635){
		$('#packages .products').css({
			animationPlayState : 'running'
		})
	}
});

$(document).scroll(function() {
	var awards = $(document).scrollTop();

	if(awards> 4300){
		$('#awards .award').css({
			animationPlayState : 'running'
		})
	}
});

$(document).scroll(function() {
	var awardsTwo = $(document).scrollTop();

	if(awardsTwo> 4785){
		$('#awards .clients h1, #awards .clientText').css({
			animationPlayState : 'running'
		})
	}
});

$(document).scroll(function() {
	var awardsThree = $(document).scrollTop();

	if(awardsThree> 5035){
		$('#awards .people').css({
			animationPlayState : 'running'
		})
	}
});

$(document).scroll(function() {
	var team = $(document).scrollTop();

	if(team> 5555){
		$('#team .personOne, #team .personTwo, #team .personThree, #team .personFour').css({
			animationPlayState : 'running'
		})
	}
});


