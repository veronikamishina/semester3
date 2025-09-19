document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('themeSwitcher');
    const body = document.body;
    const form = document.getElementById('dataForm');
    const output = document.getElementById('output');
    
    // Проверяю, есть ли сохранённая тема в localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeSwitcher.textContent = 'Дневной режим';
    }
    
    // Обработчик переключения темы
    themeSwitcher.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            themeSwitcher.textContent = 'Дневной режим';
            localStorage.setItem('theme', 'dark');
        } else {
            themeSwitcher.textContent = 'Ночной режим';
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Обработчик отправки формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получаю значения из формы
        const lastName = document.getElementById('lastName').value;
        const firstName = document.getElementById('firstName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        
        // Заполняю блок с результатами
        document.getElementById('outputLastName').textContent = lastName;
        document.getElementById('outputFirstName').textContent = firstName;
        document.getElementById('outputEmail').textContent = email;
        document.getElementById('outputPhone').textContent = phone;
        
        // Показываю блок с результатами
        output.style.display = 'block';
        
        // Очищаю форму
        form.reset();
    });
});