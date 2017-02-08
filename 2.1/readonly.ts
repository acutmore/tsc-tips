
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

interface ReadOnlyI {
    readonly foo: number;
}

type ReadOnlyI2 = Readonly<I>;

const i: ReadOnlyI2 = { foo: 1 };

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

const arr: ReadonlyArray<number> = [1];
// arr.push(2);
// arr[0] = 0;

export default () => {};
