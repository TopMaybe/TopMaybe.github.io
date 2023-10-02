const questions = [
    [`Являются ли тротуары и обочины частью дороги?`,
        `+Являются`, `Являются только обочины`, `Не являются`],
    [`На каком расстоянии до неровного участка дороги устанавливается этот знак вне населенного пункта?`,
        `+150-300 м`, `50-100 м`, `Непосредственно перед неровным участком дороги`],
    [`Требования каких знаков из указанных вступают в силу непосредственно в том месте, где они установлены?`,
        `Только Б`, `+А и Б`, `Всех`]];

let currentQuestion = 0
let currentRightAnswer = 0
let ButtonID = "answer-item"




function SetListener() {
    for (let i = 1; i < questions[currentQuestion].length; i++) {
        let button = document.getElementById(`${ButtonID+i}`);
        if(questions[currentQuestion][i].includes("+")) currentRightAnswer = i;
        button.innerText = `${questions[currentQuestion][i].replace("+", "")}`;
        button.addEventListener("click", function () {
            SetAnswer(i)
        });
        // console.log(`${currentRightAnswer}\n${questions[currentQuestion][i]}`)
    }
    UpdateText();
}

function UpdateText(){
    if (currentQuestion>2) currentQuestion = 0
    document.getElementById("question").innerHTML = `${questions[currentQuestion][0]}`
    currentQuestion++
}
function SetAnswer(idAnswer){
    document.getElementById(`${ButtonID+idAnswer}`).style.backgroundColor = "red";
    if (idAnswer === currentRightAnswer) document.getElementById(`${ButtonID+idAnswer}`).style.backgroundColor = '#30ff23';
}


SetListener()
