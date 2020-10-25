// Есть массив цветов в hex-формате и кнопки Start и Stop.

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector("[data-action=start]")
const stopBtn = document.querySelector("[data-action=stop]")
const body = document.querySelector("body")
let timer = null;

const changeColor = function(event) {
  timer = setInterval(() => {
    body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
  event.target.disabled = true;
}

const stopChangeColor = function() {
  clearInterval(timer)
  startBtn.disabled = false
}

startBtn.addEventListener("click", changeColor)
stopBtn.addEventListener("click", stopChangeColor)