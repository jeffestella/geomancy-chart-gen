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

const figures = [
    ['Via',[1,1,1,1]],
    ['Cauda Draconis',[1,1,1,0]],
    ['Puer',[1,1,0,1]],
    ['Fortuna Minor',[1,1,0,0]],
    ['Puella',[1,0,1,1]],
    ['Amissio',[1,0,1,0]],
    ['Carcer',[1,0,0,1]],
    ['Laetitia',[1,0,0,0]],
    ['Caput Draconis',[0,1,1,1]],
    ['Conjunctio',[0,1,1,0]],
    ['Acquisitio',[1,1,1,1]],
    ['Rubeus',[0,1,0,0]],
    ['Fortuna Major',[0,0,1,1]],
    ['Albus',[0,0,1,0]],
    ['Tristitia',[0,0,0,1]],
    ['Populus',[0,0,0,0]]
];

const nameFig = (figArray) => {
    const compareArrays = (arr1, arr2) => {
        let comparison = [];
        for (let i = 0, i<4, i++) {
            if (arr1[i] === arr2[i]) {
                comparison.push(true);
            } else {
                comparison.push(false);
            }
        };
        comparison.some(item => )
    };
    console.log(figures.find( item => item[1]===figArray));
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

let chart = {
    m1: '',
    m2: '',
    m3: '',
    m4: '',
    d5: '',
    d6: '',
    d7: '',
    d8: '',
    n9: '',
    n10: '',
    n11: '',
    n12: '',
    w13: '',
    w14: '',
    j15: '',
    s16: '',
}

chart.m1 = [1,1,0,0];
chart.m2 = [0,1,0,1];
chart.m3 = [0,0,0,0];
chart.m4 = [1,0,1,1];

for (let fig in chart) {
    console.log(chart[fig]);
}

// let d5 = genDaughter(mothers,0);
// let d6 = genDaughter(mothers,1);
// let d7 = genDaughter(mothers,2);
// let d8 = genDaughter(mothers,3);
// let daughters = [d5,d6,d7,d8];
// console.log(daughters);


// let n9 = mixFigs(m1,m2);
// let n10 = mixFigs(m3,m4);
// let n11 = mixFigs(d5,d6);
// let n12 = mixFigs(d7,d8);
// let nieces = [n9,n10,n11,n12];
// console.log(nieces);

// let w13 = mixFigs(n9,n10);
// let w14 = mixFigs(n11,n12);
// let witnesses = [w13,w14]
// console.log(witnesses);

// let j15 = mixFigs(w13,w14);
// console.log(j15);

// let s16 = mixFigs(j15,m1);
// console.log(s16);