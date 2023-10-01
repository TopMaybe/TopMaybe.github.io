var questions = ["Являются ли тротуары и обочины частью дороги?", "На каком расстоянии до неровного участка дороги устанавливается этот знак вне населенного пункта?", "Требования каких знаков из указанных вступают в силу непосредственно в том месте, где они установлены?"]
var currentQuestion = 0

document.getElementById("buttonAnswer").addEventListener("click", function() {
	UpdateText()
});

function UpdateText(){
	if (currentQuestion>2) currentQuestion = 0
	document.getElementById("buttonAnswer").innerHTML = `${questions[currentQuestion]}`
	currentQuestion++
}

UpdateText()