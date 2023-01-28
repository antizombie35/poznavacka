var guessState = 2;
var rAns = "";
var randListOrderPos = 0;

function nextPic() {
    if (gotBuildHash == true) {
        if (guessState == 2) { //generate index to shuffle
            data = shuffleArray(data);
            guessState = 0
        } else if (guessState == 0) { //get next q
            document.getElementById("pic").src = data[randListOrderPos].src[Math.floor(Math.random() * data[randListOrderPos].src.length)];
            document.getElementById("ans").innerText = "";
            guessState = 1;
        } else if (guessState == 1) { //show ans
            document.getElementById("ans").innerText = data[randListOrderPos].rAns;
            
            if (randListOrderPos == data.length - 1) {
                data = shuffleArray(data);
                randListOrderPos = 0;
            } else {
                randListOrderPos ++;
            }
            guessState = 0;
        }
    } else {
        alert("The page is still loading, we are aware of performance issues and are working on them.");
    }

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}