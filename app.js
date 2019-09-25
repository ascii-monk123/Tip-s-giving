const calculateModule = (function () {

  return {
    calculateTip: function (bill, tip, number) {
      return (bill + (tip * bill / 100) / number).toFixed(5);

    }
  }




})();


const uiModule = (function () {
  let DomStrings = {
    amount: 'bill__amount',
    per: 'tip__percentage',
    num: 'customer__number'
  }
  return {
    getDomStrings: function () {
      return DomStrings;
    }
  }



})();


const controllerModule = (function (calMod, uiMod) {
  //To get the input from the user
  let dom = uiMod.getDomStrings();
  //Setting up the button click event listener

  const getData = function () {
    var bill = document.getElementById(dom.amount).value;
    var tip = document.getElementById(dom.per).value;
    var number = document.getElementById(dom.num).value;

  }

  document.querySelector('.submit__button').addEventListener('click', getData);

  //Calculating the bill function




})(calculateModule, uiModule);