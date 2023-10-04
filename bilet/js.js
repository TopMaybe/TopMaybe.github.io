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
let btn = [];

function SetListenerToAnswer(index) {
    document.getElementById(`${AnswerBtnID+index}`).addEventListener("click", function () {
        SetAnswer(index)
    });
}
function SetTextInBtn(index){
    if (questions[currentQuestion][index].includes("+")) currentRightAnswer = index;
    document.getElementById(`${AnswerBtnID + index}`).innerText = `${questions[currentQuestion][index].replace("+", "")}`;
}
function ClearColorBtn(){
    //TODO:
    for(let i = 1; i < questions[currentQuestion].length; i++){
        btn[i-1].style.backgroundColor = "#ddd"
    }
}
function SetImage(index){
    let img = document.getElementById("image");
    fetch(`./img/n17_${index+1}.jpg`)
        .then(response => {
            img.src = response.ok ? `./img/n17_${index+1}.jpg` : "./img/no_picture.png";
        });
}
function SetUpButtons(){
    for (let i = 1; i < questions[currentQuestion].length; i++){
        btn[i-1] = document.getElementById(`${AnswerBtnID+i}`)
        SetListenerToAnswer(i)
        SetTextInBtn(i)
    }
}

function SetListenerToQuestion(){
    for (let i = 0; i < 20; i++) {
        let button = document.getElementById(`${QuestionBtnID+i}`);
        button.innerText = `${i+1}`;
        button.addEventListener("click", function () {
            GoToQuestion(i)
        });
    }
}
function UpdateText(){
    document.getElementById("question").innerHTML = `${questions[currentQuestion][0]}`
}
function SetAnswer(idAnswer){
    document.getElementById(`${AnswerBtnID+idAnswer}`).style.backgroundColor = "red";
    if (idAnswer === currentRightAnswer) document.getElementById(`${AnswerBtnID+idAnswer}`).style.backgroundColor = '#30ff23';
}
function GoToQuestion(id){
    currentQuestion = id
    UpdateText()
    ClearColorBtn()
    SetImage(currentQuestion)
    for (let i = questions[currentQuestion].length;  i < 6; i++)
    {
        btn[i] = document.getElementById(`${AnswerBtnID+i}`)
        btn[i].classList.add("hide-btn")
    }
}
function CheckAnswers(){
    //TODO:
    // Тут должна быть проверка ошибок в ответах
}


SetListenerToQuestion()
SetUpButtons()
GoToQuestion(currentQuestion)
