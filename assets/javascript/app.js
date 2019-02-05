//Questions
const q1={
    question:"What planet was Anikan Skywalker born?",
    answer:'Tatooine',
    wrong:['Naboo','Courasant','Organa']
}
const q2={
    question:"Who was the grand master of the jedi order",
    answer:"yoda",
    wrong:['Mace windu','Sheev Palpatine','John snow']
}
const q3={
    question:"who said this famous quote 'do it' ",
    answer:"Darth Sidious",
    wrong:['Yoda','Darth Plagues','Darth Vader']
}
const q4={
    question:"Who was like an uncle to Anikan sky walker",
    answer:'Sheev Palpatine',
    wrong:['Yoda','Obi-won Kenobi','Darth Vader']
}
const q5={
    question:"why did Darth vader Join the dark side",
    answer:'He dreamt his wife was going to die',
    wrong:['They had Cookies','He wanted to have more power','To destroy the jedi']
}
const q6={
    question:"Who was the first Jedi to kill a sith in over a thousand years",
    answer:'Obi-won Kenobi',
    wrong:['Anikan Skywalker','Yoda','Qui-gon']
}
const q7={
    question:"Where did Obi-won have the high ground",
    answer:'Mustafar',
    wrong:['Tatooine','Curasant','Naboo']
}
const q8={
    question:"Who was lukes father",
    answer:'Anikan Skywalker',
    wrong:["Obi-won Kenobi",'Han solo','Bale Organa']
}
const q9={
    question:"what was the name of the Episode One",
    answer:'The Phantom Menace',
    wrong:['Attack of The Clones','solo',' a New Hope']
}
const q10={
    question:"What was Darth Vaders name before he became a sith",
    answer:'Anikan Skywalker',
    wrong:['The Real Dirty Dan','Obi-won Kenobi','anni']
}
const q11={
    question:"Who Trained kylo Ren",
    answer:'Luke Skywalker',
    wrong:['Snoke','Leia Organa','Darth Vader']
}
const q12={
    question:"where was Darth sidious from",
    answer:'Naboo',
    wrong:['Mustafar','Endor','Organa']
}
const q13={
    question:"What is the coldest planet in all the films",
    answer:'Hoth',
    wrong:['Mustafar','Endor','Naboo']
}
const q14={
    question:"Who was Darth sidious Apperntice Before Darth Vader",
    answer:'Count Dooku',
    wrong:['Darth Maul','yoda','Darth Plauges']
}
const q15={
    question:"Who was Darth Sidious's Master",
    answer:'Darth Plauges',
    wrong:['Darth Maul','yoda','Qui-gon jin']
}
const q16={
    question:"How many Jedi were on the jedi Council",
    answer:'12',
    wrong:['3','5','8']
}
const q17={
    question:"Who gave the order to Kill all the jedi",
    answer:'Emperer Palpatine',
    wrong:['Darth Vader','Darth Maul','Count Dooku']
}
const q18={
    question:"How many Lightsabers did General Grievous Hold",
    answer:'4',
    wrong:['2','1','3']
}
const q19={
    question:"Who killed the Padawan(Kids) in the jedi Temple",
    answer:'Darth Vader',
    wrong:['Annikan Skywalker','Darth Sidious','Darth Maul']
}
const q20={
    question:"Who trained Luke Skywalker",
    answer:'Yoda',
    wrong:['Obi-won Kenobi','Qui-gon Jin','Leia Organa']
}

const b1={
    selector:$("#option1"),
    value:1
}
const b2={
    selector:$("#option2"),
    value:2
}
const b3={
    selector:$("#option3"),
    value:3
}
const b4={
    selector:$("#option4"),
    value:4
}

//Arrays
const optionp=[$("#option1"),$("#option2"),$("#option3"),$("#option4")]
const butts=[b1,b2,b3,b4]
const but=[b1,b2,b3,b4]
const optionc=[$("#option1"),$("#option2"),$("#option3"),$("#option4")]
const indexo=["option1","option2","option3","option4"]
const qss=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20];

