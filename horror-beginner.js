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

    if (Enter ==="普段吠えない犬が勢いよく父に向かって吠え出した") {
        resultDivided.innerText = "正解です"
        commentary.innerText = "解説？:祖母を殺した犯人は父親。父は昔から祖母に何かしらの恨みを持っていたのかもしれない"
    }else if (Enter === "吠えた") {
        resultDivided.innerText = "正解です"
        commentary.innerText = "解説？:祖母を殺した犯人は父親。父は昔から祖母に何かしらの恨みを持っていたのかもしれない"
    }else if (Enter === "父に向かって吠え出した") {
        resultDivided.innerText = "正解です"
        commentary.innerText = "解説？:祖母を殺した犯人は父親。父は昔から祖母に何かしらの恨みを持っていたのかもしれない"
    }else if (Enter === "吠え出した") {
        resultDivided.innerText = "正解です"
        commentary.innerText = "解説？:祖母を殺した犯人は父親。父は昔から祖母に何かしらの恨みを持っていたのかもしれない"
    }else{
        resultDivided.innerText = "不正解です"
        commentary.innerText = "ヒント:なぜ、父に向かって吠えだしたほだろう？"
    }

 
}
