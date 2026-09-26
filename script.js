const input = document.getElementById('inputBox');
const button = document.querySelectorAll('button');

let str = '';
for(i=0; i < button.length; i++){
    let buttonsElement = button?.[i];
    buttonsElement.addEventListener('click', (e)=>{
        
        
        let innerHTML = e.target.innerHTML;
        if(innerHTML === 'AC'){
            str = '';
        }else if(innerHTML === 'DEL'){
            str = str.substring(0, str.length-1);    
        }else if(innerHTML === '='){
            str = eval(str);   
        }else{
            str += e.target.innerHTML;
        }
        input.value = str;
    });
}