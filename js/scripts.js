//Business Logic
function Pizza(size,toppings){
  this.size = parseInt(size);
  this.toppings = toppings;
}
Pizza.prototype.price = function(){
  this.price = 10 + (this.size*2.5) + (this.toppings.length * .5);
}

//UI Logic
$(document).ready(function(){

  $('form').submit(function(event){
    var size = $('#size').val();
    var toppings = [];
    $('input:checkbox:checked').each(function(){
      var topping = $(this).val();
      toppings.push(topping);
    })

    var newPizza = new Pizza(size,toppings);
    newPizza.price();
    console.log(newPizza);

    event.preventDefault();
  })

});
