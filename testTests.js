export const sayHello = () => 'hello';

export const addOne = (number) => {
    return number + 1;
}

export default class SomeClass {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    sayHello(){
        return 'hello ' + this.a + this.b;
    }

    addOne(){
        return this.a + this.b + 1;
    }
}