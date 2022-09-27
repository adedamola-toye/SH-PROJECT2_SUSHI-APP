
var increase = document.getElementsByClassName("plus");
var decrease = document.getElementsByClassName("minus");
var total = document.getElementsByClassName("total__value");

/* console.log(increase);
console.log(decrease); */
for(var i = 0; i < increase.length;  i++){
    var button = increase[i];
    button.addEventListener('click', function(event){

        var buttonClicked = event.target;
       var noOfOrder = buttonClicked.parentElement.children[3];
       /* console.log(noOfOrder); */

       var noOfOrderValue =noOfOrder.value;
       /* console.log(noOfOrderValue); */

       var newValue = parseInt(noOfOrderValue) +1;
      /*  console.log(noOfOrderNewValue); */
       noOfOrder.value = newValue;
       console.log(noOfOrder.value);
    })
}

for(var i = 0; i < decrease.length;  i++){
    var button = decrease[i];
    button.addEventListener('click', function(event){

        var buttonClicked = event.target;
       var noOfOrder = buttonClicked.parentElement.children[3];
       /* console.log(noOfOrder); */

       var noOfOrderValue =noOfOrder.value;
       /* console.log(noOfOrderValue); */

       var newValue = parseInt(noOfOrderValue) -1;
       noOfOrder.value = newValue;
       console.log(noOfOrder.value);
    })
}



/* const items = [
    {food:"Smashed Avo", price: 20},
    {food:"Yin & Yang", price: 10},
    {food:"Pancakes", price: 25},
    {food:"Rancheros(Tofu)", price: 25},
]

let subtotal = 0;

items.forEach(item =>{
    subtotal=subtotal +(noOfOrder.value* item.price);
});
console.log(subtotal)

total.innerHTML=subtotal; */
