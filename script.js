const noButton = document.getElementById("id-no");
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max-min+1)) + min;
}

function pictureChange() {
    document.getElementsByClassName('gif').src="snoopy-cry.gif";
}

noButton.addEventListener('click', () => {
    const bodyElement = document.getElementById("bo");
    const bodyData = bodyElement.getBoundingClientRect();

    let x = randomNumber(10, bodyData.width - 130);
    let y = randomNumber(10, bodyData.height - 80);
    BigInt.innterText = "Press Yes!"
    event.target.style.left = `${x}px`;
    event.target.style.top = `${y}px`;
});