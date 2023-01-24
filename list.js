function loadPage() {
    for (let i = 0; i < data.length; i++) {
    const div = document.createElement("div");
    div.classList.add(i % 2 === 0 ? "divA" : "divB");

    for (let j = 0; j < data[i].src.length; j++) {
        const image = document.createElement("img");
        image.src = data[i].src[j];
        image.style.display = "block";
        image.style.margin = "auto";
        div.appendChild(image);
    }

    const text = document.createElement("p");
    text.innerHTML = data[i].rAns;
    text.style.textAlign = "center";
    div.appendChild(text);

    document.body.appendChild(div);
    }
}