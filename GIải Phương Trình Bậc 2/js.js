function start() {
    var a = parseInt(document.getElementById("inputa").value);
    var b = parseInt(document.getElementById("inputb").value);
    var c = parseInt(document.getElementById("inputc").value);
    var delta = b ** 2 - 4 * a * c;

    if (delta == 0) {
        var x = -b / 2 * a;
        document.getElementById("main-answer").innerHTML = ("phương trình có 1 nghiệm kép: " + x);
    } else {
        if (delta < 0) {
            document.getElementById("main-answer").innerHTML = ":(( phương trình vô nghiệm ";
        } else {
            if (delta > 0) {
                var x1 = (-b - Math.sqrt(delta)) / 2 * a;
                var x2 = (-b + Math.sqrt(delta)) / 2 * a;
                document.getElementById("main-answer").innerHTML = ("phương trình có 2 nghiệm: " + "X1= " + x1 + " X2= " + x2);
            }
        }

    }
}

function restart() {
    document.getElementById("inputa").value = "";
    document.getElementById("inputb").value = "";
    document.getElementById("inputc").value = "";
    document.getElementById("main-answer").innerHTML = "Hãy Nhập Giá Trị Ở Khung Bên Trái!!";
}