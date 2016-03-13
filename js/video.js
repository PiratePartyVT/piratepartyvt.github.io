/***
* loadVideo()
*/
var loadVideo = function(id){
    if(isType(id,'number')&&id<video_list.length){
      $("#video-frame").attr({"src":"http://www.youtube.com/embed/"+video_list[id].src+"?autoplay=1"});
      $("#primary_overlay").show("slow");
    }else{
      alert("there was an issue loading the video!")
    }
};

/***
* loadVideo()
*/
var buildVideoList = function(){
  for(var a =0; a<video_list.length;a++){
    var vl = '<div class="video-option col-xs-12 col-sm-6 col-md-4">\
      <div class="video-option__inner" onclick="loadVideo('+a+')">\
        <h4>'+video_list[a].title+'</h4>\
        <center>\
        <a class="pointer"><img src="https://img.youtube.com/vi/'+video_list[a].src+'/0.jpg"\
        alt="'+video_list[a].title+'" width="100%" border="1" />\
        </a>\
        </center>\
      </div>\
    </div>';
    $("#video-list").append(vl);
  }
};
