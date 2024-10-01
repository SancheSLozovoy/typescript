// Описать типы для каждого элемента. 
// Выполненное задание приложить в файле.


// TODO Enum
enum actionMap {
    Add = 'add',
    Delete = 'delete',
    Update = 'update'
}


// TODO Interface
interface FunctionProps {
    id: number;
    isActive: boolean;
    callback: () => void;
}


interface FunctReturn {
    name: string;
    value: number;
}


function func({ id, isActive, callback }: FunctionProps): FunctReturn[] {
    return [
        { name: 'name', value: 123 }
    ]
}
func({ id: 1, isActive: true, callback: () => { } });


// TODO Interface
interface Item {
    id: number;
    name: string;
    items: Item[] | null
}


interface A {
    id: number;
    name: string;
    items: Item[];
}


const a: A = {
    id: 123,
    name: 'Eric',
    items: [
        {
            id: 55,
            name: 'Masha',
            items: []
        },
        {
            id: 34,
            name: 'Max',
            items: null
        }
    ]
};


// Ключ может оказаться любым. Нужно создать интерфейс, описывающий объект 
// n (типизировать ключи и значения)


interface N {
    [key: string]: (value: number) => string;
}


const n: N = {
    smth: function (number) {
        return 'test';
    },
    smth2: function (number) {
        return 'test';
    },
    smth3: function (number) {
        return 'test';
    }
};



