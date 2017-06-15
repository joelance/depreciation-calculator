var currentTime = new Date();
console.log("Hokay we running at " + currentTime + "!");

/*function getPurchaseDate () {
    var calcForm = document.forms["depreciation"];
    var purchaseDateInput = calcForm.elements["purchase-date"];
    var purchaseDate = new Date();
    if (purchaseDateInput.value != "") {
        purchaseDate = Date(purchaseDateInput);
    }
    return purchaseDate;
}*/

//pick up the inputs from the page

var purchaseDate = function () {
    var calcForm = document.forms["depreciation"];
    var purchaseDateInput = calcForm.elements["purchase-date"];
    var purchaseDate = new Date();
    if (purchaseDateInput.value != "") {
        purchaseDate = purchaseDateInput.value;
    }
};


var lossDate = function () {
    var calcForm = document.forms["depreciation"];
    var lossDateInput = calcForm.elements["loss-date"];
    var lossDate = new Date();
    if (lossDateInput.value != "") {
        lossDate = lossDateInput.value;
    }
};

var cost = 1650;
var depreciationRate = 0.15;
var salvage = 0;
var depreciationTime = 0;

function calcDepreciationTime (purchaseDate, lossDate) {
    var ynew = lossDate.getFullYear();
    var mnew = lossDate.getMonth();
    var dnew = lossDate.getDate();
    var yold = purchaseDate.getFullYear();
    var mold = purchaseDate.getMonth();
    var dold = purchaseDate.getDate();
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

calcDepreciationTime();

calcSalvage(cost, depreciationRate, depreciationTime);

