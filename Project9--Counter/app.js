let count = 0;

const cValue = document.getElementById("value");
const btns   = document.querySelectorAll(".btn");

// console.log(btns);

btns.forEach(function (val) {
    val.addEventListener("click",function(e) {
        const btnClass = e.currentTarget.classList;
        
    if(btnClass.contains("decrease")){
            count--;
     }
     else if(btnClass.contains("increase")){
         count++
     }
     else{
         count = 0;
     }
     cValue.textContent = count;
});
});