"use strict";
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
    const subtotal = product.price * product.quantity;
    const remise = calculRemise(subtotal);
    const totalApresRemise = subtotal * (1 - remise / 100);
    const taxRate = product.etat ? taxes[product.etat] : 0;
    return totalApresRemise * (1 + taxRate / 100);
}
const product = { quantity: 978, price: 270.99, etat: "UT" };
console.log("Quantité: ", product.quantity, "Prix: ", product.price);
console.log("Total: ", calculTotal(product));
