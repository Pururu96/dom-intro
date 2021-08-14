// get a reference to the sms or call radio buttons
var billItemTypeWithSettingsElement = document.querySelector(".billItemTypeWithSettings")
// get references to all the settings fields
var callCostSettingElement = document.querySelector(".callCostSetting")
var smsCostSettingElement = document.querySelector(".smsCostSetting")
var warningLevelSettingElement = document.querySelector(".warningLevelSetting")
var criticalLevelSettingElement = document.querySelector(".criticalLevelSetting")
//get a reference to the add button
var buttonPrimaryElement = document.querySelector(".button-primary")
//get a reference to the 'Update settings' button
var updateSettingsBtn = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
var settingsFieldsElement = document.querySelector(".u-full-width")
// create a variables that will keep track of all three totals.
var callTotalSettingsElement = document.querySelector(".callTotalSettings")
var smsTotalSettingsElement = document.querySelector(".smsTotalSettings")
var totalSettingsElement = document.querySelector(".totalSettings")


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add nothing for invalid values that is not 'call' or 'sms'.
var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var criticalLevel = 0;

var callsTotal = 0;
var smsTotal = 0;
var overallTotal = 0;

function updateSettings() {
    callCost = Number(callCostSettingElement.value);
    smsCost = Number(smsCostSettingElement.value);
    warningLevel = warningLevelSettingElement.value;
    criticalLevel = criticalLevelSettingElement.value;
}
//add an event listener for when the 'Update settings' button is pressed
updateSettingsBtn.addEventListener('click', updateSettings);

function radioBillTotal() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        if (overallTotal<criticalLevel){
            var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
            if (billItemType === "call") {
            callsTotal += callCost;
        }
            else if (billItemType === "sms") {
            smsTotal += smsCost;
        }
    }

    //in the event listener check if the value in the bill type textbox is 'sms' or 'call'

    // * add the appropriate value to the call / sms total
    callTotalSettingsElement.innerHTML = callsTotal.toFixed(2);
    smsTotalSettingsElement.innerHTML = smsTotal.toFixed(2);
    // * add the appropriate value to the overall total

    // * display the latest total on the screen.
    var totalCost = callsTotal + smsTotal;
    totalSettingsElement.innerHTML = totalCost.toFixed(2);

    // * check the value thresholds and display the total value in the right color.
    if (totalCost >= warningLevel && totalCost < criticalLevel) {
        totalSettingsElement.classList.add("warning");
    }

    else if (totalCost >= 50) {
        totalSettingsElement.classList.add("danger");
    }
}}

//add an event listener for when the add button is pressed
buttonPrimaryElement.addEventListener('click', radioBillTotal);