// 1) Написать тип для функции, которая принимает один аргумент - число или строку. 
// Если пришло число - возвращает {d: 1}, если пришла строка {z: 2}


// f(1).d
// f("t").z


type Type = {
    (arg: number): { d: 1 };
    (arg: string): { z: 2 };
}


function f(arg: number): { d: 1 };
function f(arg: string): { z: 2 };
function f(arg: number | string) {
    if (typeof arg === 'number') {
        return { d: 1 };
    }
    return { z: 2 };
}

const res1 = f(1);
const res2 = f("test");

console.log(res1.d);  // 1
console.log(res2.z);  // 2


// 2) Реализовать класс SomeClass:


// Реализовать класс SomeClass:


class SomeClass<T> {
    private methods: T;

    constructor(methods: T) {
        this.methods = methods;
    }

    run<K extends keyof T>(name: K, arg: Parameters<T[K]>[0]): ReturnType<T[K]> {
        const method = this.methods[name];
        if (typeof method === "function") {
            return method(arg);
        }
        throw new Error("Такого метода не существует");
    }
}

const methods = {
    runMethodOne: (arg: number) => console.log('runMethodOne', arg),
    runMethodTwo: (arg: any) => console.log('runMethodTwo', arg)
};

const instance = new SomeClass(methods);

instance.run("runMethodOne", 1);   // runMethodOne 1
instance.run("runMethodTwo", null); // runMethodTwo null
instance.run("runMethodsdjhfbs", null); // Ошибка
