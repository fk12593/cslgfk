
$(function(){
  //事件委托
  initEleEvents();
  
});

function initEleEvents(){
   $(".flashControl").mouseover(function(){
   	 
     $(".flashControl").removeClass("flashControlover");
     $(this).addClass("flashControlover");
   });
}