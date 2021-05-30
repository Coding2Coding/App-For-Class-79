var menu = []
var pepperoniPizza = "Pepperoni Pizza";
var veggiePizza = "Veggie Pizza";
var cheesePizza = "Cheese Pizza";
var chickenPizza = "Chicken Pizza";

menu.push(pepperoniPizza);
menu.push(veggiePizza);
menu.push(cheesePizza);
menu.push(chickenPizza);

function add_item() {
    var extraPizza = document.getElementById("add_item").value;
    menu.push(extraPizza);
}

function getMenu() {
    menu.sort();
    document.getElementById("menu_div").innerHTML = menu;
}