'use strict';

const { Matrix } = require('node-matrix-object');

const createMatrix = (variants, variant = null, level = null, result = null, sizeArr = null, arKeys = null) => {
    variant = { ...variant };
    level = level === null ? -1 : level;
    result = result || [];
    sizeArr = sizeArr !== null ? sizeArr :  Object.keys(variants).length;
    arKeys = arKeys || Object.keys(variants);
    level++;
    if (level < sizeArr){
        for (const val of variants[arKeys[level]]) {
            variant[arKeys[level]] = val;
            result = createMatrix(variants, variant, level, result, sizeArr, arKeys);
        }
    } else {
        result.push(variant);
    }
    return result;
};

/**
 * Variants Matrix
 */
class VariantsMatrix extends Matrix {
    constructor(variants) {
        super(createMatrix(variants));
    }
}

module.exports = {
    VariantsMatrix,
};
