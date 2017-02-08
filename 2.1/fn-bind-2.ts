/**
 * The default Function.bind is unsafe 
 */

function foo(x: number): string {
    return 'bar';
}

const f = foo.bind(undefined, 1); // f has type 'any'

/**
 * We can write a safer one // TODO use this
 */

const c = new class {
    private c = 1;
    foo() {
        return this.c;
    }
}

function bind<This, T, R>(f: (this: This, t: T) => R, that: This, v: T): () => R {
    return f.call(that, v);
}

const f2 = bind(c.foo, c, 1); // f has type '() => string'

export default () => {};
