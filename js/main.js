
var arr = [];
function addPurchase() {
    let nameProduct = document.getElementById("userProduct").value;
    let quantityProduct = document.getElementById("userQuantity").value;
    let isBuyed;

    switch(true) {
        case document.getElementById("purchased_1").checked===true:
            isBuyed = true;
        break;
        case document.getElementById("purchased_2").checked===true:
            isBuyed = false;
        break;
        default: alert("select is product purchased or not");
    }

    let purchase = {
        name: nameProduct,
        quantity: quantityProduct,
        purchased: isBuyed,
    }

    arr.push(purchase);

    document.getElementById("message").innerHTML = `${arr[0].name} - ${arr[0].quantity}`;

    alert(arr[3].name);
    alert(arr);

    
}
//     let numb = document.getElementById("money").value;
//     let rateEur = 1.18;
//     let rateUan = 0.15;
//     let rateAzn = 0.61;
//     var result;
//     let curr;
// function
//     switch(true) {
//         case document.getElementById("currency_1").checked===true: 
//             curr = "EUR";
//             result = numb / rateEur;
//         break;
//         case document.getElementById("currency_2").checked===true:
//             curr = "UAN";
//             result = numb / rateUan;
//         break;
//         case document.getElementById("currency_3").checked===true: 
//             curr = "AZN";
//             result = numb / rateAzn;
//         break;
//     }

//     result = `You'll get ${result.toFixed(2)} ${curr}`;
//     document.getElementById("message").innerHTML = result;
//     document.getElementById("message").style.backgroundColor = "rgba(20,200,200,0.8)";
//     return result;
// }
