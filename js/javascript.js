
function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(40.3486111,-74.6594444); 
  var mapOptions = {center: myCenter, zoom: 10};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMap(map);
}

$(document).ready(function(){
    
    setTimeout(function(){
    	$(".fly").removeClass('disapper');},500);
        $(".fly").fadeOut(10000);
    	$("#loadDiv").fadeOut(13000);
    	$("#content-home").fadeIn(13000);

    var wow = new WOW({  
    boxClass: 'wow',  
    animateClass: 'animated',  
    mobile: true,  
    live: true  
});  
wow.init();
// $("#contactForm").submit(function(e){
//     var name = $("#name");
//     var email = $("#email");
//     var phone = $("#phone");
//     var message = $("#message");

//     if(name.value == " " || email.value== " " ||phone.value == " " || message.value == " "){
//         alert("Please check your input");
//     }else{
//         $.ajax({
//             url: "https://formspree.io/queeniezhang0810@gmail.com", 
//             method: "POST",
//             data: $(this).serialize(),
//             dataType: "json"
// });
//         e.preventDefault();
//     	$(this).get(0).reset();
//     	alert("Message sent");
//     }
// });
$("#sendBtn").click(function(){
	var name = $("#name").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var message = $("#message").val();

	var varData = 'name=' + name + '&email=' + email;
	// console.log(data);

	$.ajax({
        type:"POST",
        url:'php.php',
        data: varData,
        success:function(){
        	alert("It is success");
        }
	});
});

});






