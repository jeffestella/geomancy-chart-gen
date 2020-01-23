// const figures = {
//     Via:[1,1,1,1],
//     Cauda Draconis:[1,1,1,0],
//     Puer:[1,1,0,1],
//     Fortuna Minor:[1,1,0,0],
//     Puella:[1,0,1,1],
//     Amissio:[1,0,1,0],
//     Carcer:[1,0,0,1],
//     Laetitia:[1,0,0,0],
//     Caput Draconis:[0,1,1,1],
//     Conjunctio:[0,1,1,0],
//     Acquisitio:[1,1,1,1],
//     Rubeus:[0,1,0,0],
//     Fortuna Major:[0,0,1,1],
//     Albus:[0,0,1,0],
//     Tristitia:[0,0,0,1],
//     Populus:[0,0,0,0] 
// };

const figures = {
    'Via':[1,1,1,1],
    'Cauda Draconis':[1,1,1,0],
    'Puer':[1,1,0,1],
    'Fortuna Minor':[1,1,0,0],
    'Puella':[1,0,1,1],
    'Amissio':[1,0,1,0],
    'Carcer':[1,0,0,1],
    'Laetitia':[1,0,0,0],
    'Caput Draconis':[0,1,1,1],
    'Conjunctio':[0,1,1,0],
    'Acquisitio':[1,1,1,1],
    'Rubeus':[0,1,0,0],
    'Fortuna Major':[0,0,1,1],
    'Albus':[0,0,1,0],
    'Tristitia':[0,0,0,1],
    'Populus':[0,0,0,0]
};

const check = (num) => { 
    if (num==1) {
        return 1
    } else if (num%2<1) {
        return 0
    } else {
        return 1
    }
};

const mixFigs = (fig1, fig2) => {
    let newFig = []
    for (i = 0; i<4; i++) {
        newFig.push(check(fig1[i]+fig2[i]))
    };
    return newFig
};

const genDaughter = (mothers_list, ind) => {
    let daughter = [];
    for (i = 0; i<4; i++) {
        daughter.push(mothers_list[i][ind])
    };
    return daughter
};

var m1 = [1,1,0,0];
var m2 = [0,1,0,1];
var m3 = [0,0,0,0];
var m4 = [1,0,1,1];
var mothers = [m1,m2,m3,m4];
console.log(mothers[i]);

var d5 = genDaughter(mothers,0);
var d6 = genDaughter(mothers,1);
var d7 = genDaughter(mothers,2);
var d8 = genDaughter(mothers,3);
var daughters = [d5,d6,d7,d8];
console.log(daughters[i]);


var n9 = mixFigs(m1,m2);
var n10 = mixFigs(m3,m4);
var n11 = mixFigs(d5,d6);
var n12 = mixFigs(d7,d8);
var nieces = [n9,n10,n11,n12];
console.log(nieces);

var w13 = mixFigs(n9,n10);
var w14 = mixFigs(n11,n12);
var witnesses = [w13,w14]
console.log(witnesses);

var j15 = mixFigs(w13,w14);
console.log(j15);

var s16 = mixFigs(j15,m1);
console.log(s16);