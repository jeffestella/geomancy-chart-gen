const range = (start, end) => {
    let output = [];
    for (let i = start; i <= end; i++) {
        output.push(i);
    }
    return output;
}
class Row {
    constructor(html, isMother) {
        this.active = false;
        this.html = html;
        this.html.textContent = 'O O';
        if (isMother) {
            this.addClickListener();
        }
    }
    toggleState() {
        this.active = !this.active;
        this.updateContent();
    }
    matchState(targetRow) {
        this.active = targetRow.active;
        this.updateContent();
    }
    setActive() {
        this.active = true;
        this.updateContent();
    }
    setPassive() {
        this.active = false;
        this.updateContent();
    }
    addClickListener() {
        this.html.addEventListener('click', () => {
            this.toggleState();
        })
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
    constructor(name, isMother=false) { //name = string
        this.name = name;
        this.html = this.getFigElement(this.name);
        this.isMother = isMother;
        this.rowList = [];
        for (let i of range(1,4)) {
            this[`row${i}`] = new Row(this.getRowElement(i), this.isMother);
            this.rowList.push(this[`row${i}`]);
        }
    }
    getFigElement(name) {
        return document.querySelector(`#${name}`);
    }
    getRowElement(rowNum) {
        return this.html.querySelector(`.row${rowNum}`);
    }
}

class ShieldChart {
    constructor() {
        this.figureList = [];
        this.motherList = [];
        for (let i of range(1, 16)) {
            let figName = `f${i}`;
            let checkMother = i<5 ? true : false;
            this[figName] = new Figure(figName, checkMother);
            this.figureList.push(this[figName]);
            if (checkMother) {
                this.motherList.push(this[figName]);
            }
        }
        this.activateCastBtn();
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
    }
    activateCastBtn() {
        let btn = document.querySelector('#cast');
        btn.addEventListener('click', () => {
            this.castMothers();
        })
    }
    fillChart() {
        //Access mothers and construct daughters
        
        //make method to compare two row states and set daughter row state based on that
    }
    constructDaughter(daughterNum) { //num = integer 5-8
        //iterate thru each row of each daughter figure, setting the row state to its corresponding mother row
        let daughterList = [this.f5, this.f6, this.f7, this.f8]
        for (let daughter of daughterList) {
            for (let row of daughter) {

            }
        }
        let motherNum = daughterNum - 4;
        this[`f${daughterNum}`][`row${1}`].active = this[`f${motherNum}`][`row${1}`].active;
    }
}

const mainShieldChart = new ShieldChart;

//TO DO
//Make update chart method to execute upon click events on mother rows
//Continue fillChart method