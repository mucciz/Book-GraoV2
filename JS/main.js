//Hover effect on the cards within the container
$(document).ready(function() {
  $('.card-deck').hover(function() {
      $(this).animate({
        marginTop: "-=1%",
      }, 200);
    },
    function() {
      $(this).animate({
        marginTop: "0%",
      }, 200);
    }
  );
  // set the length for the random generated code

    function windLo (){
   var stringLength = 15;
    // list containing characters for the random string
    var stringArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!','?'];
   var rndString = "";
        // build a string with random characters
        for (var i = 1; i < stringLength; i++) {
            var rndNum = Math.ceil(Math.random() * stringArray.length) - 1;
            rndString = rndString + stringArray[rndNum];
   };
     document.getElementById('token-1').innerHTML =('<p><strong>' + rndString + ' ' +  '<strong></p>');
 }
 windLo();
   $("#lightgallery").lightGallery();
});
