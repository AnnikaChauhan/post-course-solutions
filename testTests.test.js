import {sayHello} from "./testTests";
import {addOne} from "./testTests";
import SomeClass from "./testTests";

describe('hello', () => {
    it('should output hello', () => {
        expect(sayHello()).toBe('hello');
    })
})

describe('addOne', () => {
    it('should add one to the value put in the input', () => {
        expect(addOne(3)).toBe(4);
    })
})

describe('SomeClass', () => {
    it('works',() => {
        const obj = new SomeClass(1,2);
        expect(obj.a).toBe(1);
        expect(obj.b).toBe(2);
        expect(obj.sayHello()).toBe('hello 12');
        expect(obj.addOne()).toBe(4);
    })
})