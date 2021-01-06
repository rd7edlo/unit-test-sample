/**
 * Created by ed_lo on 2021/1/6
 */

class Calculator {
    sum(first, second) {
        return first + second;
    }
}

describe('calculator', function() {
    it('positive add positive', () => {
        const calculator = new Calculator();
        const sum = calculator.sum(1, 2);
        expect(sum).toBe(3);
    })
})