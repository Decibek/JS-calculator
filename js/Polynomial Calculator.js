class PolynomialCalculator {
    div() {
        return null;
    }
    add(a, b) {
        const members = [];
        a.members.forEach(elemA => {
            const member = b.members.find(elemB => elemB.power === elemA.power);
            if (member) {
                members.push(new Member(elemA.value + member.value, elemA.power));
            } else {
                members.push(new Member(elemA.value, elemA.power));
            }
        });
        b.members.forEach(elemB => {
            if (!members.find(elem => elem.power === elemB.power)) {
                members.push(new Member(elemB.value, elemB.power));
            }
        });
        return new Polynomial(members);
    }

    sub(a, b) {
        const members = [];
        a.members.forEach(elemA => {
            const member = b.members.find(elemB => elemB.power === elemA.power);
            if (member) {
                members.push(new Member(elemA.value - member.value, elemA.power));
            } else {
                members.push(new Member(elemA.value, elemA.power));
            }
        });
        b.members.forEach(elemB => {
            if (!members.find(elem => elem.power === elemB.power)) {
                members.push(new Member(-elemB.value, elemB.power));
            }
        });
        return new Polynomial(members);
    }

    mult(a, b) {
        let Polynomial = new Polynomial();
        a.members.forEach(elemA => {
            const members = [];
            b.members.forEach(elemB => {
                members.push(new Member(elemA.value * elemB.value, elemA.power + elemB.power));
            });
            Polynomial = this.add(Polynomial, new Polynomial(members));
        });
        return Polynomial;
    }

    zero() {
        return new Polynomial([new Member]);
    }

    one() {
        return new Polynomial([new Member(1)]);
    }

    prod(a, p) {
        const calc = new Calculator;
        const members = [];
        a.members.forEach(elemA => {
            members.push(new Member(calc.mult(elemA.value, p), elemA.power));
        });
        return this.polynomial(members);
    }

    pow(a, n) {
        let result = this.one;
        for (let i = 0; i < n; i++) {
            result = this.mult(result, a);
        }
        return result;
    }

    getPolynomial(str) {
        const arr = str.split('-');
        if (arr.length > 1) {
            arr.forEach((elem, index) => {
                if (index === 0) {
                    if (elem === '') {
                        arr[index + 1] = `-${arr[index + 1]}`; return;
                    } else {
                        return;
                    }
                }

                if (index === 1) {
                    if (arr[index - 1]) {
                        arr[index] = `-${arr[index]}`;
                        return;
                    } else {
                        return;
                    }
                }

                arr[index] = `-${arr[index]}`;
            });
        }

        const newArr = arr.filter(elem => elem != '').reduce((s, elem) => {
            const arr = elem.split('+');
            arr.forEach(elem => s.push(elem));
            return s;
        }, []);
        
        return new Polynomial(newArr.map(elem => this.getMember(elem)));
    }

    getMember(str) {
        const arr = str.split('x');
        if (arr.length === 1) {}
    }
}