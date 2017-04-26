$(document).ready(function() {
	
	/* overlay */ 
	$(".picture").click(function() {
		$(this).addClass("pic-click");
		$("#overlay").show();
	
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".picture").removeClass("pic-click");
		})


	/* sidebar */ 
	$("#sidebar-button").click(function() {
    if ($("#sidebar-button").hasClass("button-active") ){
    $("body").removeClass("no-scroll");
    $("#sidebar-button").removeClass("button-active");
    $(".sidebar-container").removeClass("sidebar-active");
    $("#main-container").removeClass("main-container-active");
  }
    else { console.log('here');
    $("#sidebar-button").addClass("button-active");
    $(".sidebar-container").addClass("sidebar-active");
    $("#main-container").addClass("main-container-active");
    setTimeout(function() {
    $('body').addClass('no-scroll');
    }, 300);
}
}); 



  $("#main-container").click(function() {
    if ($("#sidebar-button").hasClass("button-active")) {
    
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $("#main-container").removeClass("main-container-active");
  }
  
}); 
}); 
