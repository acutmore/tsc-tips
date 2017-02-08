/**
 * The default Function.bind is unsafe 
 */

function foo(x: number): string {
    return 'bar';
}

const f = foo.bind(undefined, 1); // f has type 'any'

/**
 * We can write a safer one
 */

function bind<T, R>(f: (t: T) => R, v: T): () => R {
    return () => f(v);
}

const f2 = bind(foo, 1); // f has type '() => string'

export default () => {};
