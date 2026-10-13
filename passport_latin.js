// Таблица замены: русская буква -> латинские буквы
let letters = {
    "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ё": "e",
    "ж": "zh", "з": "z", "и": "i", "й": "i", "к": "k", "л": "l", "м": "m",
    "н": "n", "о": "o", "п": "p", "р": "r", "с": "s", "т": "t", "у": "u",
    "ф": "f", "х": "kh", "ц": "ts", "ч": "ch", "ш": "sh", "щ": "shch",
    "ъ": "ie", "ы": "y", "ь": "", "э": "e", "ю": "iu", "я": "ia"
};

// Функция переводит строку text в латиницу (буква за буквой)
function translit(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let letter = text[i];                 // текущая буква
        let small = letter.toLowerCase();     // та же буква, но маленькая

        if (letters[small] == undefined) {
            // это не русская буква (цифра, точка, пробел) - оставляем как есть
            result = result + letter;
        } else {
            let latin = letters[small];
            // если буква была большой - делаем первую латинскую букву большой
            if (letter != small) {
                latin = latin.charAt(0).toUpperCase() + latin.slice(1);
            }
            result = result + latin;
        }
    }
    return result;
}

// Находим нужные элементы по id
let surname = document.getElementById("surname");
let firstName = document.getElementById("name");
let patronymic = document.getElementById("patronymic");

// Запоминаем исходный текст, чтобы потом вернуть кириллицу
let surnameOriginal = surname.innerText;
let nameOriginal = firstName.innerText;
let patronymicOriginal = patronymic.innerText;

// Клик по кнопке "Перевести на латиницу"
function toLatin() {
    surname.innerText = translit(surnameOriginal);
    firstName.innerText = translit(nameOriginal);
    patronymic.innerText = translit(patronymicOriginal);
}

// Клик по кнопке "Вернуть кириллицу"
function toCyrillic() {
    surname.innerText = surnameOriginal;
    firstName.innerText = nameOriginal;
    patronymic.innerText = patronymicOriginal;
}
