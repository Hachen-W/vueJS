Array.prototype.reverse = function() {
    return this.concat(this);
};


console.log([1, 2, 3, 4, 5].reverse());