function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){
        let r=Math.floor(Math.random()*(i+1))
        let temp =arr[i];
        arr[i]=arr[r];
        arr[r]=temp;
}}

//variables
let apos=0;
let grade="";
let right=[];
let wrong=[];
let choice="";
var qnum=0;
var clicked="";
var game=false;
var qdone=false;
var correct=0;
var incorrect=0;
var score;

//timer
gamestart = function() {
    intervalId= setInterval(count, 1000)
};

var time=15;
function count() {
    if(time){
         time--;
        $("#timer").text(time);
    }
    else if(time===0 && qnum===11){
        $("#timer").text(time);
        clearInterval(intervalId);
        checka();
        game=false;
        qdone=true;
        $("#mainb").text("Finish");
        choice="";
    }
    else if(time===0){
        $("#timer").text(time);
        clearInterval(intervalId);
        checka();
        qdone=true;
        $("#mainb").text("Next Question");
        choice="";
        console.log(correct + " "+incorrect)
    }
    
};

function checka(){
    for (let i=0;i<optionc.length-1;i++){
        butts[i].selector.attr("class","wbutton")
    }
    butts[apos].selector.attr("class","rbutton");
    if(choice===""|| choice===undefined){
        incorrect++;
        console.log("BOO")
    }
    else if(butts[apos].value===but[choice].value){
        correct++
        console.log("yay")
    }
     else if (butts[apos].value!==but[choice].value) {
        incorrect++
        console.log("BOO")
    }
    else if(choice){
        incorrect++;
        console.log("BOO")
    }

}

function score(){
    amount= (correct/11)*100
    return Math.round(amount)
}


//onclick
$("#mainb").on("click", function(){
    if(game===false&&qdone===false){
        for(let i=0;i<optionp.length;i++){
            optionp[i].attr("class","button")
            $("#mainb").text("Answer")
            shuffle(qss);
        }
        mainbf();
    }
    else if(game===true&& qdone===false){
        time=0;
        clearInterval(intervalId);
        count();
        $("#mainb").text("Next Question")
    }
    else if(game===true && qdone===true){
        for(let i=0;i<optionp.length;i++){
            butts[i].selector.attr("class","button")
            $("#mainb").text("Answer")
        }
        mainbf();
        qdone=false;
        console.log(correct + " "+incorrect)
    }
    else if(game===false){
        time=0;
        $("#questions").text("you got a score of: "+ score()+"% would you like to try again?");
        $("#mainb").text("Restart");
        $("#mainp").attr("class","mbutton")
        for(let i=0;i<optionc.length;i++){
            optionc[i].attr("class","hide")
        }
        qnum=0;
        qdone=false;
        correct=0;
        incorrect=0;
    }    
})
let infot="From the Makers Of Star Wars RPG comes STAR WARS Trivia We'll Test you knowledge Of the saga. You'll have 15 seconds to answer each question. Click the answer button when you are certain you have the correct answer. once you press start the game will begin!"
$("#mainp").on("click", function (){
    $("#questions").text(infot)
    for(let x=0;x<butts.length;x++){
        butts[x].selector.attr("class","hide")
    }
    $("#mainb").text("Start")
    $("#mainp").attr("class","hide")
})
function mainbf(){
    $("#questions").text(qss[qnum].question)
    shuffle(butts)
    for(let x=0;x<butts.length;x++){
    if(x===3){
            apos=3;
            butts[x].selector.text(qss[qnum].answer)
    } 
    else{
        butts[x].selector.text(qss[qnum].wrong[x])
    }}
    qnum++
    gamestart();
    game=true
    time=15;
}

function reply_click(id){
    if(clicked===""){
        clicked=id
        console.log(clicked)
        for (let i=0;i<indexo.length;i++){
            if(indexo[i]===clicked){
                $(optionc[i]).attr("class","cbutton")
                choice=i;
            }}}
    else if(clicked!==""){
        $(optionc[choice]).attr("class","button");
        clicked=id;
            for (let x=0;x<indexo.length;x++){
                if(indexo[x]===clicked){
                    $(optionc[x]).attr("class","cbutton")
                    choice=x;
    }}}
}
