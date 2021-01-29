const range = (start, end) => {
    let output = [];
    for (let i = start; i <= end; i++) {
        output.push(i);
    }
    return output;
}
class Row {
    constructor(html) {
        this.active = false;
        this.html = html;
        this.html.textContent = 'O O';
    }
    toggleState() {
        this.active = !this.active;
        this.updateContent();
    }
    matchState(targetRow) {
        this.active = targetRow.active;
        this.updateContent();
    }
    mixState(rowA, rowB) {
        if (rowA.active === rowB.active) {
            this.active = false;
        } else {
            this.active = true;
        }
    }
    setActive() {
        this.active = true;
        this.updateContent();
    }
    setPassive() {
        this.active = false;
        this.updateContent();
    }
    updateContent() {
        if (this.active) {
            this.html.textContent = 'O';
        } else {
            this.html.textContent = 'O O'
        }
    }
}

class Figure {
    constructor(name) { //name = string
        this.name = name;
        this.html = this.getFigElement(this.name);
        this.rowList = [];
        for (let i of range(1,4)) {
            this[`row${i}`] = new Row(this.getRowElement(i));
            this.rowList.push(this[`row${i}`]);
        }
    }
    getFigElement(name) {
        return document.querySelector(`#${name}`);
    }
    getRowElement(rowNum) {
        return this.html.querySelector(`.row${rowNum}`);
    }
    mixRows(figA, figB) {
        let figARows = figA.rowList;
        let figBRows = figB.rowList;
        for (let i of range(1,4)) {
            let row = this[`row${i}`];
            row.mixState(figARows[i - 1], figBRows[i - 1]);
            row.updateContent();
        }
    }
}

class ShieldChart {
    constructor() {
        this.motherList = [];
        this.daughterList = [];
        this.nieceList = [];
        this.witnessList = [];
        for (let i of range(1, 16)) {
            let figName = `f${i}`;
            let isMother = i<5 ? true : false;
            let isDaughter = [5,6,7,8].includes(i);
            let isNiece = [9,10,11,12].includes(i);
            let isWitness = [13,14].includes(i);
            this[figName] = new Figure(figName);
            if (isMother) {
                this.motherList.push(this[figName]);
            } else if (isDaughter) {
                this.daughterList.push(this[figName]);
            } else if (isNiece) {
                this.nieceList.push(this[figName]);
            } else if (isWitness) {
                this.witnessList.push(this[figName]);
            }
        }
        this.activateCastBtn();
        this.addClickListeners();
    }
    castMothers() {
        for (let fig of this.motherList) {
            for (let row of fig.rowList) {
                if (Math.random() > 0.5) {
                    row.setActive();
                } else {
                    row.setPassive();
                }
            }
        }
        this.fillChart();
    }
    activateCastBtn() {
        let btn = document.querySelector('#cast');
        btn.addEventListener('click', () => {
            this.castMothers();
        })
    }
    fillChart() {
        this.constructDaughters();
        this.f9.mixRows(this.f1, this.f2);
        this.f10.mixRows(this.f3, this.f4);
        this.f11.mixRows(this.f5, this.f6);
        this.f12.mixRows(this.f7, this.f8);
        this.f13.mixRows(this.f9, this.f10);
        this.f14.mixRows(this.f11, this.f12);
        this.f15.mixRows(this.f13, this.f14);
        this.f16.mixRows(this.f15, this.f1);
    }
    constructDaughters() {
        for (let daughterNum of range(5,8)) {
            let daughter = this[`f${daughterNum}`];
            let mothersRow = daughterNum - 4;
            for (let rowNum of range(1, 4)) {
                daughter[`row${rowNum}`].matchState(this[`f${rowNum}`][`row${mothersRow}`]);
                daughter[`row${rowNum}`].updateContent();
            }
        }
    }
    addClickListeners() {
        for (let mother of this.motherList) {
            for (let row of mother.rowList) {
                row.html.addEventListener('click', () => {
                    row.toggleState();
                    row.updateContent();
                    this.fillChart();
                })
            }
        }
    }
}

const mainShieldChart = new ShieldChart;

//TO DO
//Add feature to highlight Via Punti. (Already separated the chart by mothers+daughters, nieces, witnesses to help with this)
//Figure out how to name each figure's current occupied geomantic figure
