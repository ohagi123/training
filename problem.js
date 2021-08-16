//選択問題
let problem = [
    ["あき","あきら","あから","あか",2,1,3,4],//2が正解番号
    ["きょうがく","きょうふ","こわい","きょうい",6,5,7,8],//6が正解番号
    ["しるいるい","ししるい","ししるいるい","しぼう",11,9,10,12],//11が正解番号
    ["きんごう","かねごう","こんごう","さごう",15,13,14,16]//15が正解番号
];
let point = 0


//選択肢
let choice1 = document.getElementById("Choice1")
let choice2 = document.getElementById("Choice2")
let choice3 = document.getElementById("Choice3")
let choice4 = document.getElementById("Choice4")
let choice5 = document.getElementById("Choice5")
let choice6 = document.getElementById("Choice6")
let choice7 = document.getElementById("Choice7")
let choice8 = document.getElementById("Choice8")
let choice9 = document.getElementById("Choice9")
let choice10 = document.getElementById("Choice10")
let choice11 = document.getElementById("Choice11")
let choice12 = document.getElementById("Choice12")
let choice13 = document.getElementById("Choice13")
let choice14 = document.getElementById("Choice14")
let choice15 = document.getElementById("Choice15")
let choice16 = document.getElementById("Choice16")

//問題
choice1.innerHTML = problem[0][0]
choice2.innerHTML = problem[0][1]
choice3.innerHTML = problem[0][2]
choice4.innerHTML = problem[0][3]
choice5.innerHTML = problem[1][0]
choice6.innerHTML = problem[1][1]
choice7.innerHTML = problem[1][2]
choice8.innerHTML = problem[1][3]
choice9.innerHTML = problem[2][0]
choice10.innerHTML = problem[2][1]
choice11.innerHTML = problem[2][2]
choice12.innerHTML = problem[2][3]
choice13.innerHTML = problem[3][0]
choice14.innerHTML = problem[3][1]
choice15.innerHTML = problem[3][2]
choice16.innerHTML = problem[3][3]


