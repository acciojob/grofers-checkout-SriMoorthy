let Price = document.querySelectorAll('.price'),sumVal = 0;

const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  //Add your code here
      for(let i = 0 ; i < Price.length ; i++){
         sumVal+= parseInt(Price[i].innerHTML)
       }
       return sumVal
  };

  let table = document.getElementById('grocery')
  let tablerow = document.createElement('tr')
  let tablecell = document.createElement('td')
  tablecell.setAttribute('colspan', '2')
  tablecell.textContent = `Total Price ${getSum()}`

  tablerow.appendChild(tablecell)
  table.appendChild(tablerow)

  getSumBtn.addEventListener("click", getSum);

