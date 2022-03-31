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
console.log ('checking if apple in basket:', addItem(fruit,basket)); 
let veggie = 'carrot';
console.log ('checking if apple and carrot are in basket', addItem(veggie, basket)); //end test
// 
// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
function listItems(array){
    for (let i=0; i < array.length; i++){
        console.log(array[i]);        
    }
    return "list of items complete";
}   //end function
// test to call the function listItem //
console.log('items in the list: ');
console.log(listItems(basket)); //end test
// 
// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
function empty(array){
    while(array.length){
        array.shift();
    }
    return 'to empty list';
} //end reset array
// test to call the function empty //
console.log(empty(basket));
console.log(basket);