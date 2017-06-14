var currentTime = new Date();
console.log("Hokay we running at " + currentTime + "!");

//pick up the inputs from the page

function getPurchaseDate () {
    var calcForm = document.forms["depreciation"];
    var purchaseDateInput = calcForm.elements["purchase-date"];
    var purchaseDate = new Date();
    if (purchaseDateInput.value != "") {
        purchaseDate = Date(purchaseDateInput);
    }
    return purchaseDate;
}

//var purchaseDate = new Date();


var theftDate = new Date(2017,4,28);
var cost = 1650;
var depreciationRate = 0.15;
var salvage = 0;
var depreciationTime = 0;

function calcDepreciationTime (purchaseDate, theftDate) {
    var ynew = theftDate.getFullYear();
    var mnew = theftDate.getMonth();
    var dnew = theftDate.getDate();
    var yold = getPurchaseDate().getFullYear();
    var mold = getPurchaseDate().getMonth();
    var dold = getPurchaseDate().getDate();
    depreciationTime = ynew - yold;
    if (mold > mnew) depreciationTime--;
    else {
        if (mold == mnew) {
            if (dold > dnew) depreciationTime--;
        }
    }    
    console.log("Depreciation time is " + depreciationTime);
    return depreciationTime;
}

function calcSalvage(cost, depreciationRate, depreciationTime) {
    var depreciation = 0;
    var runningCost = cost - depreciation;
    for (var i = 1; i < depreciationTime; i++) {
        depreciation = runningCost * depreciationRate;
        runningCost = runningCost - depreciation;
        salvage = runningCost - depreciation;
    }
    console.log("Salvage amount is $" + salvage.toFixed(2));
    return salvage;
}

//calcDepreciationTime(purchaseDate, theftDate);

calcSalvage(cost, depreciationRate, depreciationTime);

