export function forEach() {
    let [arg, fn] = [...arguments];
    if (Object.prototype.toString.call(arg).slice(8, -1) === 'Object') {
        for (let key in arg) {
            if (arg.hasOwnProperty(key)) {
                fn.call(arg, arg[key], key, arg)
            }
        }
    }
    if (Object.prototype.toString.call(arg).slice(8, -1) === 'Array') {
        for (let i = 0; i < arg.length; i++) {
            fn.call(arg, arg[i], i, arg)
        }
    }
}
