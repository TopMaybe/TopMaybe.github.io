const questions = [
    [`Являются ли тротуары и обочины частью дороги?`,                                                                   //  1
        `+Являются`, `Являются только обочины`, `Не являются`],
    [`На каком расстоянии до неровного участка дороги устанавливается этот знак вне населенного пункта?`,               //  2
        `+150-300 м`, `50-100 м`, `Непосредственно перед неровным участком дороги`],
    [`Требования каких знаков из указанных вступают в силу непосредственно в том месте, где они установлены?`,          //  3
        `Только Б`, `+А и Б`, `Всех`],
    [`Вам разрешено продолжить движение:`,                                                                              //  4
    `По траекториям Б или В`, `+По траекториям А или В`, `По любой траектории из указанных`],
    [`Можно ли Вам выполнить обгон при наличии данной разметки?`,                                                       //  5
    `Можно`,`Можно, если скорость трактора менее 30 км/ч`,`+Нельзя`],
    [`В каком месте Вам следует остановиться?`,                                                                         //  6
    `+Перед светофором`,`Перед пересекаемой проезжей частью`,`В любом из перечисленных`],
    [`На каком расстоянии от транспортного средства должен быть выставлен знак аварийной остановки в данной ситуации?`, //  7
    `Не менее 10 м`,`Не менее 15 м`,`Не менее 20 м`, `Не менее 30 м`]
];

let currentQuestion = 1
let currentRightAnswer = 0
let QuestionBtnID = "btn_"
let AnswerBtnID = "answer-item"
let btn = [];

function SetListenerToAnswer(index) {
    document.getElementById(`${AnswerBtnID+index}`).addEventListener("click", function () {
        SetAnswer(index)
    });
}
function SetTextInBtn(){
    for (let index = 1; index < questions[currentQuestion].length; index++) {
        if (questions[currentQuestion][index].includes("+")) currentRightAnswer = index;
        document.getElementById(`${AnswerBtnID + index}`).innerText = `${questions[currentQuestion][index].replace("+", "")}`;
    }
}
function ClearColorBtn(){
    //TODO:
    for(let i = 1; i < questions[currentQuestion].length; i++){
        btn[i-1].style.backgroundColor = "#ddd"
    }
}
function SetImage() {
    let img = document.getElementById("image");
    img.src = `./img/n17_${currentQuestion + 1}.jpg`
}
function SetUpButtons(){
    for (let i = 1; i < questions[currentQuestion].length; i++){
        btn[i-1] = document.getElementById(`${AnswerBtnID+i}`)
        SetListenerToAnswer(i)
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
function RemoveClassHide(){
    let btn = document.getElementsByClassName("hide-btn")
    for(let i = 0; i < btn.length; i++)
        btn[i].classList.remove("hide-btn")
}
function GoToQuestion(id){
    if(currentQuestion === id) return
    currentQuestion = id
    UpdateText()
    RemoveClassHide()
    ClearColorBtn()
    SetImage()      // TODO: Мне надо переделать функцию присваивания листнеров, они проходят через 1 вопрос в котором <5 кнопок из-за чего все ломается
    SetTextInBtn()
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

document.getElementById("image").addEventListener("error", function (){
    document.getElementById("image").src = "./img/no_picture.png"
})
SetListenerToQuestion()
SetUpButtons()
GoToQuestion(currentQuestion-1)
