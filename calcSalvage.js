var purchaseDate = new Date(2012,3,14);
var theftDate = new Date(2017,4,28);
var cost = 1311.72;
var depreciationRate = 0.15;
var salvage = 0;
var depreciationTime = 0;

function calcDepreciationTime (purchaseDate, theftDate) {
    var ynew = theftDate.getFullYear();
    var mnew = theftDate.getMonth();
    var dnew = theftDate.getDate();
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
    for (var i = 1; i <= depreciationTime; i++) {
        depreciation = runningCost * depreciationRate;
        runningCost = runningCost - depreciation;
        salvage = runningCost - depreciation;
    }
    console.log("Salvage amount is $" + salvage.toFixed(2));
    console.log("Depreciation is $" + depreciation.toFixed(2));
    return salvage;
}

calcDepreciationTime(purchaseDate, theftDate);

calcSalvage(cost, depreciationRate, depreciationTime);


