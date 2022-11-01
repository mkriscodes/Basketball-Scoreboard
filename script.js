const homeScore = document.getElementById('home-score')
const guestScore = document.getElementById('guest-score')
let homeScoreCount = 0
let guestScoreCount = 0

function homeAddOne () {
    homeScoreCount = homeScoreCount + 1
    homeScore.innerText = homeScoreCount
}


function homeAddTwo () {
    homeScoreCount = homeScoreCount + 2
    homeScore.innerText = homeScoreCount
}

function homeAddThree () {
    homeScoreCount = homeScoreCount + 3
    homeScore.innerText = homeScoreCount
}

function guestAddOne () {
    guestScoreCount = guestScoreCount + 1
    guestScore.innerText = guestScoreCount
}


function guestAddTwo () {
    guestScoreCount = guestScoreCount + 2
    guestScore.innerText = guestScoreCount
}

function guestAddThree () {
    guestScoreCount = guestScoreCount + 3
    guestScore.innerText = guestScoreCount
}
