var phrase1, phrase2;

    /*
    * Получение данных и их валидация
    *
    * Преобразует данные из строки в массив и проверяет на правильность
    *
    *@локальные переменные arr, p
    */
function getDataUser() {
    phrase1 = "Выполняются свойства: "
    phrase2 = "Не выполняются свойства: "
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
    reflex(arr);
    simm(arr);
    kosossimm(arr);
    tranz(arr);
    document.getElementById("result").innerHTML = phrase1 + "<br/>";
    document.getElementById("result").innerHTML += phrase2;
}

    /*
        *проверка на соответствие типа
        *
        *проверка каждого символа на соответствие
        *
        *@лобальные переменные res, str
        *@param array
        *return res
    */
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
                str += "Ошибка в элементе " + i + j + "\n";
            }
        }
    }
    
    if (!res) alert(str);
    return res;
}

    /*
        *свойство рефлексивности
        *
        *проверка на наличие единиц на главной диагонали
        *
        *@лобальные переменные check
        *@param array
        *return phrase1, phrase 2
    */
function reflex(array) {
    var check = false;
    for (var i = 0; i < 4; i++) {
        if(array[i][i] != "1") check = true;

    }
    if (!check) return phrase1 += "рефлексивность ";
    return phrase2 += "рефлексивность "
}

    /*
        *свойство симметричности
        *
        *проверка на то, что элементы, симметричные относительно главной диагонали, равны
        *
        *@param array
        *return phrase1, phrase 2
    */
function simm(array) {
   for (var j = 0; j < 4; j++) {
        for (var i = 0; i < 4; i++) {
            if(array[j][i] != array[i][j]) {
                return phrase2 += "симметричность "
            }
        }
    }
    return phrase1 += "симметричность ";
}

    /*
        *свойство кососимметричности
        *
        *проверка на то, что элементы, симметричные главной диагонали – не равны единицам и не лежат на главной диагонали
        *
        *@param array
        *return phrase1, phrase 2
    */
function kosossimm(array) {
    for (var j = 0; j < 4; j++) {
        for (var i = 0; i < 4; i++) {
            if (j != i) {
                if(array[j][i] == "1" && array[i][j] == "1") {
                    return phrase2 += "кососимметричность "

                }
            }
        }
    }
    return phrase1 += "кососимметричность ";
}

    /*
        *свойство транзитивности
        *
        *проверка на то, что квадрат заданной матрицы идентичен самой матрице
        *
        *@лобальные переменные array_2
        *@param array
        *return phrase1, phrase 2
    */
function tranz(array) {
    var array_2 = [];
    for ( var i = 0; i < 4; i++) {
        array_2[i] = [];
        for ( var j = 0; j < 4; j++) {
            array_2[i][j] = "0";
        }
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            for (var k = 0; k < 4; k++) {
                if ((array[i][k] == "1") && (array[k][j] == "1")) {
                    array_2[i][j] = "1";
                    break;
                }
                array_2[i][j] = "0";
                
            }
        }
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if ((array_2[i][j] == "1") && (array[i][j] == "0")) {
                    return phrase2 += "транзитивность"
                }
        }
    }
    return phrase1 += "транзитивность";
}

