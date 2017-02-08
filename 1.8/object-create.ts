/**
 * The default Object.create is unsafe
 */


const a = Object.create({a: 1}); // A has type any

/**
 * We can write a safer one
 */

function objectCreate<T>(o: T): T {
    return Object.create(o);
}

const a2 = objectCreate({a: 1}); // a2 has type { a: number }

export default () => {};
