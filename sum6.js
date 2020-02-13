let a = [3, 10, 18, 20];
let findElement = (arr,el) => {
    const index = arr.findIndex((item) => { return item == el });
    return index == -1 ? null : index
}
console.log(findElement(a,20));