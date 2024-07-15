const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let Price = document.getElementsByClassName('price'), sumVal = 0;

const getSum = () => {
//Add your code here
   for(let i = 0 ; i < Price.length ; i++){
     sumVal+= parseInt(Price[i].innerHTML)
   }
   const display = document.createElement('input')
   display.append('Total')
   document.body.appendChild(display)
   display.value = sumVal
  
};


getSumBtn.addEventListener("click", getSum);

