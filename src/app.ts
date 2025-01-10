type Product = {
    quantity: number,
    price: number,
    etat?: etat
}

type etat = "UT" | "NV" | "TX" | "AL" | "CA"

type Taxe = {
    etat: etat,
    tax: number
}

function calculTotal(product: Product): number {
    return product.price * product.quantity
}


console.log("Bienvenue sur votre application de vente")


console.log( "Quantité: ", 10, "Prix: ", 6)
console.log( "Total: ", calculTotal({quantity: 10, price: 6}))