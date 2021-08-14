// get a reference to the sms or call radio buttons
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio")
//get a reference to the add button
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn")
//var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
//create a variable that will keep track of the total bill
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");

var callsTotal = 0;
var smsTotal = 0;
//add an event listener for when the add button is pressed
function radioBillTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
        if (billItemType === "call"){
            callsTotal += 2.75;
        }
        else if (billItemType === "sms"){
            smsTotal += 0.75;
        }
    }
    //var billItemType = checkedRadioBtn.value
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'

// * add the appropriate value to the running total
callTotalTwoElement.innerHTML = callsTotal.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalTwoElement.innerHTML = totalCost.toFixed(2);
// * add nothing for invalid values that is not 'call' or 'sms'.
if (totalCost >= 50){

    totalTwoElement.classList.add("danger");
}

else if (totalCost >= 30 && totalCost < 50){
    totalTwoElement.classList.add("warning");
}
}
//add an event listener for when the add button is pressed
radioBillAddBtnElement.addEventListener('click', radioBillTotal);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
