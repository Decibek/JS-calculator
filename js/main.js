window.onload = function () {
    const buttons = document.querySelectorAll('.operand');
    buttons.forEach(button => button.addEventListener('click', operandHandler));
}

function operandHandler(event) {
    const A = document.getElementById('A').value;
    const B = document.getElementById('B').value;
    const operand = event.target.dataset.operand;
    const calc = new Calculator();
    
    // Получение результата операции
    const C = calc[operand](calc.getEntity(A), calc.getEntity(B));
    
    // Присвоение результата элементу с id 'C'
    document.getElementById('C').value = C.toString();
}

function backspc() {
    const screen = document.getElementById('C'); // Убедитесь, что screen ссылается на правильный элемент
    screen.value = screen.value.substr(0, screen.value.length - 1);
}