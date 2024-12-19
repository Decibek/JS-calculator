class Calculator {
    complex(re, im) {
        return new Complex(re, im);
    }

    vector(values) {
        return new Vector(values);
    }

    matrix(values) {
        return new Matrix(values);
    }

    getEntity(str) {
        str = str.replace(/\s/g, '');
        if (str.includes('[')) return this.getMatrix(str);
        if (str.includes('(')) return this.getVector(str);
        return this.getComplex(str);
    }

    getMatrix(str) {
        const arr = str.slice(1, -1).split('|').map(elems => elems.split(';').map(elem => this.getEntity(elem)));
        return this.matrix(arr);
    }

    getVector(str) {
        const arr = str.slice(1, -1).split(',').map(elem => this.getEntity(elem));
        return this.vector(arr);
    }

    getComplex(str) {
        const match = str.match(/^(-?\d*\.?\d*)([+-]i\d*\.?\d*)?$/);
        if (!match) throw new Error(`Инвалид намбер формат: ${str}`); // Выбрасывает ошибку для некорректного формата

        const re = parseFloat(match[1] || '0'); // Извлекает действительную часть
        const im = parseFloat((match[2] || '0').replace('i', '')) || 0; // Извлекает мнимую часть
        return this.complex(re, im); // Создаёт и возвращает комплексное число
    }
    
    get(elem) {
        if (elem instanceof Matrix)
            return new MatrixCalculator(this.get(elem.values[0][0]));
        if (elem instanceof Vector) {
            return new VectorCalculator(this.get(elem.values[0]));
        }
        return new ComplexCalculator();
    }

    add(a, b) {
        return this.get(a).add(a, b);
    }

    sub(a, b) {
        return this.get(a).sub(a, b);
    }

    mult(a, b) {
        return this.get(a).mult(a, b);
    }

    div(a, b) {
        return this.get(a).div(a, b);
    }

    prod(a, p) {
        return this.get(a).prod(a, p);
    }

    pow(a, p) {
        return this.get(a).pow(a, p);
    }

    zero(elem) {
        if (elem instanceof Matrix) {
            return this.get(elem).zero(elem.values.length);
        }
        if (elem instanceof Vector) {
            return this.get(elem).zero(elem.values.length);
        } else {
            return this.get().zero();
        }
    }

    one(elem) {
        if (elem instanceof Matrix) {
            return this.get(elem).one(elem.values.length);
        }
        if (elem instanceof Vector) {
            return this.get(elem).one(elem.values.length);
        } else {
            return this.get().one();
        }
    }
}