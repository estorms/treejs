//YOU WILL NEED TO USE REPEAT METHOD ON STRING
//BE SURE TO CONVERT CHAR INTO STRING

//Initialize object

var tree = {}

//Capture user input to populate object


var char = document.getElementById('character');
char.addEventListener('input', function(event) {
   tree.branches = char.value;
})

var num = document.getElementById('height');
num.addEventListener('input', function(event){
    tree.height = Number(num.value);
})

//Initialize function on button click

var growButt = document.getElementById('growButton');
growButt.addEventListener('click', function(event) {
    if (num.value != '' && char.value != '') {
        console.log(growTree(tree));
        // console.log('working');
    }
    else {
      alert('You need a value in both fields, dummy');
    }})

//Initialize function on keypress,

char.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 && char.value != '' && num.value !='') {
        console.log(growTree(tree));
        // console.log('working');
    }
    else if (event.keyCode === 13) {
    alert('You need a value in both fields, dummy');
    }
})

//

num.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 && char.value != '' && num.value !='') {
        growTree(tree);
        // console.log('poo');
    }
    else if (event.keyCode === 13) {
    alert('You need a value in both fields, dummy');
    }
})

function growTree(arg) {
    var output = '';
    for (var i = 0; i < tree.height; i++) {
        output += tree.branches;
    }
    return output;
}




// console.log();
// var submitButton = document.getElementById("submit");

// submitButton.addEventListener('click', function(evt){
//     alert("Fuck this!");


// })

// var userTree = {};
// userTree.character = '';
// userTree.height = ''

// var character = document.getElementById("character");
// userTree.character = character.value;
// console.log(userTree.character);

// character.addEventListener('', function(evt) {
//     // console.log("big steps kitten");

// // for (var i = 0; i < 9; i++) {
// //     userTree.character += i;
// // }



// console.log(userTree.character);
