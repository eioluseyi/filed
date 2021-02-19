/**
Create DTO for modeling Credit Card Payment details like below, which will be used to make
requests
a. Credit Card Number (mandatory, string)
b. Card Holder (mandatory, string)
c. Expiration Date (mandatory, Date, >CurrentDate)
d. Security Code - CCV (optional, string, 3 digits)
e. Amount (mandatory, number, > 0)
 */

export class CreditCardPaymentDetails {
    constructor(
        public creditCardNumber: string,
        public cardHolder: string,
        public expirationDate: Date,
        public amount: number,
        public ccv?: string,
    ) {
        if (expirationDate < new Date()) {
            throw new Error('expiration date must be greater than today!');
        }
        if (amount <= 0) {
            throw new Error('amount must be greater than 0');
        }
        if (ccv && ccv.length !== 3) {
            throw new Error('cvv must be 3-digits');
        }
    }
}

// const dto = new CreditCardPaymentDetails();