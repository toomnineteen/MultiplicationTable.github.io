let inNubmer = document.getElementById('input_Number')
let runButton = document.getElementById('run_Result')
let outPut = document.getElementById('out_Put')

function showResult() {
    let number = Number(inNubmer.value);
    let outputHTML = '';

    //if(number === 0){outPut.outerHTML = 'Sorry Result is 0'return;}

    for (let i=1; i<=12; i++) {
        outputHTML += '<p>';
        outputHTML += `${number} x ${i} = ${number*i}`
        outputHTML += '</p>';
    }
    outPut.innerHTML = outputHTML;
}
runButton.addEventListener('click' , showResult);