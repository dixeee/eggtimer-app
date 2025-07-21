// Sound Effects
const btnSound = new Audio("sounds/btn_bubblepop.mp3");

const hoverSound = new Audio("sounds/hover_bubble.mp3");
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseenter", () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
});

const timerSound = new Audio("sounds/timer_ticking.mp3");
const endTimerSound = new Audio("sounds/end_alarmdigital.mp3");
timerSound.loop = true;
endTimerSound.loop = true;

// Navigation Bar
const backBtn = document.getElementById('backBtn');
const ctnIds = ['homepageCtn', 'menupageCtn', 'startpageCtn']

backBtn.addEventListener('click', () => {
    ctnIds.forEach(id => {
        if (document.getElementById(id).style.display == 'block') {
            let currPage = id;

            if (currPage != 'homepageCtn') {
                btnSound.currentTime = 0;
                btnSound.play();

                let prevPageIndex = ctnIds.indexOf(id) - 1;
                let prevPage = ctnIds[prevPageIndex];

                setPage(currPage, prevPage);

                if (prevPage == 'homepageCtn') {
                    backBtn.style.display = 'none';
                };
            };
        };
    });
});

function setPage(currCtn, otherCtn) {
    document.getElementById(currCtn).style.display = 'none';
    document.getElementById(otherCtn).style.display = 'block';
};

// Home Page
const beginBtn = document.getElementById('beginBtn');

beginBtn.addEventListener('click', () => {
    btnSound.currentTime = 0;
    btnSound.play();

    document.getElementById('homepageCtn').style.display = 'none';
    document.getElementById('menupageCtn').style.display = 'block';
    backBtn.style.display = 'block';
});

// Menu Page
const menuBtnIds = ['sunnysideBtn', 'hardboiledBtn', 'softboiledBtn', 'scrambledBtn']
const endEggImg = document.getElementById('eggImgEnd');

let endEgg = '';

menuBtnIds.forEach(id => {
    const menuBtn = document.getElementById(id);
    menuBtn.addEventListener('click', () => {
        btnSound.currentTime = 0;
        btnSound.play();

        document.getElementById('menupageCtn').style.display = 'none';
        document.getElementById('startpageCtn').style.display = 'block';

        endEgg = id.substring(0, id.length - 3);

        setTimer(id);
    });
});

// Start Page
const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', () => {
    btnSound.currentTime = 0;
    btnSound.play();

    document.getElementById('startpageCtn').style.display = 'none';
    document.getElementById('timerpageCtn').style.display = 'block';
    backBtn.style.display = 'none';
    startTimer();
});

// Timer Page
const timer = document.getElementById('timer');
const timerTitle = document.getElementById('timerTitle');

let timeInSeconds = 0;
let intervalId;
let dotCount = 0;

function setTimer(eggId) {
    if (eggId == 'sunnysideBtn') {
        timeInSeconds = 150;
        timer.textContent = '2:30';
    };

    if (eggId == 'hardboiledBtn') {
        timeInSeconds = 600;
        timer.textContent = '10:00';
    };

    if (eggId == 'softboiledBtn') {
        timeInSeconds = 360;
        timer.textContent = '6:00';
    };

    if (eggId == 'scrambledBtn') {
        timeInSeconds = 225;
        timer.textContent = '3:45';
    };
};

const frames = ['images/eggtimer_egg2.png', 'images/eggtimer_egg3.png', 'images/eggtimer_egg4.png', 'images/eggtimer_egg5.png']
const chickImg = document.getElementById('chickAnimation');

let currentFrame = 0;

function startTimer() {
    if (!intervalId) {
        timerSound.play();

        intervalId = setInterval(() => {
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = timeInSeconds % 60;

            timer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

            timeInSeconds--;
            currentFrame = (currentFrame + 1) % frames.length;
            chickImg.src = frames[currentFrame];

            if (timeInSeconds < 0) {
                clearInterval(intervalId);
                intervalId = null;

                timerSound.pause();
                timerSound.currentTime = 0;
                endTimerSound.play();
                timer.textContent = '0:00';

                endEggImg.src = `images/eggtimer_${endEgg}.png`;
                
                document.getElementById('timerpageCtn').style.display = 'none';
                document.getElementById('endpageCtn').style.display = 'block';
            };
        }, 1000);
    };
};

// End Page
const endBtn = document.getElementById('endBtn');

endBtn.addEventListener('click', () => {
    endTimerSound.pause();
    endTimerSound.currentTime = 0;
    btnSound.currentTime = 0;
    btnSound.play();

    document.getElementById('endpageCtn').style.display = 'none';
    document.getElementById('homepageCtn').style.display = 'block';
});