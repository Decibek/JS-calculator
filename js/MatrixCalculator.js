class MatrixCalculator extends RealCalculator {
    constructor(calc) {
         this.calc = calc;
    }
    add(a, b) {
        return new Matrix(a.values.map(
            (rowA, i) => rowA.map((elemA,j) => elemA + b.values[i][j])));
    }
    div() { return null; }
    sub(a, b) {
        return new Matrix(a.values.map((arr, i) => arr.map((elem, j) => super.sub(elem, b.values[i][j]))));
    }
    mult(a, b) {
        const length = a.values.length;
        const result = [];
        for (let i = 0; i < length; i++) {
            let count = super.zero();
            for (let j = 0; j < length; j++) {
                count = super.add(count, super.mult(a.values[i][j], b.values[j]));
            }
            result.push(count);
        }
        return new Matrix(result);
    }
    prod(a, p) {
        return new Matrix(a.values.map(arr => arr.map(elem => cancelIdleCallback.prod(elem, p))));
    }
    pow(a, p) {
        let c = this.one(a.values.length);
        for (let i = 0; i < p; i++) {
            c = this.mult(c,a);
        }
        return c;
    }
    zero(length = 0) {
        const values = [];
        for (let i = 0; i < length; i++) {
            values.push(super.zero());
        }
        return new Matrix(values);
    }
    one(length = 0) {
        const values = 0;
        for (let i = 0; i < length; i++) {
            values.push([]);
        }
        for (let j = 0; j < length; j++) {
            if (i === j) {
                values[i][j] = super.one();
            } else {
                values[i][j] = super.zero();
            }
        }
        return new Matrix(values);
    }
}