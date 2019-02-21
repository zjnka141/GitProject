
function add() {
    var in1 = parseFloat(document.getElementById("input1").value);
    var in2 = parseFloat(document.getElementById("input2").value);
    var result = in1 + in2;
    document.getElementById("result").innerHTML = result;
}
function sub() {
    var in1 = parseFloat(document.getElementById("input1").value);
    var in2 = parseFloat(document.getElementById("input2").value);
    var result = in1 - in2;
    document.getElementById("result").innerHTML = result;
}
function multi() {
    var in1 = parseFloat(document.getElementById("input1").value);
    var in2 = parseFloat(document.getElementById("input2").value);
    var result = in1 * in2;
    document.getElementById("result").innerHTML = result;
}
function divide() {
    var in1 = parseFloat(document.getElementById("input1").value);
    var in2 = parseFloat(document.getElementById("input2").value);
    if(in2==0){
        alert("Không thể thực hiện phép chia cho 0");
    }else{
    var result = in1 / in2;
    document.getElementById("result").innerHTML = result;
    }
}
