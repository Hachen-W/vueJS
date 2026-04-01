function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

function process() {
    const original = {
        a: 1,
        b: [2, 3, { d: 4 }],
        c: { e: 5 },
    };

    const copiedObject = deepClone(original);

    copiedObject.b[2].d = 10;
    console.log(original.b[2].d);
    console.log(copiedObject.b[2].d);

    console.log(original);
    console.log(copiedObject);
}

process()
