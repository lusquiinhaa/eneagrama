var mediador_9 = {};
var perfeccionista_1 = {};
var ajudante_2 = {};


var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_six = document.getElementById('question-6');
var question_seven = document.getElementById('question-7');
var question_eight = document.getElementById('question-8');
var question_nine = document.getElementById('question-9');

function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        mediador_9['question'+question_number] = parseInt(event.target.value);
            console.log(mediador_9);
        console.log(event.target.value);
        perfeccionista_1['question'+question_number] = parseInt(event.target.value);
            console.log(perfeccionista_1);
        ajudante_2['question'+question_number] = parseInt(event.target.value);
            console.log(ajudante_2);
    }
    }


question_one.addEventListener('click', function(event){
    storeAnswer(1, event)
})
question_two.addEventListener('click', function(event){
    storeAnswer(2, event)
})
question_three.addEventListener('click', function(event){
    storeAnswer(3, event)
})
question_four.addEventListener('click', function(event){
    storeAnswer(4, event)
})
question_five.addEventListener('click', function(event){
    storeAnswer(5, event)
})
question_six.addEventListener('click', function(event){
    storeAnswer(6, event)
})
question_seven.addEventListener('click', function(event){
    storeAnswer(7, event)
})
question_eight.addEventListener('click', function(event){
    storeAnswer(8, event)
})
question_nine.addEventListener('click', function(event){
    storeAnswer(9, event)
})

function mediador(){
    var total_mediador = 
    mediador_9.question1+
    mediador_9.question2+
    mediador_9.question3;

    return total_mediador;
} 

function perfeccionista(){
    var total_perfeccionista =
    perfeccionista_1.question4+ 
    perfeccionista_1.question5+
    perfeccionista_1.question6;

    return total_perfeccionista;
  
}
function ajudante(){
    var total_ajudante =
    ajudante_2.question7+
    ajudante_2.question8+
    ajudante_2.question9;
    
    return total_ajudante;
  
}



function totalScore(){
     if(mediador() < perfeccionista()){
        var total_Score  = perfeccionista();
    }   else {(mediador() > perfeccionista());
        var total_Score = mediador();
    }if(mediador() < ajudante()){
        var total_Score = ajudante();
    }   else {(mediador() > ajudante())
        var total_Score = mediador();
    }if(perfeccionista() < ajudante()){
        var total_Score = ajudante();
    }   else if(perfeccionista() > ajudante()){
        var total_Score = perfeccionista();
    }
    
        return total_Score
}



function getInfoBasedOnScore(){
      if(mediador() < perfeccionista()){
        var score_info = "Você é perfeccionista!";
    }   else {(mediador() > perfeccionista());
        var score_info = "Você é mediador!";
    } if (mediador() > ajudante()){
        var score_info = "Você é mediador!";
    }   else {(mediador() < ajudante())
        var score_info = "Você é ajudante!";
    } if (ajudante() > perfeccionista()){
        var score_info = "Você é ajudante!";
    }   else if(ajudante() < perfeccionista()){
        var score_info = "Você é perfeccionista!";   
    
}

    return score_info;
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');
var submit9 = document.getElementById('submit9');

function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

submit1.addEventListener('click', function(){
    nextQuestion(2);
    growProgressBar('20%');
})
submit2.addEventListener('click', function(){
    nextQuestion(3);
    growProgressBar('30%');
})
submit3.addEventListener('click', function(){
    nextQuestion(4);
    growProgressBar('40%');
})
submit4.addEventListener('click', function(){
    nextQuestion(5);
    growProgressBar('50%');
})
submit5.addEventListener('click', function(){
    nextQuestion(6);
    growProgressBar('60%');
})
submit6.addEventListener('click', function(){
    nextQuestion(7);
    growProgressBar('70%');
})
submit7.addEventListener('click', function(){
    nextQuestion(8);
    growProgressBar('80%');
})
submit8.addEventListener('click', function(){
    nextQuestion(9);
    growProgressBar('90%');
})
submit9.addEventListener('click', function(){
    nextQuestion(10);
    growProgressBar('100%');
})


submit9.addEventListener('click', function(){
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
})

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}