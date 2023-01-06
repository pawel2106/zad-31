const button = document.querySelector("button");
const body = document.querySelector("body");


button.addEventListener('click', function() {
    const pTag = document.createElement('p');
    pTag.textContent = "Klik działa!";
    body.appendChild(pTag);
})