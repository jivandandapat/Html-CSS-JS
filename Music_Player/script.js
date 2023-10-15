let progress = document.getElementById("progress");
let song = document.getElementById("song");
let song2 = document.getElementById("song2");
let song3 = document.getElementById("song3");
let song4 = document.getElementById("song4");
let ctrlIcon = document.getElementById("ctrlIcon");
let songImg = document.querySelector(".song-img");
let songTitle = document.querySelector("h1");
let songArtist = document.querySelector("p");

let currentSong = song;

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

song2.onloadedmetadata = function () {
    progress.max = song2.duration;
    progress.value = song2.currentTime;
}

song3.onloadedmetadata = function () {
    progress.max = song3.duration;
    progress.value = song3.currentTime;
}

song4.onloadedmetadata = function () {
    progress.max = song4.duration;
    progress.value = song4.currentTime;
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        currentSong.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        currentSong.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

function switchSong() {
    currentSong.pause(); 

    if (currentSong === song) {
        currentSong = song2;
        currentSong.play();      
        songImg.src = "./Shreya Ghosal.jpg";
        songTitle.textContent = "DHAK BAJA KASHOR BAJA";
        songArtist.textContent = "Shreya Ghoshal";
    } 
    else if (currentSong === song2) {
        currentSong = song3;
        currentSong.play(); 
        songImg.src = "./dhaker Taley.jpeg";
        songTitle.textContent = "Dhaker Taley";
        songArtist.textContent = "Abhijeet Bhattacharya, Pariniti, Sudipto & Chorus";
    } 
    else if(currentSong === song3) {
        currentSong = song4;
        currentSong.play();
        songImg.src = "./Elo Je Maa.jpg";
        songTitle.textContent = "Elo Je Maa";
        songArtist.textContent = "Shreya Ghoshal, Abhijeet Bhattacharya";
    } 
    else {
        currentSong = song;
        currentSong.play(); // Start playing song1
        // Change the image, title, and artist for the first song
        songImg.src = "./monali Thakur.jpeg";
        songTitle.textContent = "Dugga Elo";
        songArtist.textContent = "Monali Thakur";
    }

    progress.value = currentSong.currentTime;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

function rightButton() {
    switchSong();
}

function leftButton() {
    switchSong();
}

progress.onchange = function () {
    currentSong.play();
    currentSong.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}


song.addEventListener("ended", function () {
    currentSong.currentTime = 0; 
    playPause(); 
});

song2.addEventListener("ended", function () {
    currentSong.currentTime = 0; 
    playPause(); 
});

song3.addEventListener("ended", function () {
    currentSong.currentTime = 0; 
    playPause(); 
});

song4.addEventListener("ended", function () {
    currentSong.currentTime = 0; 
    playPause(); 
});
