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
    return OrderDetail;
}());
var table = new Product();
table.name = 'Table';
table.unitPrice = 500;
var orderDetail = new OrderDetail();
orderDetail.product = table;
orderDetail.quantity = 2;
var total = orderDetail.getTotal(0.1);
console.log(total);
