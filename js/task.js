let check = false;   // true - если задача решена и данные можно отправлять

function verify() {
    // берём значения из полей и превращаем текст в дробные числа
    let x = parseFloat(document.getElementById("x").value);
    let y = parseFloat(document.getElementById("y").value);
    let z = parseFloat(document.getElementById("z").value);
    console.log(x, y, z);

    let result;
    let eps = 0.000001;   // допустимая погрешность

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        result = "Ошибка: введите все три числа";
        check = false;
    } else if (x <= 0 || y <= 0 || z <= 0) {
        result = "Треугольник не существует: стороны должны быть больше нуля";
        check = true;
    } else if (x + y > z && x + z > y && y + z > x) {
        // треугольник существует - проверяем, прямоугольный ли он
        if (Math.abs(x * x + y * y - z * z) < eps ||
            Math.abs(x * x + z * z - y * y) < eps ||
            Math.abs(y * y + z * z - x * x) < eps) {
            result = "Треугольник существует и он прямоугольный";
        } else {
            result = "Треугольник существует, но он не прямоугольный";
        }
        check = true;
    } else {
        result = "Треугольник не существует: одна сторона не меньше суммы двух других";
        check = true;
    }

    document.getElementById("result").value = result;
}

function send() {
    verify();   // ещё раз решаем задачу, чтобы отправить актуальный результат
    if (check) {
        document.getElementById("taskForm").submit();
    } else {
        alert("Есть ошибки в данных. Повторите ввод");
    }
}
