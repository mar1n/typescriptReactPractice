var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var OrderDetail = /** @class */ (function () {
    function OrderDetail(product, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.product = product;
        this.quantity = quantity;
    }
    OrderDetail.prototype.getTotal = function (discount) {
        var priceWithoutDiscount = this.product.unitPrice * this.quantity;
        var discountAmount = priceWithoutDiscount * discount;
        return priceWithoutDiscount - discountAmount;
    };
    return OrderDetail;
}());
var table = new Product();
table.name = "Table";
table.unitPrice = 500;
var orderDetail = new OrderDetail(table);
