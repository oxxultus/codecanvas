const images = ["../src/images/chicken.gif", "../src/images/study-game.gif", "../src/images/programmer.gif"];  // 이미지 파일 이름 배열
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;  // 인덱스를 순환
    document.getElementById("display-img").src = images[currentIndex];
}