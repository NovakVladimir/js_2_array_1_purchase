
var arr = [];

function addPurchase() {
    // LET'S GET VALUE OF INPUT
    let nameProduct = document.getElementById("userProduct").value;
    if(nameProduct == 0) {
        alert("Please, enter the name of the product");
        return; 
    }

    let quantityProduct = Number(document.getElementById("userQuantity").value);
    if(quantityProduct == 0) {
        alert("Please, enter the quantity of the product");
        return
    }
    let isBuyed;

    switch(true) {
        case document.getElementById("purchased_1").checked===true:
            isBuyed = "checked";
        break;
        case document.getElementById("purchased_2").checked===true:
            isBuyed = "";
        break;
        default: alert("select is product purchased or not");
        return;
    }

    // LET'S GET AN OBJECT
    let purchase = {
        name: nameProduct,
        quantity: quantityProduct,
        purchased: isBuyed,
    }

    // LET'S FIND IS THIS NAMEOFPRODUCT EXIST IN OUR ARRAY. IF IT IS NOT EXIST WE PUSH OBJECT TO THE ARRAY

    let findSameObj = arr.find(myproduct => myproduct.name === nameProduct);
    let findIndOfSameObj = arr.findIndex(myproduct => myproduct.name === nameProduct);

    if(findSameObj !== undefined) {
        if(findSameObj.purchased === isBuyed) {
            arr[findIndOfSameObj].quantity = findSameObj.quantity + quantityProduct;
        }
        else if(quantityProduct <= findSameObj.quantity) {
            arr[findIndOfSameObj].quantity = findSameObj.quantity - quantityProduct;
        }
        else if(quantityProduct > findSameObj.quantity) {
            arr[findIndOfSameObj].quantity = quantityProduct - findSameObj.quantity;
            arr[findIndOfSameObj].purchased = isBuyed;
        }
    }
    else {
        arr.push(purchase);
    }
  
// LET DELETE REFLECTION OF ARRAY IN HTML IF IT IS EXIST

let myNode = document.getElementById("container");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}

// LET DISPLAY OUR NEW ARRAY IN HTML

for(let i = 0; i < arr.length; i++) {
    container.insertAdjacentHTML('beforeend', `<input type="checkbox" ${arr[i].purchased} id="inContainer_${i}" <label for ="inContainer_${i}">${arr[i].name} - ${arr[i].quantity}</p>`);
    }
}

function mySort() {
    // LET DELETE REFLECTION OF ARRAY IN HTML IF IT IS EXIST

let myNode = document.getElementById("container");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}

// lET SORT ARRAY
arr.sort(function(a, b) {
    var purchasedA = a.purchased;
    var purchasedB = b.purchased;

    if (purchasedA < purchasedB) {
        return -1;
      }
      if (purchasedA > purchasedB) {
        return 1;
      }
      return 0;
    });

//LET DISPLAY OUR NEW ARRAY IN HTML

for(let i = 0; i < arr.length; i++) {
    container.insertAdjacentHTML('beforeend', `<input type="checkbox" ${arr[i].purchased} id="inContainer_${i}" <label for ="inContainer_${i}">${arr[i].name} - ${arr[i].quantity}</p>`);
    }
}

function bought() {
    let nameBought = prompt("Enter name of the product you want to mark as bought");
    let findIndOfSameObj = arr.findIndex(a => a.name === nameBought);
    arr[findIndOfSameObj].purchased = "checked";

// LET DELETE REFLECTION OF ARRAY IN HTML IF IT IS EXIST

    let myNode = document.getElementById("container");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

// LET DISPLAY OUR NEW ARRAY IN HTML

    for(let i = 0; i < arr.length; i++) {
        container.insertAdjacentHTML('beforeend', `<input type="checkbox" ${arr[i].purchased} id="inContainer_${i}" <label for ="inContainer_${i}">${arr[i].name} - ${arr[i].quantity}</p>`);
    }
}
