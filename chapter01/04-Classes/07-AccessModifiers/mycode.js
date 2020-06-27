var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var OrderDetail = /** @class */ (function () {
    function OrderDetail() {
    }
    OrderDetail.prototype.getTotal = function (discount) {
        var priceWithoutDiscount = this.product.unitPrice * this.quantity;
        var discountAmount = priceWithoutDiscount * discount;
        return priceWithoutDiscount - discountAmount;
    };
    OrderDetail.prototype["delete"] = function () {
        this.deleted = true;
    };
    return OrderDetail;
}());
var orderDetail = new OrderDetail();
orderDetail.deleted = true;
