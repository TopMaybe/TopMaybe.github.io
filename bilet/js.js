const questions = [
    [`Являются ли тротуары и обочины частью дороги?`,
        `+Являются`, `Являются только обочины`, `Не являются`],
    [`На каком расстоянии до неровного участка дороги устанавливается этот знак вне населенного пункта?`,
        `+150-300 м`, `50-100 м`, `Непосредственно перед неровным участком дороги`],
    [`Требования каких знаков из указанных вступают в силу непосредственно в том месте, где они установлены?`,
        `Только Б`, `+А и Б`, `Всех`]];

let currentQuestion = 0
let currentRightAnswer = 0
let QuestionBtnID = "btn_"
let AnswerBtnID = "answer-item"



function SetListenerToAnswer() {
    for (let i = 1; i < questions[currentQuestion].length; i++) {
        let button = document.getElementById(`${AnswerBtnID+i}`);
        if(questions[currentQuestion][i].includes("+")) currentRightAnswer = i;
        button.innerText = `${questions[currentQuestion][i].replace("+", "")}`;
        button.addEventListener("click", function () {
            SetAnswer(i)
        });
        // console.log(`${currentRightAnswer}\n${questions[currentQuestion][i]}`)
    }
    UpdateText();
}
function SetListenerToQuestion(){
    for (let i = 0; i < 20; i++) {
        let button = document.getElementById(`${QuestionBtnID+i}`);
        button.innerText = `${i+1}`;
        button.addEventListener("click", function () {
            GoToQuestion(i)
        });
        // console.log(`${currentRightAnswer}\n${questions[currentQuestion][i]}`)
    }
}
function UpdateText(){
    if (currentQuestion>20) CheckAnswers()
    document.getElementById("question").innerHTML = `${questions[currentQuestion][0]}`
    currentQuestion++
}
function SetAnswer(idAnswer){
    document.getElementById(`${AnswerBtnID+idAnswer}`).style.backgroundColor = "red";
    if (idAnswer === currentRightAnswer) document.getElementById(`${AnswerBtnID+idAnswer}`).style.backgroundColor = '#30ff23';
}
function GoToQuestion(id){
    //TODO:
    console.log(`Сдесь могла быть ваша реклама\n${id}`)
}
function CheckAnswers(){
    //TODO:
    console.log("Тут должна быть проверка ошибок")
}

SetListenerToAnswer()
SetListenerToQuestion()