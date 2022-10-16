function addAdjacent(n: number[]): number {
    let largestProduct = n[0] * n[1];

    for (let i = 1; i < n.length - 1; i++) {
        const product = n[i] * n[i + 1]
        largestProduct = largestProduct < product ? product : largestProduct;
    }

return largestProduct;
}

console.log(addAdjacent([1,2,56,-6,3,1]))