const lists = ["but0", "but1", "but2", "but3", "but4", "but5", "but6", "but7", "but8", "but9", "but10", "but11"];
const popu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const lists1 = ["but0", "but1", "but2", "but3", "but4", "but5", "but6", "but7", "but8", "but9", "but10", "but11"];
const popu1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
o = 3;
score = 0;
function run1() {
    let z = lists.length;
    age = Math.floor(Math.random() * z);
    document.getElementById(lists[age]).style.setProperty("display", "block");
    document.getElementById(lists[age]).style.setProperty("order", 1);
    x = lists[age];
    lists.splice(age, 1);
    popu.splice(age, 1);

    z = lists.length;
    age = Math.floor(Math.random() * z);
    //console.log(age);
    document.getElementById(lists[age]).style.setProperty("display", "block");
    document.getElementById(lists[age]).style.setProperty("order", 2);
    y = lists[age];
    lists.splice(age, 1);
    popu.splice(age, 1);
    document.getElementById("start").style.setProperty("display", "none");
    document.getElementById("intro").style.setProperty("display", "none");
    document.getElementById("button-start").click();
}

function run() {
    o += 1;
    //console.log(y);
    let z = lists.length;
    age = Math.floor(Math.random() * z);
    // let x = "but"+(age).toString();
    //console.log(age);

    document.getElementById(x).style.setProperty("display", "none");
    x = y;
    y = lists[age];
    document.getElementById(y).style.setProperty("display", "block");
    document.getElementById(y).style.setProperty("order", o);

    lists.splice(age, 1);
    popu.splice(age, 1);
    //console.log(lists);
}

function sel(c) {
    if (lists.length >= 1) {
        a = lists1.indexOf(x);
        b = lists1.indexOf(y);
        console.log(Math.min(popu1[a], popu1[b]));
        if (c == lists1[popu1.indexOf(Math.min(popu1[b], popu1[a]))]) {
            document.getElementById("button-stop").click();
            ccc = parseInt(document.getElementById("seconds").innerHTML);
            if (ccc <= 25) {
                score += 25 - ccc;
            }

            document.getElementById("button-reset").click();
            document.getElementById("button-start").click();
            console.log("1 Crore");
            score += 4;
            document.getElementById("updateit").innerHTML = score;
            run();
        } else {
            document.getElementById("changeit").innerHTML = score;
            finish();
        }
    } else {
        document.getElementById("changeit").innerHTML = score;
        document.getElementById("finished").innerHTML = "YOU GOT ALL CORRECT , MAYBE YOU GOT THE CHEATSHEET";
        finish();
    }
}
function finish() {
    console.log("Khatam");
    if (parseInt(document.getElementById("updateit").innerHTML) == 0) {
        document.getElementById("perc").innerHTML = 0;
    } else if (parseInt(document.getElementById("updateit").innerHTML) <= 50) {
        zzz = Math.random() * 20;
        document.getElementById("perc").innerHTML = zzz;
    } else if (parseInt(document.getElementById("updateit").innerHTML) <= 150) {
        zzz = Math.random() * 50;
        document.getElementById("perc").innerHTML = zzz;
    } else if (parseInt(document.getElementById("updateit").innerHTML) <= 250) {
        zzz = Math.random() * 80;
        document.getElementById("perc").innerHTML = zzz;
    } else {
        zzz = Math.random() * 100;
        document.getElementById("perc").innerHTML = zzz;
    }
    document.getElementById(x).style.setProperty("display", "none");
    document.getElementById(y).style.setProperty("display", "none");
    document.getElementById("outro").style.setProperty("display", "block");
    document.getElementById("restart").style.setProperty("display", "block");
    document.getElementById("button-reset").click();
}

window.onload = function () {
    var seconds = 0;
    var tens = 0;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    buttonStop.onclick = function () {
        clearInterval(Interval);
    };

    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    };

    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
};
