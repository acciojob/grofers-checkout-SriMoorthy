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

  let table = document.getElementById('ans')
  let tablerow = document.createElement('tr')
  let tablecell = document.createElement('td')
  tablecell.setAttribute('colspan', '2')
  tablecell.textContent = `Total Price ${getSum()}`

  tablerow.appendChild(tablecell)
  table.appendChild(tablerow)

  getSumBtn.addEventListener("click", getSum);


() => {
  cy.visit("http://localhost:3000/");
  
  // Ensure the price elements are editable and set their values
  cy.get(".price").each(($el, index) => {
    cy.wrap($el).invoke("attr", "contenteditable", "true");
    switch (index) {
      case 0:
        cy.wrap($el).clear().type("20");
        break;
      case 1:
        cy.wrap($el).clear().type("33");
        break;
      case 2:
        cy.wrap($el).clear().type("0");
        break;
      case 3:
        cy.wrap($el).clear().type("70");
        break;
      case 4:
        cy.wrap($el).clear().type("210");
        break;
    }
  });

  // Click the button to trigger the total price calculation
  cy.get("button").click();

  // Wait for the result to be calculated and displayed
  cy.get("#ans", { timeout: 10000 }).should("contain", "333");
}

