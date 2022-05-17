console.log("Hello");

$(document).ready(function (){
   $(window).scroll(function (){
       if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
       }else {
           $('.navbar').removeClass("sticky");
       }
   });
   /*toggle menu/navbar script*/

    $('.menu-btn').click(function (){
        $('.navbar .menu').toggle("active");
        //$('.menu-btn i').toggle("active");
    })
});