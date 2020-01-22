const check = (num) => { 
    if (num==1) {
        return 1
    } else if (num%2<1) {
        return 0
    } else {
        return 1
    }
};

const gen = (fig1, fig2) => {
    let newFig = []
    for (i = 0; i<4; i++) {
        newFig.push(check(fig1[i]+fig2[i]))
    };
    return newFig
};

const figures = {
    Via:[1,1,1,1],
    Cauda Draconis:[1,1,1,0],
    Puer:[1,1,0,1],
    Fortuna Minor:[1,1,0,0],
    Puella:[1,0,1,1],
    Amissio:[1,0,1,0],
    Carcer:[1,0,0,1],
    Laetitia:[1,0,0,0],
    Caput Draconis:[0,1,1,1],
    Conjunctio:[0,1,1,0],
    Acquisitio:[1,1,1,1],
    Rubeus:[0,1,0,0],
    Fortuna Major:[0,0,1,1],
    Albus:[0,0,1,0],
    Tristitia:[0,0,0,1],
    Populus:[0,0,0,0] 
};



var m1 = [];
var m2 = [];
var m3 = [];
var m4 = [];

var mothers = [m1,m2,m3,m4]

d5 = i[0]