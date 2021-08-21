let enter = document.getElementById('enter')
let answer = document.getElementById('answer')
let resultDivided = document.getElementById('result-area')
let commentary = document.getElementById("commentary")

//答え合わせが押された時の処理
answer.onclick = function(){
 const Enter = enter.value;
 if (Enter === "") {
     return;
 }

    if (Enter ==="黒い男") {
        resultDivided.innerText = "正解です"
        commentary.innerText = "解説？:帰る途中にすれ違った男が警官に化けて、主人公の息子を狙ったのです。"
    }else if (Enter === "警官") {
        resultDivided.innerText = "正解です"
        commentary.innerText = "解説？:帰る途中にすれ違った男が警官に化けて、主人公の息子を狙ったのです。"
    }else if (Enter === "警官が息子のことについて聞いてきた") {
        resultDivided.innerText = "正解です"
        commentary.innerText = "解説？:帰る途中にすれ違った男が警官に化けて、主人公の息子を狙ったのです。"
    }else if (Enter === "警察") {
        resultDivided.innerText = "正解です"
        commentary.innerText = "解説？:帰る途中にすれ違った男が警官に化けて、主人公の息子を狙ったのです。"
    }else if (Enter === "警察のものです") {
        resultDivided.innerText = "正解です"
        commentary.innerText = "解説？:帰る途中にすれ違った男が警官に化けて、主人公の息子を狙ったのです。"
    }else{
        resultDivided.innerText = "不正解です"
        commentary.innerText = "ヒント:主人公が男とすれ違った後、なぜ、都合よく警官が来たのだろう？"
    }

 
}
