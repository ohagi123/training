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

    if (Enter ==="幸福を呼ぶ人形") {
        resultDivided.innerText = "正解です"
        commentary.innerText = "解説？:幸福を呼ぶ人形は、幸福を呼ぶ人形ではなく、幸福を吸い取る人形だった。"
    }else if (Enter === "幸福") {
        resultDivided.innerText = "正解です"
        commentary.innerText = "解説？:幸福を呼ぶ人形は、幸福を呼ぶ人形ではなく、幸福を吸い取る人形だった。"
    }else if (Enter === "人形") {
        resultDivided.innerText = "正解です"
        commentary.innerText = "解説？:幸福を呼ぶ人形は、幸福を呼ぶ人形ではなく、幸福を吸い取る人形だった。"
    }else if (Enter === "気持ち悪い人形") {
        resultDivided.innerText = "正解です"
        commentary.innerText = "解説？:幸福を呼ぶ人形は、幸福を呼ぶ人形ではなく、幸福を吸い取る人形だった。"
    }else{
        resultDivided.innerText = "不正解です"
        commentary.innerText = "ヒント:なぜ、俺はいいことが連続で続いたんでしょうか？"
    }

 
}
