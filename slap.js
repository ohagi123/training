let zero = document.getElementById("0")
let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")
let four = document.getElementById("4")
let five = document.getElementById("5")
let six = document.getElementById("6")
let seven = document.getElementById("7")
let eight = document.getElementById("8")
let nine = document.getElementById("9")
let score = document.getElementById("score")
let time = 60
let count = 0
let point = 0
let start = setInterval(starter,1200)
let down = setInterval(CountDown,10)
const message = "Slap";

let slap = [];
for(let i = 0; i < 10; i++){
  slap.push(document.getElementById(`${i}`));
  
}

//ゲームの動き
function starter(){
    
   for(let i = 0; i < 10;i++){
       slap[i].innerText = "";

   }
   //ランダムにSlapが出る処理
    const target = Math.floor(Math.random() * slap.length)
    slap[target].innerText = message;
}

function CountDown(){
//タイマー
if (count % 100 == 0) {
        
    time -= 1;
 }
 //ゲーム終了処理
if (time == 0) {
    clearInterval(start);
    clearInterval(down);
    console.log("終了")
    //評価
    if (point <= 19) {
        alert("修行してリベンジだ！")
    }else if (point <= 29) {
        alert("目指せ！30score!!!")
    }else if (point <= 39) {
        alert("なかなかの腕前！！！！")
    }else if (point <= 49) {
        alert("すごいすごい！達人まであと一歩！！！！")
    }else if (point <= 59) {
        alert("達人...!!!!")
    }else if (point >=60) {
        alert("神")
    }
}
count +=1
}

//当たった時の処理
function attack(){

if (time == 0) {
return;
}else if (zero==zero) {
point += 1
score.innerText = "SCORE:"+point
}else if (one==one) {
point += 1
score.innerText = "SCORE:"+point
}else if (two == two) {
point += 1
score.innerText = "SCORE:"+point
}else if (three == three) {
point += 1
score.innerText = "SCORE:"+point
}else if (four ==four) {
point += 1
score.innerText = "SCORE:"+point   
}else if (five == five) {
point += 1
score.innerText = "SCORE:"+point  
}else if (six == six) {
point += 1
score.innerText = "SCORE:"+point   
}else if (seven == seven) {
point += 1
score.innerText = "SCORE:"+point     
}else if (eight == eight) {
point += 1
score.innerText = "SCORE:"+point     
}else if (nine == nine) {
point += 1
score.innerText = "SCORE:"+point 
}
    
}
  


//リセット
function reset(){
　location.reload();
}



