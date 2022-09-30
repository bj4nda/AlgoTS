function add1(param1: number, param2 : number) : number {
    return param1 + param2;
}

function add2(...param1: number[]) : number {
    console.log(param1);
    let total = 0;
    param1.forEach(num => total += num);
    return total;
   }

console.log(add1(1,2))
console.log(add2(1,1,2,3,45,6,7));