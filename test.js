var guessState = 2;
var rAns = "";
var randListOrderPos = 0;

function nextPic() {
    if (gotBuildHash == true) {
        if (guessState == 2) { //generate index to shuffle
            data = shuffleArray(data);
            guessState = 0
        } else if (guessState == 0) { //get next q
            document.getElementById("pic").src = data[randListOrderPos].srcImg[[Math.floor(Math.random() * data[randListOrderPos].srcImg.length)]].src;
            document.getElementById("picDiv").appendChild(document.getElementById("pic"));
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

window.onload = function () {
    document.getElementById("infoP").innerText = "We are currently downloading your copy of the database ...\nIt should only take a few seconds"
    for (var i = 0; i < data.length; i++) {
        var srcImgs = [];
        for (var j = 0; j < data[i].src.length; j++) {
            var img = new Image();
            img.src = data[i].src[j];
            srcImgs.push(img);
        }
        data[i].srcImg = srcImgs;
    }
    getHash();
    document.getElementById("infoP").innerText = ""

}