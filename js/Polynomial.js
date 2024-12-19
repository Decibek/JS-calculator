class Polynomial {
    constructor(members = []) {
        this.members = members;
        this.members.sort((a, b) => b.power - a.power);
    }

    toString() {
        if (this.members === 0) {
            return this.members.toString();
        }
    }

    getValue(x) {
        const calc = new Calculator();
        return this.members.reduce((s, elem) => calc.add(s, calc.prod(calc.pow(x, elem.power), elem.value)), calc.zero(x));
    }
}