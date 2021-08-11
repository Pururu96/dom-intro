//get a reference to the calculate button
const calculateBtnElement = document.querySelector(".calculateBtn")
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal")
//get a reference to the billString
const billStringElement = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
function calculateBtnClicked() {
    // logic goes here
    var callsAndSmsString = billStringElement.value;
    var callsAndSmss = callsAndSmsString.split(',');
    //a variable for the total phonebill
    let billTotal = 0;
    //Loop over each item
    for (var i = 0; i < callsAndSmss.length; i++) {
        const currentCallOrSms = callsAndSmss[i].trim();
        if (currentCallOrSms.includes('call')) {
            billTotal += 2.75;
        }
        else if (currentCallOrSms.includes('sms')) {
            billTotal += 0.65;
        }
        return 'R' + total.toFixed(2); 
    }
}
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
