const noButton = document.getElementById("id-no");
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max-min+1)) + min;
}

function pictureChange() {
    document.getElementsByClassName('gif').src="snoopy-cry.gif";
}

noButton.addEventListener('click', () => {
    let num1 = randomNumber(20, 300);
    let num2 = randomNumber(30, 600);
    BigInt.innterText = "Press Yes!"
    console.log(num1 + ' ' + num2);
    event.target.style.left = `${num1}px`;
    event.target.style.top = `${num2}px`;
});