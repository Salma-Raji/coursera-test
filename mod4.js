var names = ['James', 'John', 'Anna', 'Jack', 'Sophie', 'Jessica'];

for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    
    if (firstLetter === 'j') {
        console.log("Goodbye " + names[i]);
    } else {
        console.log("Hello " + names[i]);
    }
}
