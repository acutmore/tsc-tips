(() => {
/**
 * Avoid type asserting
 */

interface Pos {
    x: number;
    y: number;
    //z: number;
}

// Bad
function foo() {
    return <Pos>{ x: 1, y: 1 };
}

const bar = () => <Pos>({ x: 1, y: 1 });

// Good
function goodFoo(): Pos {
    return { x: 1, y:1 };
}

const goodBar = (): Pos => ({ x: 1, y: 1 });

});