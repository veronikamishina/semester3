// Задание 1.1: Запросить у пользователя число, выведите в консоль: количество разрядов (цифр) в этом числе, первую цифру этого числа, сообщение об ошибке, если введеная пользователем информация не является числом.
function task1() {
let userInput = prompt("Пожалуйста, введите своё число");
if (userInput === null || userInput.trim() === "") {
    console.log("Ошибка: Вы не ввели значение");
    return task2(); // Перехожу к заданию 1.2
} else {
    // Поскольку пользователь может задать десятичную дробь через запятую, а не точку, заменю запятую на точку
    let normalizedInput = userInput.replace(',', '.');
    let number = Number(normalizedInput);
        if (isNaN(number)) {
        console.log("Ошибка: Введено не число");
    } else {
        // Для подсчета цифр убираем десятичный разделитель и знак минуса
        let cleanNumber = Math.abs(number).toString().replace('.', '');
        let digits = cleanNumber.length;
        let firstDigit = cleanNumber[0];
        console.log(`Введённое число: ${number}`);
        console.log(`Количество разрядов: ${digits}`);
        console.log(`Первая цифра: ${firstDigit}`);

        return task2(); // Перехожу к заданию 1.2
    }
}
}

// Вызов функции для выполнения
task1();

// Задание 1.2: Пользователь вводит строку. Вывести на консоль каждый воторой символ строки, начиная с последнего.
function task2() {
    let userString = prompt("Пожалуйста, введите свою строку");
    if (userString === null) {
        console.log("Ошибка: Вы не ввели строку");
    }
    
    let result = [];
    // Начинаю с последнего символа и иду назад через один
    for (let i = userString.length - 1; i >= 0; i -= 2) {
        result.push(userString[i]);
    }
    console.log("Исходная строка:", userString);
    console.log("Каждый второй символ с конца:", result.join(''));    
}