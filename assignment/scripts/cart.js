console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
// 
// 
// Create a global variable named `basket` and set it to an empty array.
let basket = [];
// 
// Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//   - return `true` indicating the item was added
function addItem( item, array){
    array.push(item);
    for (let i=0; i < array.length; i++){
        if ( array[i] === item){
            return true;
        }
    }
}   //end function
// test to call the function addItem//
let fruit = 'apple';
console.log ('checking if apple in basket (should be true):', addItem(fruit,basket)); 
let veggie = 'carrot';
console.log ('checking if apple and carrot are in basket (should be true):', addItem(veggie, basket)); //end test
// 
// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
function listItems(array){
    for (let i=0; i < array.length; i++){
        console.log('Items in basket:',array[i]);        
    }
}   //end function
// test to call the function listItem //
listItems(basket); //end test
// 
// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
function empty(array){
    while(array.length){
        array.shift();
    }
} //end reset array
// test to call the function empty //
empty(basket);
console.log('should show empty array:', basket);

/////  Stretch Goals  /////
// 1.
const maxItems = 5;
// 
// 2.
function isFull(array){
    if(array.length < maxItems){
        return false;
    }
    return true;
}
// test to call function isFull //
let basketEmpty = [];
let basketFull =['grape', 'orange', 'banana', 'kiwi', 'pineapple', 'strawberry'];
console.log('to show false when basket is less than 5:', isFull(basketEmpty));
console.log('to show true when basket is 5 or more:', isFull(basketFull));
// 
// 3.
