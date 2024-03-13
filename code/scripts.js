let songIndex = 0; 
let audioElement = new Audio("../songs/1.mp3")

let masterPlay = document.getElementById("masterPlay"); 
let myProgressBar = document.getElementById("myProgressBar"); 
let gif = document.getElementById("gif")

let songs = [
    {songName: "In reprehenderit in voluptate", filePath: "../songs/1.mp3", coverPath: "../covers/1.jpg"},
    {songName: "In reprehenderit in voluptate", filePath: "../songs/1.mp3", coverPath: "../covers/1.jpg"},
    {songName: "In reprehenderit in voluptate", filePath: "../songs/1.mp3", coverPath: "../covers/1.jpg"},
    {songName: "In reprehenderit in voluptate", filePath: "../songs/1.mp3", coverPath: "../covers/1.jpg"},
    {songName: "In reprehenderit in voluptate", filePath: "../songs/1.mp3", coverPath: "../covers/1.jpg"},
    {songName: "In reprehenderit in voluptate", filePath: "../songs/1.mp3", coverPath: "../covers/1.jpg"},
    {songName: "In reprehenderit in voluptate", filePath: "../songs/1.mp3", coverPath: "../covers/1.jpg"}

]

masterPlay.addEventListener("click", () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play(); 
        masterPlay.classList.remove("fa-play-circle"); 
        masterPlay.classList.add("fa-pause-circle"); 
        gif.style.opacity = 1;
    }

    else {
        audioElement.pause(); 
        masterPlay.classList.remove("fa-pause-circle"); 
        masterPlay.classList.add("fa-play-circle"); 
        gif.style.opacity = 0;
    }
})

myProgressBar.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100); 
    myProgressBar.value = progress; 
})