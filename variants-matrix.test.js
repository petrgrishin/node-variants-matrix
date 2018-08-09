const should = require('should');

const { VariantsMatrix } = require('./index');

describe('Matrix', () => {
    describe('create by variants', () => {
        it ('without null', () => {
            const matrix = new VariantsMatrix({
                a: [1, 11],
                b: [2, 22],
            });
            should([...matrix]).deepEqual([
                { a: 1, b: 2 },
                { a: 1, b: 22 },
                { a: 11, b: 2 },
                { a: 11, b: 22 }
            ]);
        });

        it ('with null', () => {
            const matrix = new VariantsMatrix({
                a: [1, null],
                b: [2, null],
            });
            should([...matrix]).deepEqual([
                { a: 1, b: 2 },
                { a: 1, b: null },
                { a: null, b: 2 },
                { a: null, b: null }
            ]);
        });
    });
});
