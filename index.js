const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

const currying = (fn) => {
    let num = 9;
    return (...args) => {
        if(args.length === 0){
            return num;
        }
        return currying(fn);
    }
}

const throttle = (fn, delay) => {
    let timeout;
    return (...args) => {
        if(!timeout){
            fn(...args);
            timeout = setTimeout(() => {
                timeout = null;
            }, delay);
        }
    }
}