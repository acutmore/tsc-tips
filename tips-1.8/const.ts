/**
 * Marking identifiers as const prevents accidental assignment
 */

/**
 * BAD
 */

let x = 0;

// Compiler won't catch the most likely unintentional assignment
if (x = 1) {
    console.log('x is always 1...');
}

/**
 * GOOD
 */

const y = 0;

// Compiler will catch an accidental assignment
// if (y = 1) {
if (y == 1) {
    
}