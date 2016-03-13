var isOnAir = false;

/***
* ranum()
*/
var ranum = function(){
  return Math.round(Math.random()*999999);
};

/***
* chkRadio()
*/
var chkRadio = function(){
  if(isOnAir===true){
    $("#pirate-radio").delay(1000).show("slow");
  }
};

/***
* isType()
*/
var isType = function(str,cond){
  if($.type( str ) === cond){
      return true;
  }else{
    return false;
  }
};

/***
* listeners()
*/
var listeners = function(){
    $("#primary_overlay__close").on('click',function(){
      $("#primary_overlay").hide("slow");
      $("#video-frame").attr({"src":""});
    });
};

/***
* init()
*/
var init = function(){
    chkRadio();
    listeners();
};

$(document).ready(function(){
  init();
});
