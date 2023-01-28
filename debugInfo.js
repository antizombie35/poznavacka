function getHash() {
    let dataToHash = data
    gotBuildHash = true;
    encoder = new TextEncoder();

    let dataToString = "";
    for(let i = 0; i < dataToHash.length; i++) {
    dataToString += dataToHash[i].id.toString() + dataToHash[i].rAns.toString() + dataToHash[i].src.join(", ").toString();
    }

    nextPic();
    nextPic();

    dataBuffer = encoder.encode(dataToString + functionVersion + dataVersion + contributors);

    crypto.subtle.digest("SHA-256", dataBuffer).then(hash => {
        hashArray = Array.from(new Uint8Array(hash));
        buildVersion = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    })
}

function getDebugInfo() {
    alert("Made by: " + contributors + "\n--DEBUG INFO--\nFV: " + functionVersion + "\nDV: " + dataVersion + "\nBUILD: " + buildVersion);
}

window.onload = function() {
    /*for (var y = 0; y < data.length; y++) {
        for (let i = 0; i < data[y].src.length; i++) {
            new Image().src = data[y].src[i];
        }
    }*/
    getHash();
    alert("Tato stránka je v betě a pracuje se na ní, jestli jste objevili probém tak ho na DISCORDU popište popř. přiložte debug info.") //TODO
}