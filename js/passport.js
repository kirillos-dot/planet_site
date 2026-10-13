// Функция берёт данные из DOM (так же, как команды в консоли) и выводит их на страницу
function readFromDOM() {
    let surname = document.getElementsByTagName('p')[3].childNodes[1].innerText;
    let name = document.getElementsByTagName('p')[4].childNodes[1].innerText;
    let birthDate = document.getElementsByTagName('p')[7].childNodes[1].innerText;
    let year = birthDate.slice(-4);   // последние 4 символа даты - это год

    console.log(surname, name, year);
    document.getElementById("result").innerText =
        "Фамилия: " + surname + ", Имя: " + name + ", Год рождения: " + year;
}
