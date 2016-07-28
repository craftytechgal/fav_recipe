//Create an object to hold information on your favorite recipe.
//It should have properties for recipeTitle (a string), servings (a number), 
//an ingredients (an array of strings).


var recipe = {
recipeTitle: ' Chocolate Torte ',
servings: 6, 
ingredients: [' flour ', ' sugar ', ' coco ', ' butter ',' cream ']
}


//Try displaying some information about our recipe.
alert(recipe.recipeTitle)

alert(' The ingredients for ' + recipe.recipeTitle + ' are '+ recipe.ingredients);


//Bonus: create a lop to list all t ingredients.
for (var index=0;index< recipe.ingredients.length; index++) {

console.log(recipe.ingredients[index]);
}
