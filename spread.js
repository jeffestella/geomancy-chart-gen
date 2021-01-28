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
        if (this.active) {
            this.html.textContent = 'O';
        } else {
            this.html.textContent = 'O O'
        }
    }
    addClickListener() {
        this.html.addEventListener('click', () => {
            this.toggleState();
        })
    }
}

class Figure {
    constructor(name, isMother=false) { //name = string
        this.name = name;
        this.html = this.getFigElement(this.name);
        this.isMother = isMother;
        this.row1 = new Row(this.getRowElement(1), this.isMother);
        this.row2 = new Row(this.getRowElement(2), this.isMother);
        this.row3 = new Row(this.getRowElement(3), this.isMother);
        this.row4 = new Row(this.getRowElement(4), this.isMother);
        this.rowList = [this.row1, this.row2, this.row3, this.row4]
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
                    row.toggleState();
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
        //make inner function to compare two row states and set daughter row state based on that
    }
}

const mainShieldChart = new ShieldChart;

//TO DO
// ***Make update chart method to execute upon click events on mother rows