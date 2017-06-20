var currentTime = new Date();
console.log("Hokay we running at " + currentTime + "!");

var calcForm = document.forms["depreciation"];
var salvage = 0;
var depreciationTime = 0;

function calcDepreciationTime () {
    var lossDate = new Date(calcForm.elements["loss-date"].value);
    var purchaseDate = new Date(calcForm.elements["purchase-date"].value);
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

function calcSalvage() {
    var depreciation = 0;
    var cost = calcForm.elements["original-cost"].value;
    var depreciationRateInput = calcForm.elements["depreciation-rate"].value;
    var depreciationRate = depreciationRateInput / 100;
    var runningCost = cost;
    var depreciationTime = calcDepreciationTime();
    for (var i = 1; i < depreciationTime; i++) {
        depreciation = runningCost * depreciationRate;
        runningCost = runningCost - depreciation;
        }
    salvage = runningCost - depreciation;

    console.log("Salvage amount is $" + salvage.toFixed(2));
    var salvageValue = document.getElementById("salvage-value");
    salvageValue.innerHTML = (salvage.toFixed(2));
}

//calcDepreciationTime();

//calcSalvage(cost, depreciationRate, depreciationTime);

