/**
 * Use type guards 
 */

interface Data {
    a: number;
}

/**
 * BAD:
 */

// Mapping to a new type based on the previous .filter making it 'safe'
// Compiler is letting us do this even if not actually safe
const a: Data[] = [].filter(_ => _.a != null).map(_ => _ as Data);

/**
 * GOOD:
 */

// Create a type guard
type Guard<T> = (o: any) => o is T;

function isData(o: any): o is Data {
    return o && o.a != null;
}

// Update filter to word with guards
function filter<T>(guard: Guard<T>, arr: any[]) : T[] {
    return arr.filter(guard);
}

// Filter and map types in one step that the compiler is confirming
const b: Data[] = filter(isData, []);

/**
 * VALUES ARE TYPES
 * - Types can be formed from subsets of another Type.
 * - Instead of just 'Integer' how about 'Prime', 'Even', 'Non-Zero'
 */

function add(a: number, b: number): number {
    return a + b;
}

/**
 * BAD
 */

function sum(arr: number[]) {
    return arr.reduce(add);
}

sum([]); // Run-time TypeError: reduce of empty array with no initial value

/**
 * GOOD
 */

interface NonEmptyArray<T> extends Array<T> {
    // Below required so structure is different from Array 
    // e.g const x: NonEmptyArray<any> = [] will not work
    __EMPTY_ARRAY__: void;
}

function isNonEmptyArray<T>(arr: T[]): arr is NonEmptyArray<T> {
    return arr && arr.length > 0;
}

function safeReduce<T,R>(
    arr: Array<T>,
    fn: (acc: R, curr: T) => R,
    initial: R
): R;

function safeReduce<T, R>(
    arr: NonEmptyArray<T>,
    fn: (acc: R, curr: T) => R
): R;

function safeReduce<T,R>(
    arr: Array<T>,
    fn: (acc: R, curr: T) => R,
    initial?: R
): R {
    return arr.reduce(fn, initial);
}

// Compiler will error if try to reduce a possibly empty array without an initial value e.g:
// safeReduce<number, number>([], add);

function safeSum(arr: number[]): number {
    if (isNonEmptyArray(arr)) {
        // Safe to omit the initial value as array is non-empty
        return safeReduce(arr, add);
    } else {
        return safeReduce(arr, add, 0);
    }
}

export default () => {};
