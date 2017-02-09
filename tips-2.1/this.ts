/**
 * The type of 'this' can be specified in typescript 2.1 
 */

/**
 * BAD
 */

const c = new class {
    private s = "test";
    foo() {
        return this.s.concat("foo");
    }
}

const f = c.foo;
f(); // Run-time TypeError: Cannot read property 'concat' of undefined 


/**
 * GOOD
 */

const c2 = new class {
    private s = "test";
    // Explicity specify the implicit this argument
    foo(this: this) {
        return this.s.concat("foo");
    }
}

const f2 = c2.foo;
// f2(); // compiler will now catch this error

export default () => {};
