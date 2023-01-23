var guessState = 0
var rAns = ""
var data = [
    {id: 0, rAns: "holub", src: "https://www.c-budejovice.cz/sites/default/files/obsah/Mesto/istockphoto-1012278364-612x612.jpg"},
    {id: 1, rAns: "tukan", src: "https://aa.ecn.cz/img_upload/e6ffb6c50bc1424ab10ecf09e063cd63/tukan01.jpg"},

]
function nextPic() {
    if (guessState == 1) {
        document.getElementById("ans").innerText = rAns;
        guessState = 0;
    } else {
        randNum = Math.floor(Math.random() * data.length);
        rAns = data[randNum].rAns
        document.getElementById("pic").src = data[randNum].src;
        document.getElementById("ans").innerText = "";
        guessState = 1;
    }
}