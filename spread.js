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
        this.addListener();
    }
    toggleState() {
        this.active = !this.active;
        if (this.active) {
            this.html.textContent = 'O';
        } else {
            this.html.textContent = 'O O'
        }
    }
    addListener() {
        this.html.addEventListener('click', () => {
            this.toggleState();
        })
    }
}

class Figure {
    constructor(name, mother=false) { //name = string
        this.name = name;
        this.html = this.getFigElement(this.name);
        this.mother = mother;
        this.row1 = new Row(this.getRowElement(1));
        this.row2 = new Row(this.getRowElement(2));
        this.row3 = new Row(this.getRowElement(3));
        this.row4 = new Row(this.getRowElement(4));
    }
    getFigElement(name) {
        return document.querySelector(`#${name}`);
    }
    getRowElement(rowNum) {
        return this.html.querySelector(`.row${rowNum}`);
    }
}

const testFigure = new Figure('f1', true);

class ShieldChart {
    constructor() {
        for (let i of range(1, 16)) {
            let figName = `f${i}`;
            let motherCheck = i<5 ? true : false
            this[figName] = new Figure(figName, motherCheck);
        }
    }
    //Update Chart Listener()
}

const testShieldChart = new ShieldChart;

//TO DO
//1. Move add click listener method to Figure class and apply to rows
//2. Apply click listener only if figure.mother = true
//3. Make Cast Mothers method and apply it to button
//4. Make update chart method to execute upon click events on mother rows