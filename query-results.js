function click() {
    var clickButton = document.getElementsByTagName("button");
    clickButton[0].onclick = function() {
        grade();
        return false;
    }
}

function grade() {
    var score = prompt("请输入您的分数：");
    while (!(score <= 100 && score >= 0)) {
        alert("输入错误，请输入0-100之间的数值");
        score = prompt("请输入您的分数：");
    }
    switch (true) {
        case score >= 90 && score <= 100:
            document.getElementById("message").innerHTML = "恭喜！你的成绩等级是：一等生";
            break;
        case score >= 80 && score < 90:
            document.getElementById("message").innerHTML = "恭喜！你的成绩等级是：二等生";
            break;
        case score >= 70 && score < 80:
            document.getElementById("message").innerHTML = "恭喜！你的成绩等级是：三等生";
            break;
        case score >= 60 && score < 70:
            document.getElementById("message").innerHTML = "恭喜！你的成绩等级是：四等生";
            break;
        case score >= 50 && score < 60:
            document.getElementById("message").innerHTML = "要加油噢！你的成绩等级是：五等生";
            break;
        case score >= 40 && score < 50:
            document.getElementById("message").innerHTML = "要加油噢！你的成绩等级是：六等生";
            break;
        case score >= 30 && score < 40:
            document.getElementById("message").innerHTML = "要加油噢！你的成绩等级是：七等生";
            break;
        case score >= 20 && score < 30:
            document.getElementById("message").innerHTML = "要加油噢！你的成绩等级是：八等生";
            break;
        case score >= 10 && score < 20:
            document.getElementById("message").innerHTML = "要加油噢！你的成绩等级是：九等生";
            break;
        case score >= 0 && score < 10:
            document.getElementById("message").innerHTML = "要加油噢！你的成绩等级是：十等生";
            break;
        default:
            alert("输入错误,请输入0-100之间的数值");
    }
}

window.onload = click;
