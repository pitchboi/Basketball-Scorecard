let elScoreHome = document.getElementById("elScoreHome");
let elScoreGuest = document.getElementById("elScoreGuest");
let scoreHome = 0;
let scoreGuest = 0;
let r = document.querySelector(':root');

function addToScore(teamScore, numVal) {
    if (teamScore == 'home') {
        scoreHome += numVal;
        elScoreHome.textContent = scoreHome;
    } else {
        scoreGuest += numVal;
        elScoreGuest.textContent = scoreGuest;
    }

    resetBorders();

    if (scoreHome >= scoreGuest) {
         r.style.setProperty('--home-border-color', '#f7d00a');
    }
    if (scoreGuest >= scoreHome) {
         r.style.setProperty('--guest-border-color', '#f7d00a');
    }
}

function resetScore() {
    resetBorders();
    scoreHome = 0;
    scoreGuest = 0;
    elScoreHome.textContent = 0;
    elScoreGuest.textContent = 0;
}

function resetBorders() {
    r.style.setProperty('--home-border-color', 'black');
    r.style.setProperty('--guest-border-color', 'black');
}