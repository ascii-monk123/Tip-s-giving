const calculateModule = (function() {
  return {
    calculateTip: function(bill, tip, number) {
      bill = bill;
      tip = tip;
      number = number;
      let tipCalc = (bill + (tip * bill) / 100) / number;
      return tipCalc.toFixed(2);
    }
  };
})();

const uiModule = (function() {
  let DomStrings = {
    amount: 'bill__amount',
    per: 'tip__percentage',
    num: 'customer__number',
    billArea: '.display__text'
  };
  return {
    getDomStrings: function() {
      return DomStrings;
    },
    displayData: function(eachBill) {
      document.querySelector(
        DomStrings.billArea
      ).innerHTML = `Bill to be shared by each member is $${eachBill}`;
    }
  };
})();

const controllerModule = (function(calMod, uiMod) {
  //To get the input from the user
  let dom = uiMod.getDomStrings();
  //Setting up the button click event listener

  const getData = function() {
    var bill = parseInt(document.getElementById(dom.amount).value, 10);
    var tip = parseInt(document.getElementById(dom.per).value, 10);
    var number = parseInt(document.getElementById(dom.num).value, 10);
    if (
      bill < 5 ||
      number < 1 ||
      tip === undefined ||
      number === undefined ||
      bill === undefined ||
      number > 30
    ) {
      if (number > 30) {
        alert(
          `Sorry but we can't have a party of more than 30 in our restaurant`
        );
      } else {
        alert('Invalid input');
      }
    } else {
      var eachBill = calMod.calculateTip(bill, tip, number);
      //To display the data
      uiMod.displayData(eachBill);
    }
  };

  document.querySelector('.submit__button').addEventListener('click', getData);

  //Calculating the bill function
})(calculateModule, uiModule);
