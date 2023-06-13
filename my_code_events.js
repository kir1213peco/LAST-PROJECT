$(document).ready(function(){
//anonymous function
   $("h1").click(function(){
      $(this).css("color","Yellow");    
   
   
   });


   $("h1").mouseenter(function(){
      $(this).css("color","black");
      
      
   });


   $("h1").mouseleave(function(){
      $(this).css("color","green");    
   
   });

   $("h1").mousedown(function(){
      $(this).css("background-color","yellow");    
   
   });

   $("h1").mouseup(function(){
      $(this).css("background-color","transparent");    
   
   });


   $("h2").mouseleave(function(){   
    $(this).css("color","green");    
   
   });


   $("h2").mouseenter(function(){
    $(this).css("color","black");
      
      
   });

  $("h2").click(function(){
    $(this).css("color","yellow");    
   });

  $("h2").mousedown(function(){
    $(this).css("background-color","blue");    
   
    });

  $("h2").mouseup(function(){
   $(this).css("background-color","transparent");    
   
   });

  $("h3").mouseclick(function(){
    $("h2").unbind("mouseup");
    $("h2").unbind("mousedown");     
   
   });



});
