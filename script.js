document.addEventListener("DOMContentLoaded", (event) => {
    const noButton = document.getElementById("id-no");
    const yesButton = document.getElementById("id-yes");
    fixYesButton();
    function fixYesButton () {
        const yesData = yesButton.getBoundingClientRect();
        const {y,height} = yesData
        noButton.style.top = `${y + height}px`;
    }

    function randomNumber (min, max) {
        return Math.floor(Math.random() * (max-min+1)) + min;
    }

    function pictureChange() {
        document.getElementsByClassName('gif')[0].src="snoopy-cry.gif";
    }

    noButton.addEventListener('click', (e) => {
        const bodyElement = document.getElementById("bo");
        const bodyData = bodyElement.getBoundingClientRect();

        let x = randomNumber(10, bodyData.width - 130);
        let y = randomNumber(10, bodyData.height - 80);
        BigInt.innterText = "Press Yes!"
        e.target.style.left = `${x}px`;
        e.target.style.top = `${y}px`;
        pictureChange();
    });

    yesButton.addEventListener('click', (e) => {
        document.getElementsByClassName('gif')[0].src="yes.gif";
        yesButton.style.display = "none"
        noButton.style.display = "none"
        const fq = document.getElementById("fq")
        const sq = document.getElementById("sq")
        sq.style.display = "none"
        fq.innerHTML = "See u sooooon! (ꈍ ω ꈍ)"
        // setAttribute()
    });
});
  