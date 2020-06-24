var phrase1 = "Выполняются свойства: "
var phrase2 = "Не выполняются свойства: "

function getDataUser() {
    
    var arr = [];
    for ( var i = 0; i < 4; i++) {
        arr[i] = [];
    }
    
    for (var i = 0; i < 4; i++){
        for (var j = 0; j < 4; j++) {
            var p = ""+ i + j; 
            arr[i][j] = document.getElementById(p).value;
        }
    }
    if (!validate(arr)) return;
    document.getElementById("result").innerHTML = reflex(arr);
    document.getElementById("result").innerHTML += simm(arr);
}

function validate(array) {
    var res = true;
    var str = "";
    
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (array[i][j] == "") return alert("Введены не все элементы");
            else if (array[i][j] < "0" ||
                array[i][j] > "1" ||
                array[i][j].length != 1
            ) {
                res = false;
                str += "Ошибка в элементе " + i+j + "\n";
            }
        }
    }
    
    if (!res) alert(str);
    return res;
}

function reflex(array) {
    var check = false;
    for (var i = 0; i < 4; i++) {
        if(array[i][i] != 1) check = true;

    }
    if (!check) return phrase1 + "рефлексивность";
    return phrase2 + "рефлексивность"
}

function simm(array) {
    for (var j = 0; j < 4; j++) {
        for (var i = 0; i < 4; i++) {
            if(array[j][i] != array[i][j]) {
                return phrase2 += "симметричность"
            }
        }
    }
    return phrase1 += "симметричность";
}

function kosossimm(array) {
    
}

function tranz(array) {
    
}

