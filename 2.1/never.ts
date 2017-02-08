
enum STATE {
    A, B, C
}

function error(): never {
    throw new Error();
}

function process(s: STATE): void {
    switch (s) {
        case STATE.A:
            console.log('a');
        case STATE.B:
            console.log('b');
        default:
            return error();
    }
}