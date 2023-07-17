function sub() {
    var a =  document.getElementById("inp1").value;
    var b = document.getElementById("inp2").value;
    var sub = Number(a) - Number(b);
    document.getElementById("output").value = sub;
}

function add() {
    var s =  document.getElementById("inp3").value;
    var t = document.getElementById("inp4").value;
    var plus = Number(s) + Number(t);
    document.getElementById("out").value = plus;
}

function divide() {
    var u =  document.getElementById("inp5").value;
    var v = document.getElementById("inp6").value;
    var divide = Number(u) / Number(v);
    document.getElementById("outp").value = divide;
}

function modulos() {
    var y =  document.getElementById("inp7").value;
    var z = document.getElementById("inp8").value;
    var remainder = Number(y) % Number(z);
    document.getElementById("outpt").value = remainder;
}