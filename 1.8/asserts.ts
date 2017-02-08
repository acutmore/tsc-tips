/**
 * Avoid type asserting
 */

interface Pos {
    x: number;
    y: number;
    //z: number;
}

/**
 * BAD
 */

// If 'z' is added to Pos this will still compile
function foo() {
    return <Pos>{ x: 1, y: 1 };
}

const bar = () => <Pos>({ x: 1, y: 1 });

/**
 * GOOD
 */

// The compiler will catch this error when 'z' is added
function goodFoo(): Pos {
    return { x: 1, y:1 };
}

const goodBar = (): Pos => ({ x: 1, y: 1 });

export default () => {};
