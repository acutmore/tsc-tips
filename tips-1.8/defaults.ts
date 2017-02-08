/**
 *  Avoid adding default arguments to a position where there is already a default argument of the same type
 */

/**
 * BAD
 */

function foo(
    // Adding a new default bool argument here is dangerous e.g:
    // deleteEverything: boolean = false,
    log: boolean = false
) {
}

foo(true); // no compiler error but is now deleting everything

/**
 * GOOD
 */

function goodFoo(
    log: boolean = false
    // Add new defaults to the end is safer e.g:
    , deleteEverything: boolean = false 
) { 
}

// Better - Use object to emulate named arguments
function betterFoo(
    {
        log = false
        // Adding a new parameter will not compete with existing parameters
        , deleteEverything = false
    } = {}
) {
}

// And is clearer at the call site
betterFoo({ log: true });

// More Better - Use new types instead of booleans.

const enum Log {
    ALL,
    NONE
}

enum Delete {
    ALL,
    NONE
}

function moreBetterFoo(
    log: Log = Log.NONE,
    del: Delete = Delete.NONE
) {
}

moreBetterFoo(Log.ALL, Delete.ALL);

// ...easier to curry than using an object for all parameters
const curryableFoo = (log: Log) => (del: Delete) => () => {};
const noLogFoo = curryableFoo(Log.NONE);
const noLogDeleteAllFoo = noLogFoo(Delete.ALL);
noLogDeleteAllFoo();

export default () => {};
