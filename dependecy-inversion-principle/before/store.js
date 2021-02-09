//In order to use paypal we have to change Store
class Store {
    constructor(user) {
        this.user = user;
        // this.stripe = new Stripe(user);
        this.paypal = new Paypal()
    }

    purchaseBike(qty) {
        // this.stripe.makePayment(200 * qty * 100);
        this.paypal.makePayment(this.user, 200 * qty);
    }

    purchaseHelmet(qty) {
        // this.stripe.makePayment(15 * qty * 100);
        this.paypal.makePayment(this.user, 15 * qty);
    }
}

class Stripe {
    constructor(user) {
        this.user = user;
    }

    makePayment(amountInCents) {
        console.log(`${this.user} made payment of ${amountInCents / 100} with Stripe`);
    }
}

class Paypal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of ${amountInDollars} with Paypal`);
    }
}

const store = new Store('John');
store.purchaseBike(2);
store.purchaseHelmet(3);