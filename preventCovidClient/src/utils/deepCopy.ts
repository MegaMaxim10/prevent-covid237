export function clone(target: any, source: any) {

// tslint:disable-next-line: forin
    for (const key in source) {

        // Use getOwnPropertyDescriptor instead of source[key] to prevent from trigering setter/getter.
        const descriptor = Object.getOwnPropertyDescriptor(source, key);
        if (descriptor !== undefined && typeof(source[key]) === 'string') {
            target[key] = source[key] as string;
        } else if (descriptor !== undefined &&  source[key] instanceof Array) {
            target[key] = clone([], source[key]);
        } else if (descriptor !== undefined &&  source[key] instanceof Object) {
            const prototypeA = Reflect.getPrototypeOf(source[key]);
            const cloneObject = clone({}, source[key]);
            Reflect.setPrototypeOf(cloneObject, prototypeA);
            target[key] = cloneObject;
        } else if (descriptor !== undefined) {
            // Object.defineProperty(target, key, descriptor);
            target[key] = source[key];
        }
    }
    const prototype = Reflect.getPrototypeOf(source);
    Reflect.setPrototypeOf(target, prototype);
    return target;
}
