describe('prompt.js', function () {
    describe('validatePhoneNumber', function () {
        it('shout return a boolean', function () {
            var result = validatePhoneNumber('23456');
            expect(typeof result).toBe('boolean');
        });
        it('shout return true when give a 1-800 number', function () {
            var result = validatePhoneNumber('1-800-867-5309');
            expect(result).toBe(true);
        });
    });
});