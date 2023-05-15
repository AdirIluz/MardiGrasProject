const btn = document.getElementById("qbtn");
const popupWrapper = document.getElementById("popupWrapper");
const close = document.getElementById("popup-close");

btn.addEventListener('click', function () {
    popupWrapper.style.display = "block";

});
close.addEventListener('click', function () {
    popupWrapper.style.display = "none";
});
var counter = 0;
function checkAns(element) {
    let answers = ["Fabruary 13", "Two Weeks", " Colorful costumes and masks ", "Fat Tuesday", "Purple, Green, and Gold", "The selected Rex or King of Carnival", "LaToya Cantrell", "1703", "Mobile", "Bourbon Street"];
    const inputName = element.getAttribute('name');
    const inputValue = element.getAttribute('value');
    const inputAnswer = element.getAttribute('answer');
    const answerNumber = Number(inputAnswer);
    if (inputValue == answers[answerNumber]) {
        document.querySelector("." + inputName).style.display = "none";
        document.querySelector("#ans" + answerNumber).innerText = "Corret Answer";
        document.querySelector("#ans" + answerNumber).style.color = "green";
        counter += 10;
        document.getElementById("score").innerHTML = `Score: ${counter}`;
    } else {
        document.querySelector("." + inputName).style.display = "none";
        document.querySelector("#ans" + answerNumber).innerText = "Wrong Answer";
        document.querySelector("#ans" + answerNumber).style.color = "red";
    }
}