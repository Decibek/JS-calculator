class VectorCalculator extends RealCalculator{
    div(){
        return null;
    }

    add(a,b){
        return new Vector(a.values.map((elem,index) => super.add(elem, b.values[index])));
    }

    sub(a,b) {
        return new Vector(a.values.map((elem,index) => super.sub(elem, b.values[index])))
    }

    prod(a, p) {
        return new Vector(a.values.map(elem => super.prod(elem, p)));
    }
    
    pow(a,b) {
        return new Vector(a.values.map((elem,index) => super.pow(elem, b.values[index])))
    }

    mult(a,b) {
        return new Vector([
            a.values[1] * b.values[2] - a.values[2] * b.values[1], 
            a.values[2] * b.values[0] - a.values[0] * b.values[2], 
            a.values[0] * b.values[1] - a.values[1] * b.values[0]]);
    }

    zero(lenght = 0){
        const values = [];
        for (let i=0; i<lenght; i++){
            values.push(super.zero());
        }
        return new Vector(values);
    }
    one(lenght = 0){
        if(lenght === 0) return new Vector([]);
        const values = [super.one()];
        for (let i = 1; i < lenght; i++){
            values.push(super.zero());
        }
        return new Vector(values);
    }
}