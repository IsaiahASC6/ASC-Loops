const fruits = [
    'mango',
    'kiwi',
    'orange',
    'bannana',
    'apple'
];

console.log('The Length is...' , fruits.length);

fruits.push('peach');

console.log('The new Length is...' , fruits.length);

fruits.pop();
fruits.pop();

console.log('cut out' , fruits[2] + ' and' , fruits[1]);
