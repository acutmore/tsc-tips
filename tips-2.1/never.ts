
/**
 * No other type is assignable to a 'never'.
 * This can be used to assert at compile time that particular condition branches are unreachable 
 */

function error(x: never): never {
    throw new Error();
}

/**
 * Simple example
 */

function foo(s: 
    string
    | boolean
    // When adding an additional option the compiler will catch that the logic is incomplete
    // | number
) {
    if (typeof s === 'boolean') {
        console.log('here');
    } else if (typeof s === 'string') {
        console.log('there');
    } else {
        error(s);
    }
}

/**
 * Catching missing switch statements
 */

enum STATE {
    A,
    B,
    // Adding a new STATE will produce an error in the switch statement bellow
    //C
}

function process(s: STATE): void {
    switch (s) {
        case STATE.A:
            console.log('a');
            break;
        case STATE.B:
            console.log('b');
            break;
        // Adding a case for the new STATE will then allow the code to compile again
        //case STATE.C: break;
        default:
            // If the compile thinks this line of code may run it will error
            // as s will have some value other than never
            error(s);
    }
}

export default () => {};
