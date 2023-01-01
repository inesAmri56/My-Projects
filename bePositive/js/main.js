

var MaMusic = document.getElementById("MaMusic");
var btnplay = document.getElementById("btnplay");
btnplay.onclick = function(){
   if(MaMusic.paused){
    MaMusic.play();
    btnplay.src = "/img/pause.png"
   }else{
    MaMusic.pause();
    btnplay.src ="/img/play.png"
   }

}