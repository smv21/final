let buttonCheckAnswers = document.querySelector('.send-button');
let resultsBlock = document.querySelector('.results')

let correctAnswersCount = 0;
let incorrectAnswers = [];

let input_q1 = document.getElementById('q1');
let radiobutton_q2 = document.getElementById('q2');
let select_q3 = document.getElementById('q3');
let checkboxes_q4 = document.querySelectorAll('input[type=checkbox]');
let number_q5 = document.getElementById('q5');
let date_q6 = document.getElementById('q6');

buttonCheckAnswers.addEventListener('click', () => {
    resultsBlock.classList.remove('hidden');

    if(input_q1.value.toLowerCase() == 'hypertext markup language') {
        correctAnswersCount++;
    } else {
        if(input_q1.value === '') {
            incorrectAnswers.push('Нет ответа');
        } else {
            incorrectAnswers.push(input_q1.value);
        }
    }

    if(radiobutton_q2.checked) {
        correctAnswersCount++;
    } else {
        incorrectAnswers.push('Да');
    }

    if(select_q3.value === 'var4') {
        correctAnswersCount++;
    } else {
        incorrectAnswers.push(select_q3.options[select_q3.selectedIndex].text);
    }

    let incorrectCheckboxes = [];
    if(checkboxes_q4[0].checked && checkboxes_q4[3].checked && !checkboxes_q4[1].checked && !checkboxes_q4[2].checked) {
        correctAnswersCount++;
    } else if(checkboxes_q4[1].checked || checkboxes_q4[2].checked) {
        if(checkboxes_q4[1].checked) {
            incorrectCheckboxes.push('div')
        }
        if(checkboxes_q4[2].checked) {
            incorrectCheckboxes.push('p')
        }
    }
    if(incorrectCheckboxes.length === 0) {
        incorrectCheckboxes.push('Нет ответа')
    }
    incorrectAnswers.push(incorrectCheckboxes.join(', '))

    if(number_q5.value == 1) {
        correctAnswersCount++;
    } else {
        incorrectAnswers.push(number_q5.value);
    }

    if(date_q6.value == '2014-10-28') {
        correctAnswersCount++;
    } else {
        incorrectAnswers.push(date_q6.value);
    }

    if(incorrectAnswers.length === 0) {
        incorrectAnswers.push('Неправильных ответов нет')
    }

    resultsBlock.innerHTML = `<p><b>Количество правильных ответов:</b> ${correctAnswersCount}</p><p><b>Неправильные ответы:</b> ${incorrectAnswers.join('; ')}</p>`;
    correctAnswersCount = 0;
    incorrectAnswers = [];
})