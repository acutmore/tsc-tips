(() => {
/**
 *  Avoid adding default arguments anywhere there is already a default argument
 */

// Bad
function foo(
    a: string,
    //deleteEverything: boolean = false
    log: boolean = false
) {
}

foo('test', true); // no compiler error but is now deleting everything

// Good
function goodFoo(
    a: string,
    log: boolean = false,
    deleteEverything: boolean = false
) { 
}

// Better
function betterFoo(a: string, {
    log = false,
    deleteEverything = false   
} = {}) {
    
}

betterFoo('hi', { log: true });

// More Better

enum Log {
    ALL,
    None
}

enum Delete {
    All,
    None
}

function moreBetterFoo(
    a: string,
    log: Log = Log.None
) {
}

moreBetterFoo('yo', Log.ALL);

});