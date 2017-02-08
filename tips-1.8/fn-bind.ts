/**
 * The default Function.bind is unsafe 
 */

function foo(x: number): string {
    return 'bar';
}

const f = foo.bind(undefined, 1); // f has type 'any'

/**
 * We could write a safer one
 */

type Function<T, R> = (t: T) => R;

function bind<T, R>(f: Function<T,R>, t: T): () => R {
    return () => f(t);
}

const f2 = bind(foo, 1); // f2 has type '() => string'

/**
 * Best to bind using closures
 */

const f3 = () => foo(1); // f3 has type '() => string'

/**
 * this binding
 */

const c = new class {
    private i = 1;
    foo() {
        return this.i;
    }
}

const f4 = c.foo.bind(this); // f4 has type 'any'

const f5 = () => c.foo(); // f5 has type '() => number'

export default () => {};
