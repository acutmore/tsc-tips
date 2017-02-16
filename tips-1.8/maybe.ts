
/**
 * Using void and type guards to create a maybe type
 * (not a maybe monad)
 * Ideally guards.ts has been looked at first.
 */


/**
 * Dangerous
 */

class C {

    private x: string;

    setX() {
        this.x = 'hello';
    }

    // The compiler can not enforce this is only used safely (i.e after setX has been called)
    useX() {
        return this.x.concat(' world');
    }

}

/**
 * Enter Maybe<T>
 */

type Nothing = void;
type Maybe<T> = T | Nothing;

function isNothing<T>(m: Maybe<T>): m is Nothing {
    return m == null;
}

function exists<T>(m: Maybe<T>): m is T {
    return !isNothing(m);
}

// Example use:

class C2 {

    private x: Maybe<string>;

    setX() {
        this.x = 'hello';
    }

    useX() {
        const x = this.x;
        // Compiler requires this check
        if (exists(x)) {
            return x.concat(' world');
        }
        return 'too early';
    }

}

export default () => {};
