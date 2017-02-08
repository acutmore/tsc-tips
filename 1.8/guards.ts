(() => {
/**
 * Use type guards 
 */

interface Data {
    a: number;
}

// Bad
const a: Data[] = [].filter(_ => _.a != null).map(_ => _ as Data);

// Good
function isData(o: any): o is Data {
    return o && o.a != null;
}

type Guard<T> = (o: any) => o is T;

function filter<T>(guard: Guard<T>, arr: any[]) : T[] {
    return arr.filter(guard);
}

const b: Data[] = filter(isData, []);

// Example 2

// Bad
function sum(arr: any[]) {
    return arr.reduce((a, b) => a + b);
}

// Good
interface NonEmptyArray<T> extends Array<T> { DO_NOT_USE: void };

function isNonEmptyArray<T>(arr: T[]): arr is NonEmptyArray<T> {
    return arr && arr.length > 0;
}

function reduce(arr: NonEmptyArray<any>) {
    return arr.reduce(() => void 0);
}

function sum2(arr: any[]) {
    //if (isNonEmptyArray(arr))
        return reduce(arr);
}

});