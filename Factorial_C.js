function calculate() {
    var n = document.getElementById("inp1").value;
    if(n != ""){

        var i = n;
        var fa = 1;
        var result = "";
        while (i > 1) {
            fa = fa * i;
            i--;
            result += "*" + i;
        }
        
        document.getElementById("oup").innerHTML = "Factoriol Is : " + fa;
        document.getElementById("pros").innerHTML = "[ " + n + result + " ]";
    }else{
        document.getElementById("oup").innerHTML = "";
        document.getElementById("pros").innerHTML = "Enter Number...!";
    }
}