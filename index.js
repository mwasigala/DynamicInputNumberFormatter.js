/*
**********************************************************
* DynamicInputNumberFormatter.js | https://github.com/mwasigala/DynamicInputNumberFormatter.js
* 
* Version:		v1.0.3
* Author:		Caroline Saimon Mwasigala
* Release:		September 20 2021
* 
* Reqs:			input field type must be text
* 				
* 
* 
* Usage:		formatInputNumber(id) //for one input
*               formatInputNumber(id1,1d2) // for more than one formatInputNumber
*               
**********************************************************
*/

function formatInputNumber(...ids){
    ids.forEach(id=>{
        const input = document.getElementById(id);

        input.addEventListener('input', formatInputValue);         
        
        function formatInputValue(event) {
            let valueToFormat=event.target.value;
            const formatedValue = valueToFormat
            .replace(/[^.\d]/g, '')
            .replace(/^[+-]?\d+/, (int)=> {
            return int.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
            });
            
            
            let caretPosStart = input.selectionStart;
            let caretPosEnd = input.selectionEnd;
            const initialLength=input.value.length;
            
            
            document.getElementById(id).value=formatedValue;
            const lastLength=input.value.length;
            if(initialLength==lastLength){
                input.setSelectionRange(caretPosStart,caretPosEnd);
            }else{
            
            input.setSelectionRange(caretPosStart+1,caretPosEnd+1);
            }
        
        }
    })
   
}

// module.exports.formatInputNumber = formatInputNumber;