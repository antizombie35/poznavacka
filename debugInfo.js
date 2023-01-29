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