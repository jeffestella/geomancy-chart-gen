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

//IN: figure Array
//OUT: figure Name string
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

//IN: figure Name string
//OUT: figure Array
const getFig = (figName) => {
    for (let fig of figures) {
        if (fig[0] === figName) {
            return fig[1];
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
        this.n9 = combineFigs(m1, m2);
        this.n10 = combineFigs(m3, m4);
        this.n11 = combineFigs(d5, d6);
        this.n12 = combineFigs(d7, d8);
        this.w13 = combineFigs(n9, n10);
        this.w14 = combineFigs(n11, n12);
        this.j15 = combineFigs(w13, w14);
        this.s16 = combineFigs(j15, m1);
    },
    fillFigures: function () {
        let figures = document.querySelectorAll('.figure');
        for (let fig of figures) {
            fig.textContent= `${this[fig.id]}`
        }
    }
}

chart.fillChart();


// *******DOM CODE START*********
const elementText = () => {
    let figs = document.querySelectorAll('.fig-row');
    for (let fig of figs) {
        fig.textContent = 'O'
    }
}
elementText();

//Toggles active/passive state on a mother's row
const toggleFigRow = (row) => {
    let classList = row.classList;
    classList.toggle('active');
    if (Array.from(classList).includes('active')) {
        row.textContent='O';
    } else {
        row.textContent = 'O O';
    }
}

//Updates non-mother figures according when mother figures change on click.
//NEED TO CONTINUE WORKING ON THIS FXN
const updateChart = () => {
    const selectMother = (id) => {
        return document.querySelector(`#${id}`);
    }
    let m1 = selectMother('m1');
    let m2 = selectMother('m2');
    let m3 = selectMother('m3');
    let m4 = selectMother('m4');
    console.log(m1);
}

//Adds event listeners to mothers' rows
const setToggleEvents = () => {
    let mothers = document.querySelectorAll('.mother');
    for (let fig of mothers) {
        let figRows = fig.querySelectorAll('.fig-row');
        for (let row of figRows) {
            row.addEventListener('click', (e) => {
                e.preventDefault();
                toggleFigRow(e.target);
            })
        }
        
    }
}
setToggleEvents();


//Sets all mothers' rows to passive state
const resetMothers = () => {
    let mothers = document.querySelectorAll('.mother');
    for (let mother of mothers) {
        let figRows = mother.querySelectorAll('.fig-row');
        for (let row of figRows) {
            if (Array.from(row.classList).includes('active')) {
                row.classList.remove('active');
                row.textContent = 'O O'
            }
        }
    }
}

//Randomizes active/passive states on mothers' rows
const castMothers = () => {
    const selectMother = (id) => {
        return document.querySelector(`#${id}`);
    }
    const selectMotherRows = (mother) => {
        return mother.querySelectorAll('.fig-row');
    }
    let motherRows = [];
    let m1 = selectMother('m1');
    motherRows.append(Array.from(selectMotherRows(m1)));
    let m2 = selectMother('m2');
    motherRows.append(Array.from(selectMotherRows(m2)));
    let m3 = selectMother('m3');
    motherRows.append(Array.from(selectMotherRows(m3)));
    let m4 = selectMother('m4');
    motherRows.append(Array.from(selectMotherRows(m4)));
    for (let mom in motherRows) {
        for (let row in mom) {

        }
    }
    m1Rows.classList.remove('active')

}