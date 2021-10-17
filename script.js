let input = document.querySelector('input');
let text = document.querySelector('.text');
let charCode = document.querySelector('.num');
let trText = document.querySelector('.tr_text');

input.addEventListener('keypress', function (e) {
    text.innerText = 'Key pressed:' + String.fromCharCode(e.charCode);
    charCode.innerText = 'charCode:' + e.charCode;
    
    alphabet.forEach((letter) =>{

        if(letter.id == e.charCode){
           trText.innerText +=  letter.letter
        }else{
            String.fromCharCode(e.charCode)
        }
    })
});

console.log(alphabet)
