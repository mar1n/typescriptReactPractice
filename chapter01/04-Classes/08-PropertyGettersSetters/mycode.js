var Product = /** @class */ (function () {
    function Product() {
    }
    Object.defineProperty(Product.prototype, "unitPrice", {
        get: function () {
            return this._unitPrice || 0;
        },
        set: function (value) {
            if (value < 0) {
                value = 0;
            }
            this._unitPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var table = new Product();
table.name = "Table";
console.log(table.unitPrice);
table.unitPrice = -10;
console.log(table.unitPrice);
