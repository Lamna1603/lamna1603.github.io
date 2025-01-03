const  code_input=document.querySelector("#code-input");
const joinBtn=document.querySelector("#joinBtn");
const valInput=document.querySelector("#val-input");

//
joinBtn.addEventListener("click",
    function(){
        const val=code_input.value.toLocaleUpperCase();
        if(val=='ABCXYZ'){
            alert('success');
            return;
        }
        alert('check your input code again');
    }
);

code_input.addEventListener("input",
    function(){
        const lookback=code_input.value.toLocaleUpperCase();
        console.log(lookback);
        valInput.innerText=lookback;
    }
);