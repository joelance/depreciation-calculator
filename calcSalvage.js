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

var calcForm = document.forms["depreciation"];

var purchaseDate = new Date(calcForm.elements["purchase-date"].value);

var lossDate = new Date(calcForm.elements["loss-date"].value);

var cost = calcForm.elements["original-cost"].value;

var depreciationRate = calcForm.elements["depreciation-rate"].value;

// var salvage = 0;
// var depreciationTime = 0;


function calcDepreciationTime () {

    if (supportsTypeDate) {
    startDate = parseISODate(startDate);
    endDate = parseISODate(endDate);
  } else {
    startDate = parseDMY(startDate);
    endDate = parseDMY(endDate);
  }

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

function calcSalvage(cost, depreciationRate) {
    var depreciation = 0;
    var runningCost = cost - depreciation;
    var depreciationTime = calcDepreciationTime(purchaseDate, lossDate);
    for (var i = 1; i < depreciationTime; i++) {
        depreciation = runningCost * depreciationRate;
        runningCost = runningCost - depreciation;
        salvage = runningCost - depreciation;
    }
    console.log("Salvage amount is $" + salvage.toFixed(2));
    return salvage;
}

//calcDepreciationTime();

//calcSalvage(cost, depreciationRate, depreciationTime);

