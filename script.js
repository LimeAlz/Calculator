const button = document.querySelectorAll('.bo')
const output = document.querySelector('.output')
const clear = document.querySelector('.cl')
const cal = document.querySelector('.cal')

let check = 0;
function screen(){
    let stack = [];
for(let i=0;i<button.length;i++){
    button[i].addEventListener("click",()=>{
        let btnText = button[i].textContent;
        if(btnText == 'x'){
            btnText = '*';
        }
        else if(btnText == '÷'){
            btnText = '/';
        }
        
        else if(btnText =="()"){
            if(output.textContent.includes('(') && check == 1){
                btnText =")";
                check = 0;
            }
            else{
                btnText ="(";
                check = 1;
            }
        }
        else if(btnText == "+/-"){
            btnText = "(-";
            check = 1;
        }
        output.textContent +=  btnText;
    }
    )
}
}
function erase(){
    clear.addEventListener('click',()=>{
        output.textContent = "";
    })
}

function calculate(){
  cal.addEventListener('click',()=>{
    // let problem =  output.textContent;
    let result = eval(output.textContent);
    output.textContent = result;

  })
}
screen();
erase();
calculate();