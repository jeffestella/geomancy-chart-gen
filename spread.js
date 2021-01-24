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
    let compareArrays = (arr1, arr2) => {
        for (let i = 0; i<4; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            };
        };
        return true;
    }
    for (let item of figures) {
        if (compareArrays(item[1],figArray)) {
            return item[0];
        }
    }
}

//IN: number
//OUT: returns 1 if num is odd, 0 if num is even
const check = (num) => { 
    if (num%2<1) {
        return 0
    } else {
        return 1
    }
};

//IN: two figure arrays to combine
//OUT: new combined figure array
const combineFigs = (fig1, fig2) => {
    let newFig = []
    for (i = 0; i<4; i++) {
        newFig.push(check(fig1[i]+fig2[i]))
    };
    return newFig
};

//IN: array of mother figure arrays, row from which to generate daughter
//OUT: daughter figure array
const genDaughter = (mothers_list, row) => {
    let daughter = [];
    for (i = 0; i<4; i++) {
        daughter.push(mothers_list[i][row])
    };
    return daughter
};

let chart = {
    fillChart: function () {
        this.m1 = [1, 1, 0, 0];
        this.m2 = [0, 1, 0, 1];
        this.m3 = [0, 0, 0, 0];
        this.m4 = [1, 0, 1, 1];
        this.mothers = [this.m1, this.m2, this.m3, this.m4];
        this.d5 = genDaughter(this.mothers, 0);
        this.d6 = genDaughter(this.mothers, 1);
        this.d7 = genDaughter(this.mothers, 2);
        this.d8 = genDaughter(this.mothers, 3);
        this.daughters = [this.d5, this.d6, this.d7, this.d8];
        this.n9 = combineFigs(m1, m2);
        this.n10 = combineFigs(m3, m4);
        this.n11 = combineFigs(d5, d6);
        this.n12 = combineFigs(d7, d8);
        this.nieces = [this.n9, this.n10, this.n11, this.n12];
        this.w13 = combineFigs(n9, n10);
        this.w14 = combineFigs(n11, n12);
        this.witnesses = [w13, w14]
        this.j15 = combineFigs(this.w13, this.w14);
        this.s16 = combineFigs(this.j15, this.m1);
    }
}
