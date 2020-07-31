$(document).ready(function() {
	$('#btn-next').click(function(event) {

		var slide_sau = $('.active').next();
		console.log(slide_sau.length);
		if(slide_sau.length!=0){
			$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
			});
			slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
		}else{
			$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
			});
			$('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
		}
	});
	$('#btn-prev').click(function(event) {

		var slide_truoc = $('.active').prev();
		if(slide_truoc.length!=0){
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			slide_truoc.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
		}else{
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			$('.slide:last-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
		}
	});
});

$('select#sort-recruiters').change(function() {
  var filter = $(this).val();
  filterList(filter);
});

// Recruiters filter function
function filterList(value) {
  var list = $(".recruiter .recruiter-info");
  $(list).hide();
  if (value == "All") {
    $(".recruiter").find("article").each(function (i) {
      $(this).show();
    });
  } else {
    // *=" means that if a data-custom type contains multiple values, it will find them
    $(".recruiter").find("article[data-custom-type*=" + value + "]").each(function (i) {
      $(this).show();
    });
  }
}