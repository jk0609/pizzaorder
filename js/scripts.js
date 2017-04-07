//Business Logic
//Constructor and prototype method for calculating price dynamically.
function Pizza(size,sizeName,toppings){
  this.size = parseInt(size);
  this.sizeName = sizeName;
  this.toppings = toppings;
}
Pizza.prototype.price = function(){
  this.price = (10 + (this.size*2.5) + (this.toppings.length * .5)).toFixed(2);
}

//UI Logic
$(document).ready(function(){

  $('form').submit(function(event){
    //pulls size and topping data from html inputs, assigns to variables.
    var size = $('#size').val();
    var sizeName = $('option:selected').attr('name');
    var toppings = [];
    $('input:checkbox:checked').each(function(){
      var topping = $(this).val();
      toppings.push(topping);
    })

    //creates newPizza via constructor, runs price method via prototype.
    var newPizza = new Pizza(size,sizeName,toppings);
    newPizza.price();

    //converts toppings array into text string to be used in receipt. Adds receipt text string and shows to user.
    var toppingText = "";
    if(toppings.length===0){
      toppingText = 'no toppings';
    }
    else if(toppings.length<=2){
      toppingText = toppings.join(' and ');
    }
    else{
      for(i=0;i<toppings.length-1;i++){
        toppings[i] = toppings[i]+',';
      }
      console.log(toppings);
      toppings.splice(toppings.length-1,0,'and');
      toppingText = toppings.join(' ');
    }
    $('#receipt').show();
    $('#receiptText').text("You've ordered "+newPizza.sizeName+' pizza with '+toppingText+'. Your total is $'+newPizza.price+".");

    $('form')[0].reset();
    event.preventDefault();
  });

});
