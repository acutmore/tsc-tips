/**
 * The type of 'this' can be specified in typescript 2.1 
 */

/**
 * BAD
 */

const c = new class {
    private i = 1;
    foo() {
        return this.i;
    }
}

const f = c.foo;
f(); // no error


/**
 * GOOD
 */

const c2 = new class {
    private c = 1;
    // Explicity specify the implicit this argument
    foo(this: this) {
        return this.c;
    }
}

const f2 = c2.foo;
// f2(); // compiler will catch this error

export default () => {};
