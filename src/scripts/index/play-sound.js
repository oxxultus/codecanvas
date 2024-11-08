let isSoundOn = true;  // 소리 상태 (true: 켜짐, false: 꺼짐)

function toggleSound() {
    const sounds = document.querySelectorAll("audio");
    const soundOnIcon = document.getElementById("sound-on-icon");
    const soundOffIcon = document.getElementById("sound-off-icon");
    const clickSound = document.getElementById("click-button-sound"); // 클릭 버튼 소리

    if (isSoundOn) {
        // 소리 끄기: 모든 소리 멈추기
        sounds.forEach(sound => {
            sound.pause();  // 소리 멈추기
            sound.currentTime = 0;  // 소리 초기화
        });

        // 상태를 꺼지도록 설정
        isSoundOn = false;
        soundOnIcon.style.display = "none";  // 소리 켜기 아이콘 숨기기
        soundOffIcon.style.display = "block";  // 소리 끄기 아이콘 보이기
    } else {
        // 소리 켜기: 클릭 버튼 소리만 재생
        isSoundOn = true;

        // 클릭 버튼 소리만 재생 (다른 소리는 재생하지 않음)
        if (clickSound.paused || clickSound.ended) {
            clickSound.currentTime = 0;  // 소리 시작 위치 초기화
            clickSound.play();  // 새 소리 재생
        }

        // 아이콘 상태 변경
        soundOnIcon.style.display = "block";  // 소리 켜기 아이콘 보이기
        soundOffIcon.style.display = "none";  // 소리 끄기 아이콘 숨기기
    }
}

// 버튼 1의 소리 재생
function playSoundButton() {
    const sound = document.getElementById("click-button-sound");

    if (isSoundOn) {  // 소리가 켜져 있을 때만 재생
        sound.currentTime = 0;  // 소리 시작 위치 초기화
        sound.play();  // 새 소리 재생
    }
}


// 버튼 2의 소리 재생 후 페이지 이동
function playHomeButtonSound() {
    const sound = document.getElementById("click-home-button-sound");
    const defaultDelay = 0.2; // 소리 무음 시 기본 지연 시간 (초)
    const imageElement = document.getElementById("display-img");
    const loaderElement = document.querySelector(".loader");  // loader 클래스 요소
    const loaderTextElement = document.getElementById("loader-text");  // loader-text id 요소

    if (isSoundOn) {  // 소리가 켜져 있을 때만 재생
        if (!sound.paused && !sound.ended) {
            sound.pause(); // 현재 소리 멈추기
            sound.currentTime = 0; // 소리 시작 위치 초기화
        }
        sound.play(); // 새 소리 재생

        // 소리 재생 시간 또는 기본 지연 시간 후 이미지 변경 및 페이지 이동
        setTimeout(function() {
            // 이미지 변경
            if (imageElement) {
                imageElement.src = "../src/images/index/dark-navy.png";
            }

            // loader 요소 보이게 하기
            if (loaderElement) {
                loaderElement.style.display = "flex";  // loader 보이기
            }

            if (loaderTextElement) {
                loaderTextElement.style.display = "flex";  // loader 보이기
            }

            // 3초 뒤 페이지 이동
            setTimeout(function() {
                window.location.href = 'portfolio.html'; // 소리 재생 후 페이지 이동
            }, 2000); // 3초 후 페이지 이동
        }, (sound.duration || defaultDelay) * 1000);
    } else {
        // 소리가 꺼져있을 때 기본 지연 시간 후 이미지 변경 및 페이지 이동
        setTimeout(function() {
            if (imageElement) {
                imageElement.src = "../src/images/index/dark-navy.png";
            }

            // loader 요소 보이게 하기
            if (loaderElement) {
                loaderElement.style.display = "flex";  // loader 보이기
            }

            if (loaderTextElement) {
                loaderTextElement.style.display = "flex";  // loader 보이기
            }

            setTimeout(function() {
                window.location.href = 'portfolio.html'; // 소리 재생 후 페이지 이동
            }, 2000); // 3초 뒤 페이지 이동
        }, defaultDelay * 1000);
    }
}