function getDebugInfo() {
    encoder = new TextEncoder();

    let dataToString = "";
    for(let i = 0; i < data.length; i++) {
    dataToString += data[i].id.toString() + data[i].rAns.toString() + data[i].src.join(", ").toString();
    }

    dataBuffer = encoder.encode(dataToString + functionVersion + dataVersion + contributors);

    crypto.subtle.digest("SHA-256", dataBuffer).then(hash => {
        hashArray = Array.from(new Uint8Array(hash));
        buildVersion = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    }).then(_i => {
        alert("Made by: " + contributors + "\n--DEBUG INFO--\nFV: " + functionVersion + "\nDV: " + dataVersion + "\nBUILD: " + buildVersion)});
}

window.onload = function() {
    for (var y = 0; y < data.length; y++) {
        for (let i = 0; i < data[y].src.length; i++) {
            new Image().src = data[y].src[i];
        }
    }
};