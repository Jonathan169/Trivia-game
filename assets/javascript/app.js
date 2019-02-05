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
    question:"Who was the first Jedi to kil a sith in over a thousand years",
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
    wrong:["<span class='wrong'>Obi-won Kenobi</span>",'Han solo','Bale Organa']
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
const qss=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11];

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
        clearInterval(intervalId);
        checka();
        game=false;
        qdone=true;
        $("#mainb").text("Finish");
        choice="";
    }
    else if(time===0){
        clearInterval(intervalId);
        checka();
        qdone=true;
        $("#mainb").text("Next Question");
        choice="";
        console.log(correct + " "+incorrect)
    }
    
};

function checka(){
    butts[apos].selector.attr("class","rbutton")
    console.log(but[choice].value)
    for (let i=0;i<optionc.length-1;i++){
        butts[i].selector.attr("class","wbutton")
    }
    if(butts[apos].value===but[choice].value){
        correct++
        console.log("yay")
    }
     else if (butts[apos].value!==but[choice].value) {
        incorrect++
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
        }
        mainbf();
    }
    else if(game===true&& qdone===false){
        time=0;
        clearInterval(intervalId);
        checka();
        qdone=true;
        $("#mainb").text("Next Question")
    }
    else if(game===true && qdone===true){
        for(let i=0;i<optionp.length;i++){
            optionp[i].attr("class","button")
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
        // qnum=0;
        for(let i=0;i<optionc.length;i++){
            optionc[i].attr("class","hide")
        }
        qnum=0;
        qdone=false;
        correct=0;
        incorrect=0;
    }
    
    
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
    time=5;
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
