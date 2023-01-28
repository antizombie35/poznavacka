
function loadPage() {
    for (let i = 0; i < data.length; i++) {
        const div = document.createElement("div");
        div.classList.add(i % 2 === 0 ? "divA" : "divB");

        const imagesContainer = document.createElement("div");
        imagesContainer.style.display = "flex";
        imagesContainer.style.flexWrap = "wrap";

        for (let j = 0; j < data[i].src.length; j++) {
            const image = document.createElement("img");
            image.src = data[i].src[j];
            image.alt = "chrobák / motýle"
            image.style.display = "block";
            image.style.margin = "auto";
            imagesContainer.appendChild(image);
        }
        div.appendChild(imagesContainer);

        const text = document.createElement("p");
        text.innerHTML = data[i].rAns;
        text.style.textAlign = "center";
        div.appendChild(text);

        document.body.appendChild(div);
    }
}

function nextPic() {
    //empty
}