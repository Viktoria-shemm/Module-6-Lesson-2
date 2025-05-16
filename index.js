// Создайте страницу index.html
// из JavaScript создайте поле ввода input и параграф
// Введённый в поле текст должен отображаться внутри параграфа, но с задержкой в 300 мс.
// Результат
// По ходу ввода текста содержимое в параграфе не изменяется.
// Содержимое обновляется через 300 мс после завершения ввода.

const input = document.createElement("input");
const p = document.createElement("p");

document.body.append(input);
document.body.append(p);

input.addEventListener("change", () => {
  const inputValue = input.value;
  setTimeout(() => {
    p.textContent = inputValue;
  }, 300);
});
