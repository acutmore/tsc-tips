
/**
 * Avoid un-initialised protected properties in classes
 */

/**
 * BAD
 */

abstract class Sub {

    protected x: string;

    foo() {
        // nothing enforcing this.x to be defined
        return this.x.concat('foo');
    }

}

class C extends Sub {
    // Compiler does not enforce that protected property is set
    //protected x = 'test';
}

const c = new C();
c.foo();

/**
 * GOOD
 */

abstract class SafeSub {

    constructor(
        private x: string
    ){
    }

    foo() {
        return this.x.concat('foo');
    }

}

class SafeC extends SafeSub {

    constructor(){
        // Compiler will error if property is not set
        super('bar');
    }

}

const c2 = new SafeC();

export default () => {};
