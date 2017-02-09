
/**
 * Can enable 'strictNullChecks' in the compiler settings
 */

function foo(s: string): string {
    return s;
}

/**
 * Undefined and Null are now no longer members of the other types
 * i.e undefined and null can't be used as strings, numbers, arrays etc
 */

// These won't compile:
//let x: string = null;
//foo(undefined);

/**
 * If a variable may contain null/undefined it must be made explicit
 * Though it is probably better to avoid null all together
 */

let y: string | null = null;

if (y) {
    foo(y);
}

y = 'test';

foo(y);

export default () => {};
