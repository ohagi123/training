'use strict'
let answers= document.getElementById('answer');//答え入れるところ
let enter = document.getElementById('enter');//決定ボタン
let word = document.getElementById('word');//問題出すところ
let result = document.getElementById('result')//正解不正解
let result2 = document.getElementById('result2')//結果
let order = document.getElementById('order')//何番目の問題か
let Time = document.getElementById('timer')//タイムを表示する場所
let onetry = document.getElementById('onetry')//リセット
let Timer = 0//タイマー
let score = 0//スコア
let counter =0;//カウンター
let end = false//終わらせる処理
const up = setInterval(timer,1000)//タイマー
let correct = null; // 答えのメモ用

//問題・答え
const EnglishWord =['tsop','alwk','lcla','urn','omec','acfe','aet','romf','oorm','japnsee','erally','eardy','ikeb','rdei','ogd','etg','ogod','thalete','irfst','oofd','ivef','avacitno','rwite','eadr','celipse','outab','thermo','faterh','aveh','orts']
const EnglishAnswer =['stop','walk','call','run','come','face','eat','from','room','japanese','really','ready','bike','ride','god','get','good','athlete','first','food','five','vacation','write','read','eclipse','about','mother','father','have','sort']

//本題処理


enter.onclick= function(){
  const answer = answers.value;
  

  if (answer === '') {
    return
  }if (end) {
    return
  }if (answer === correct) {  // set() でメモした答えと比較
    result.innerHTML='正解'
    score +=1
    answers.value = '';
  }else {
    result.innerHTML='不正解'
    answers.value = '';
  }if (counter ===9) {//counterとnglishWord.length -1にすれば、一緒になった時下記の処理になる
    result2.innerHTML += 10 + "問中"+score+"問正解"
    clearInterval(up)
    Time.innerHTML= 'タイム:'+Timer+'秒'
    const header = document.createElement('button')
    header.innerText = 'OneTry'
    header.onclick = OneTry;  // ボタンが押されたらリセット関数を呼びます
    onetry.appendChild(header)
    answers.value = '';
    end = true
  }else{
    counter +=1
    set();
  }
}

//エンターを押しても正解不正解を表示する
answer.onkeydown = event => {
  if (event.key === 'Enter') {
    enter.onclick();
  }
}

function set(){//次の問題に行く
order.innerHTML="【第" +(counter+1)+"問】";
const index = Math.floor( Math.random() * EnglishWord.length ); // 乱数で求めた要素番号を使い回します
word.innerHTML = EnglishWord[ index ];  // この問題と...
correct        = EnglishAnswer[ index ];// 同じ要素番号にある答えをメモ
}

function timer(){//タイマー関数
Timer +=1
}

function OneTry(){//リセット関数
  location.reload()
}
