let isSoundOn = true;  // 소리 상태 (true: 켜짐, false: 꺼짐)

function toggleSound() {
    const sounds = document.querySelectorAll("audio");

    // 아이콘 상태를 변경
    const soundOnIcon = document.getElementById("sound-on-icon");
    const soundOffIcon = document.getElementById("sound-off-icon");
    const clickSound = document.getElementById("click-button-sound"); // 클릭 버튼 소리

    if (isSoundOn) {
        // 다른 소리 끄기
        sounds.forEach(sound => {
            if (sound !== clickSound) {  // 클릭 소리는 제외
                sound.pause();  // 소리 멈추기
                sound.currentTime = 0;  // 소리 시작 위치 초기화
            }
        });
        isSoundOn = false;  // 상태를 끄기로 설정
        soundOnIcon.style.display = "none";  // 소리 켜기 아이콘 숨기기
        soundOffIcon.style.display = "block";  // 소리 끄기 아이콘 보이기
    } else {
        // 클릭 버튼 소리는 계속 재생하고, 다른 소리는 켜기
        sounds.forEach(sound => {
            if (sound !== clickSound) {  // 클릭 소리는 제외
                sound.play();  // 소리 재생
            }
        });
        isSoundOn = true;  // 상태를 켜기로 설정
        soundOnIcon.style.display = "block";  // 소리 켜기 아이콘 보이기
        soundOffIcon.style.display = "none";  // 소리 끄기 아이콘 숨기기
    }
}

// 클릭 버튼 소리 계속 실행
document.getElementById('click-button-sound').play();

// 버튼 1의 소리 재생
function playSoundButton() {
    const sound = document.getElementById("click-button-sound");
    if (isSoundOn) {  // 소리가 켜져 있을 때만 재생
        if (!sound.paused && !sound.ended) {
            sound.pause(); // 현재 소리 멈추기
            sound.currentTime = 0; // 소리 시작 위치 초기화
        }
        sound.play(); // 새 소리 재생
    }
}

// 버튼 2의 소리 재생 후 페이지 이동
function playHomeButtonSound() {
    const sound = document.getElementById("click-home-button-sound");
    if (isSoundOn) {  // 소리가 켜져 있을 때만 재생
        if (!sound.paused && !sound.ended) {
            sound.pause(); // 현재 소리 멈추기
            sound.currentTime = 0; // 소리 시작 위치 초기화
        }
        sound.play(); // 새 소리 재생

        // 소리가 끝날 때까지 기다린 후 페이지 이동
        setTimeout(function() {
            window.location.href = 'index.html'; // 소리 재생 후 페이지 이동
        }, sound.duration * 1000); // sound.duration은 소리의 길이 (초 단위)
    }
}