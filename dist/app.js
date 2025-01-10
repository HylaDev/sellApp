import * as readline from 'readline';
const taxes = {
    UT: 6.85,
    NV: 8.00,
    TX: 6.25,
    AL: 4.00,
    CA: 8.25
};
const remises = {
    1000: 3,
    5000: 5,
    7000: 7,
    10000: 10,
    50000: 15
};
function calculRemise(subtotal) {
    if (subtotal <= 0) {
        throw new Error("Le sous-total doit être supérieur à 0");
    }
    let remise = 0;
    for (const seuil in remises) {
        if (subtotal >= parseFloat(seuil)) {
            remise = remises[seuil];
        }
    }
    console.log("Remise: ", remise);
    return remise;
}
function calculTotal(product) {
    if (product.quantity <= 0) {
        throw new Error("La quantité doit être supérieure à 0");
    }
    if (product.price <= 0) {
        throw new Error("Le prix doit être supérieur à 0");
    }
    if (product.etat && !taxes[product.etat]) {
        throw new Error("L'état fourni n'est pas valide");
    }
    const subtotal = product.price * product.quantity;
    const remise = calculRemise(subtotal);
    const totalApresRemise = subtotal * (1 - remise / 100);
    const taxRate = product.etat ? taxes[product.etat] : 0;
    return totalApresRemise * (1 + taxRate / 100);
}
// const product: Product = { quantity: 978, price: 270.99, etat: "UT" };
// console.log("Quantité: ", product.quantity, "Prix: ", product.price);
// console.log("Total: ", calculTotal(product));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Bienvenue sur votre application de vente");
rl.question('Entrez la quantité: ', (quantity) => {
    rl.question('Entrez le prix: ', (price) => {
        rl.question('Entrez l\'état (UT, NV, TX, AL, CA): ', (etat) => {
            const product = { quantity: parseInt(quantity), price: parseFloat(price), etat: etat };
            console.log("Quantité: ", product.quantity, "Prix: ", product.price);
            console.log("Total: ", calculTotal(product));
            rl.close();
        });
    });
});
