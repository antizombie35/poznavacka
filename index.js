var guessState = 0
var rAns = ""

function nextPic() {
    if (guessState == 1) { //show ans
        document.getElementById("ans").innerText = rAns;
        guessState = 0;
    } else { //pick q
        randNum = Math.floor(Math.random() * data.length);
        rAns = data[randNum].rAns
        document.getElementById("pic").src = data[randNum].src[Math.floor(Math.random() * data[randNum].src.length)]; //magic
        document.getElementById("ans").innerText = "";
        guessState = 1;
    }
}