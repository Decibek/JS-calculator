const testRealCalc = new RealCalculator()
var r1 = 4
var r2 = 5
const resultReal = testRealCalc.add(r1, r2);
console.log(resultReal)

const testComplexCalc = new ComplexCalculator();
var c1 = new Complex(1, 4);
var c2 = new Complex(2, 5);
const resultComplex = testComplexCalc.add(c1, c2);
if (resultComplex.im >= 0) {
    console.log(`${resultComplex.re} +${resultComplex.im}i`)
    } else {
        console.log(`${resultComplex.re} ${resultComplex.im}i`)
    }

const testVectorCalc = new VectorCalculator();
var v1 = new Vector([2, 2])
var v2 = new Vector([3, 4])
const resultVector = testVectorCalc.add(v1, v2);
console.log(resultVector.values);