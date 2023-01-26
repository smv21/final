let radioButtons = document.getElementsByName('report');
let reportTitle = document.querySelector('.report-title');

for(let i = 0; i < 2; i++) {
    radioButtons[i].onchange = () => {
        if(radioButtons[i].checked && i == 1) {
            reportTitle.classList.remove('hidden');
        }
        else {
            reportTitle.classList.add('hidden');
        }
    }
}