function final(hum){//未完
//正解
const answer = problem[0][4]
const answer2 =problem[1][4]
const answer3 =problem[2][4]
const answer4 =problem[3][4]
//不正解
const IncorrectAnswer = problem[0][5]
const IncorrectAnswer2 = problem[0][6]
const IncorrectAnswer3 = problem[0][7]
const IncorrectAnswer4 = problem[1][5]
const IncorrectAnswer5 = problem[1][6]
const IncorrectAnswer6 = problem[1][7]
const IncorrectAnswer7 = problem[2][5]
const IncorrectAnswer8 = problem[2][6]
const IncorrectAnswer9 = problem[2][7]
const IncorrectAnswer10 = problem[3][5]
const IncorrectAnswer11 = problem[3][6]
const IncorrectAnswer12 = problem[3][7]

let A = document.getElementsByClassName("A")

//正解
 if(answer == hum){
    point +=5
    console.log ("5点獲得")
    document.getElementById('Choice2').style.backgroundColor = 'skyblue';
    choice1.disabled = true//対象の要素を非活性にすることが出来る属性です
    choice2.disabled = true
    choice3.disabled = true
    choice4.disabled = true
 }
 else if(answer2 == hum){
     point +=5
     console.log ('5点獲得')
     document.getElementById('Choice6').style.backgroundColor = 'skyblue';
     choice5.disabled = true//対象の要素を非活性にすることが出来る属性です
     choice6.disabled = true
     choice7.disabled = true
     choice8.disabled = true
 }
 else if(answer3 == hum){
     point +=5
     console.log ("5点獲得")
     document.getElementById('Choice11').style.backgroundColor = 'skyblue';
     choice9.disabled = true//対象の要素を非活性にすることが出来る属性です
     choice10.disabled = true
     choice11.disabled = true
     choice12.disabled = true
 }
 else if(answer4 == hum) {
   　 point +=5
     console.log ("5点獲得")
     document.getElementById('Choice15').style.backgroundColor = 'skyblue';
     choice13.disabled = true//対象の要素を非活性にすることが出来る属性です
     choice14.disabled = true
     choice15.disabled = true
     choice16.disabled = true
 }


 //不正解
 else if(IncorrectAnswer == hum){
    document.getElementById('Choice1').style.backgroundColor = 'skyblue';
    choice1.disabled = true//対象の要素を非活性にすることが出来る属性です
    choice2.disabled = true
    choice3.disabled = true
    choice4.disabled = true
}
else if(IncorrectAnswer2 == hum){
    document.getElementById('Choice3').style.backgroundColor = 'skyblue';
    choice1.disabled = true//対象の要素を非活性にすることが出来る属性です
    choice2.disabled = true
    choice3.disabled = true
    choice4.disabled = true
}
else if(IncorrectAnswer3 == hum){
    document.getElementById('Choice4').style.backgroundColor = 'skyblue';
    choice1.disabled = true//対象の要素を非活性にすることが出来る属性です
    choice2.disabled = true
    choice3.disabled = true
    choice4.disabled = true
}
else if(IncorrectAnswer4 == hum){
    document.getElementById('Choice5').style.backgroundColor = 'skyblue';
    choice5.disabled = true//対象の要素を非活性にすることが出来る属性です
    choice6.disabled = true
    choice7.disabled = true
    choice8.disabled = true
}
else if(IncorrectAnswer5 == hum){
    document.getElementById('Choice7').style.backgroundColor = 'skyblue';
    choice5.disabled = true//対象の要素を非活性にすることが出来る属性です
    choice6.disabled = true
    choice7.disabled = true
    choice8.disabled = true
}
else if(IncorrectAnswer6 == hum){
    document.getElementById('Choice8').style.backgroundColor = 'skyblue';
    choice5.disabled = true//対象の要素を非活性にすることが出来る属性です
    choice6.disabled = true
    choice7.disabled = true
    choice8.disabled = true
}
else if(IncorrectAnswer7 == hum){
    document.getElementById('Choice9').style.backgroundColor = 'skyblue';
    choice9.disabled = true//対象の要素を非活性にすることが出来る属性です
    choice10.disabled = true
    choice11.disabled = true
    choice12.disabled = true
}
else if(IncorrectAnswer8 == hum){
    document.getElementById('Choice10').style.backgroundColor = 'skyblue';
    choice9.disabled = true//対象の要素を非活性にすることが出来る属性です
    choice10.disabled = true
    choice11.disabled = true
    choice12.disabled = true
}
else if(IncorrectAnswer9 == hum){
    document.getElementById('Choice12').style.backgroundColor = 'skyblue';
    choice9.disabled = true//対象の要素を非活性にすることが出来る属性です
    choice10.disabled = true
    choice11.disabled = true
    choice12.disabled = true
}
else if(IncorrectAnswer10 == hum){
    document.getElementById('Choice13').style.backgroundColor = 'skyblue';
    choice13.disabled = true//対象の要素を非活性にすることが出来る属性です
    choice14.disabled = true
    choice15.disabled = true
    choice16.disabled = true
}
else if(IncorrectAnswer11 == hum){
    document.getElementById('Choice14').style.backgroundColor = 'skyblue';
    choice13.disabled = true//対象の要素を非活性にすることが出来る属性です
    choice14.disabled = true
    choice15.disabled = true
    choice16.disabled = true
}
else if(IncorrectAnswer12 == hum){
    document.getElementById('Choice16').style.backgroundColor = 'skyblue';
    choice13.disabled = true//対象の要素を非活性にすることが出来る属性です
    choice14.disabled = true
    choice15.disabled = true
    choice16.disabled = true
}


};

//合計点
function result(){
    let result =document.getElementById("result")

    result.innerHTML= point+"点"
}

//やり直し
function　reset(){
    location.reload();
}
