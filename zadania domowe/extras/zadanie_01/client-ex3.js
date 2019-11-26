const ORDER_PREFIX = 'ISA';

class ClientService {
    constructor(minimalPurchaseForDiscount = 500) {
        this.minimalPurchaseForDiscount = minimalPurchaseForDiscount;
    }

    getNextOrderNumber(client) {
        if (client.orders.length > 0) {
            return `${ORDER_PREFIX}-#${client.orders.length + 1}`;
        } else {
            return `${ORDER_PREFIX}-#1`
        }
    }

    calculateDiscount(client) {
        const ordersValue = client.orders.reduce((acc, curr) => acc + curr, 0);

        let discount = 0;
        if (client.type === 'INTERNAL') {
            discount += 0.15;
        } else if (ordersValue > this.minimalPurchaseForDiscount) {
            discount += 0.10;
        }
        return discount;
    }






    calculateNewOrderValue(client, ordersValue) {
        return ordersValue - this.calculateDiscount(client) * ordersValue;
    }
}