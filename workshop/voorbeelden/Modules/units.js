// smallStright();
function smallStright() {
    let correct = false;
    let smallStraight1 = [1, 2, 3, 4]
    let smallStraight2 = [2, 3, 4, 5]
    let smallStraight3 = [3, 4, 5, 6]

    for (let i = 0; i < smallStraight1.length; i++) {
        found = dice.includes(smallStraight1[i]);
        if (found === true && i == smallStraight1.length - 1) {
            correct = true
            break;
        }
        continue;
    }

    for (let i = 0; i < smallStraight2.length; i++) {
        found = dice.includes(smallStraight2[i]);
        if (found === true && i == smallStraight2.length - 1) {
            correct = true
            break;
        }
        continue;
    }

    for (let i = 0; i < smallStraight3.length; i++) {
        found = dice.includes(smallStraight3[i]);
        if (found === true && i == smallStraight3.length - 1) {
            correct = true
            break;
        }
        continue;
        totalScore += 0;
        // showTotaal();
    }
    if (correct) {
        document.getElementById("smallStraight").innerHTML = "30";
        totalScore += 30;
    }
    resetAfterRoll();
    showTotalScore();
}

// largeStright//
function largeStright() {
    let goed = false;
    let largeStraight1 = [1, 2, 3, 4, 5]
    let largeStraight2 = [2, 3, 4, 5, 6]

    for (let i = 0; i < largeStraight1.length; i++) {
        found = dice.includes(largeStraight1[i]);
        if (found === true && i == largeStraight1.length - 1) {
            break;
        }
        continue;
    }

    for (let i = 0; i < largeStraight2.length; i++) {
        found = dice.includes(largeStraight2[i]);
        if (found === true && i == largeStraight2.length - 1) {
            break;
        }
        continue;
        totalScore += 0;
    }
    if (goed) {
        document.getElementById("largeStraight").innerHTML = "40";
        totalScore += 40;
    }
    resetAfterRoll();
    showTotalScore();
    // showTotaal();
}

function randomNumbers(){  // zet random dobbelsteen
    for(let i = 0;i <= 4;i++){
        randomNum[i] = Math.floor(Math.random() * 6 + 1)
        if(chosen[i] == false){
            chosenValue[i] = randomNum[i]
        }
        dobbel = i + 1 + "";
        if(chosen[i] == false){
            document.getElementById("dobbelsteen-" + dobbel).style.backgroundImage = "url('dice" + (randomNum[i] - 1)+ ".png')"
        }
    }
}

// Functies
function rolldiceHandler() {
    // Update images on every roll
    if (count > 0) {
        for (let i = 0; i < 5; i++) {
            if (rollables[i] === true) {
                dice[i] = Math.floor((Math.random() * 6 + 1));
                diceDivs[i].innerHTML = '<img src="die' + dice[i] + '.png" alt="">';
            }
        }
        // Update stats on every roll
        count--;
        trying.innerHTML = count + " TIMES LEFT...";
    }
}
