function setValue(a){
    var mydiv = document.getElementById("hienthi");
    mydiv.appendChild(document.createTextNode(a));
}
function calculate(){
    var mydiv = document.getElementById("hienthi").innerHTML;
    var result=eval(mydiv);
    document.getElementById("hienthi").innerHTML=result;
}
function clearHienthi(){
    document.getElementById("hienthi").innerHTML="";
}