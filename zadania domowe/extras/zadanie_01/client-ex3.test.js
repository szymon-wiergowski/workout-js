// EX 3. Let's write some tests for class methods
//  a) Something is missing for `getNextOrderNumber`. What will happened if client does not have any order as undefined 🙀
//     Write a test which verifies how it should behave, and then fix it in code! 
//     The correct order number for `undefined` orders should be "ISA-#1" 
//  b) `calculateDiscount` needs some tests - please write them. Notice the `ClientService` construtor!
//  c) New requirements arrived! Now if client type is `INTERNAL` he has extra +15% discount! (sums up with existing discounts)
//      Write test first, and then implement this new logic in `calculateDiscount` method (it is 1 extra `if` 😉)
//  d) Let's write 2-3 basic tests for `calculateNewOrderValue`

describe('getNextOrderNumber', () => {
    test('should generate correct number if client already made 2', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [100, 200],
            type: 'EXTERNAL'
        };

        // act
        const actual = service.getNextOrderNumber(client);

        // assert
        if (actual === 'ISA-#3') {
            return;
        } else {
            throw new Error(`Assertion failed! Actual="${actual}", where should be "ISA-#3"`);
        }
    });
});

test('should generate ISA-#1 if client does not have any order', () => {
    // arrange
    const service = new ClientService();

    const client = {
        orders: [],
        type: 'EXTERNAL'
    };

    // act
    const actual = service.getNextOrderNumber(client);

    // assert
    if (actual === 'ISA-#1') {
        return;
    } else {
        throw new Error(`Assertion failed! Actual="${actual}", where should be "ISA-#1"`);
    }
});

describe('calculateDiscount', () => {
    test('should return 0 for orders less than 500', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [100, 50, 100, 20],
            type: 'EXTERNAL'
        };

        // act
        const actual = service.calculateDiscount(client);

        // assert
        if (actual === 0) {
            return;
        } else {
            throw new Error(`Assertion failed' Actual="${actual}", where should be "0"`);
        }
    });

    test('should return 0.1 for orders higher than 500', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [100, 500, 100, 200],
            type: 'EXTERNAL'
        };

        // act
        const actual = service.calculateDiscount(client);

        // assert
        if (actual === 0.1) {
            return;
        } else {
            throw new Error(`Assertion failed' Actual="${actual}", where should be "0"`);
        }
    });

    test('should return 0 for orders equal 500', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [200, 300],
            type: 'EXTERNAL'
        };

        // act
        const actual = service.calculateDiscount(client);

        // assert
        if (actual === 0) {
            return;
        } else {
            throw new Error(`Assertion failed' Actual="${actual}", where should be "0"`);
        }
    });

    test('should return 0.15 for client `INTERNAL` ', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [100, 50, 100, 20],
            type: 'INTERNAL'
        };

        // act
        const actual = service.calculateDiscount(client);

        // assert
        if (actual === 0.15) {
            return;
        } else {
            throw new Error(`Assertion failed' Actual="${actual}", where should be "0.15"`);
        }
    });
});

describe('calculateNewOrderValue', () => {
    test('should return 850 for INTERNAL orders equal 1000 ', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [200, 50, 500, 250],
            type: 'INTERNAL'
        };

        // act
        let ordersValue = client.orders.reduce((acc, curr) => acc + curr, 0);
        const actual = service.calculateNewOrderValue(client, ordersValue);

        // assert
        if (actual === 850) {
            return;
        } else {
            throw new Error(`Assertion failed' Actual="${actual}", where should be "850"`);
        }
    });
    test('should return 495 for EXTERNAL orders equal 550 ', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [100, 50, 200, 200],
            type: 'EXTERNAL'
        };

        // act
        let ordersValue = client.orders.reduce((acc, curr) => acc + curr, 0);
        const actual = service.calculateNewOrderValue(client, ordersValue);

        // assert
        if (actual === 495) {
            return;
        } else {
            throw new Error(`Assertion failed' Actual="${actual}", where should be "495"`);
        }
    });
    test('should return 425 for INTERNAL orders equal 500 ', () => {
        // arrange
        const service = new ClientService();

        const client = {
            orders: [250, 50, 50, 100, 50],
            type: 'INTERNAL'
        };

        // act
        let ordersValue = client.orders.reduce((acc, curr) => acc + curr, 0);
        const actual = service.calculateNewOrderValue(client, ordersValue);

        // assert
        if (actual === 425) {
            return;
        } else {
            throw new Error(`Assertion failed' Actual="${actual}", where should be "425"`);
        }
    });
});
