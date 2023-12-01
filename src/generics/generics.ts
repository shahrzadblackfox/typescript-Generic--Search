interface IFooBar {
    foo: string;
    bar: string;
}

const fooBars: Array<IFooBar> = [
    {
        foo: "one",
        bar: "one bar"
    },
    {
        foo: "two",
        bar: "two bar"
    },
    {
        foo: "three",
        bar: "three bar"
    },
];

function sortFoobar (fooBars:Array<IFooBar>){
    fooBars.sort((a,b) => {
        if (a.foo > b.foo){
            return 1
        }
        if(a.foo < b.foo ){
            return -1
        }
        return 0
       
    })
}
function sortBars (fooBars:Array<IFooBar>){
    fooBars.sort((a,b) => {
        if (a.bar > b.bar){
            return 1
        }
        if(a.bar < b.bar ){
            return -1
        }
        return 0
       
    })
}

function sortThing<T>(data : Array<T>, key: keyof T){
    data.sort((a,b)=>{
        if(a[key] > b[key]){
            return 1
        }
        if(a[key] < b[key]){
            return -1
        }
        return 0
    })
}

sortThing<IFooBar>(fooBars, 'foo')