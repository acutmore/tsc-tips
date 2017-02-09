
/**
 * properties can be marked as readonly
 * i.e const for properties 
 */

/**
 * INTERFACES
 */

interface I {
    foo: number;
}

// We can make a read only version of 'I' by marking properties as readonly
interface ReadOnlyI {
    readonly foo: number;
}

// Or just use the Polymorphic Readonly Type
const i: Readonly<I> = { foo: 1 };

// Trying to assign will error
// i.foo = 12;

/**
 * CLASSES
 */

class C {
    private readonly foo: number;

    constructor(
        private readonly database
    ){
        // DANGER! Can use before set 
        console.log(this.foo);
        // Can set in constructor
        this.foo = 1;
    }

    bar() {
        // Trying to assign will error
        // this.database = null;
    }
}

/**
 * ARRAYS
 */

// Just like Array<T> but with non of the mutating functionality
const arr: ReadonlyArray<number> = [1];
// arr.push(2);
// arr[0] = 0;

export default () => {};
