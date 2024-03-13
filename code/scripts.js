let songIndex = 0; 
let audioElement = new Audio("../songs/1.mp3")

let masterPlay = document.getElementById("masterPlay"); 
let myProgressBar = document.getElementById("myProgressBar"); 
let gif = document.getElementById("gif");
let previous = document.getElementById("previousPlay"); 
let next = document.getElementById("nextPlay"); 
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "My Fav 1", filePath: "../songs/1.mp3", coverPath: "../covers/1.jpg"},
    {songName: "My Fav 2", filePath: "../songs/2.mp3", coverPath: "../covers/2.jpg"},
    {songName: "My Fav 3", filePath: "../songs/3.mp3", coverPath: "../covers/3.jpg"},
    {songName: "My Fav 4", filePath: "../songs/4.mp3", coverPath: "../covers/4.jpg"},
    {songName: "My Fav 5", filePath: "../songs/5.mp3", coverPath: "../covers/5.jpg"},
    {songName: "My Fav 6", filePath: "../songs/6.mp3", coverPath: "../covers/6.jpg"},
    {songName: "My Fav 7", filePath: "../songs/7.mp3", coverPath: "../covers/7.jpg"},
    {songName: "My Fav 8", filePath: "../songs/8.mp3", coverPath: "../covers/8.jpg"},
    {songName: "My Fav 9", filePath: "../songs/9.mp3", coverPath: "../covers/9.jpg"},
    {songName: "My Fav 10", filePath: "../songs/10.mp3", coverPath: "../covers/10.jpg"},

]

let totalTime = document.querySelectorAll(".timestamp"); 
console.log(totalTime)

songs.forEach((elements, i) => {
    audioElement.src = elements.filePath; 
    console.log(audioElement.duration);
    totalTime[i].innerText = audioElement.duration;
})

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    // element.getElementsByClassName("timestamp")[0].innerText = songs[i].
})

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


previous.addEventListener("click", () => {
    audioElement.pause();
    if (songIndex === 0){
        songIndex = songs.length - 1;
    }
    else {
        songIndex -= 1; 
    }
    let songLocation = songs[songIndex].filePath;
    audioElement.src = songLocation;  
    audioElement.play();
})

next.addEventListener("click", () => {
    audioElement.pause();
    if(songIndex == songs.length - 1){
        songIndex = 0; 
    }
    else{
        songIndex += 1; 
    }    
    
    let songLocation = songs[songIndex].filePath;
    audioElement.src = songLocation; 
    audioElement.play();

})

audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100); 
    myProgressBar.value = progress; 
})

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = (myProgressBar.value  * audioElement.duration) / 100;  
})