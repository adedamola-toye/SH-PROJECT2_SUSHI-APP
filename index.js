const increase = document.getElementsByClassName("plus");
const decrease = document.getElementsByClassName("minus");
const total = document.querySelector(".total__value");

const items = [
    {food: "Smashed Avo", price: 20},
    {food: "Yin & Yang", price: 10},
    {food: "Pancakes", price: 25},
    {food: "Rancheros (Tofu)", price: 25},
];

function calculateSubtotal() {
    let subtotal = 0;
    const quantities = document.getElementsByClassName("no-of-order");

    for (let i = 0; i < quantities.length; i++) {
        const quantity = parseInt(quantities[i].value);
        subtotal += quantity * items[i].price;
    }

    total.innerText = `$${subtotal.toFixed(2)}`;
}

for (let i = 0; i < increase.length; i++) {
    const button = increase[i];
    button.addEventListener('click', function (event) {
        const buttonClicked = event.target;
        const noOfOrder = buttonClicked.parentElement.children[3];

        let noOfOrderValue = parseInt(noOfOrder.value);
        noOfOrder.value = noOfOrderValue + 1;
        
        calculateSubtotal();
    });
}

for (let i = 0; i < decrease.length; i++) {
    const button = decrease[i];
    button.addEventListener('click', function (event) {
        const buttonClicked = event.target;
        const noOfOrder = buttonClicked.parentElement.children[3];

        let noOfOrderValue = parseInt(noOfOrder.value);
        if (noOfOrderValue > 0) {
            noOfOrder.value = noOfOrderValue - 1;
        } else {
            noOfOrder.value = 0; 
        }
        
        calculateSubtotal();
    });
}


calculateSubtotal();
