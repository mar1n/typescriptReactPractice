var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var OrderDetails = /** @class */ (function () {
    function OrderDetails() {
    }
    OrderDetails.getTotal = function (unitPrice, quantity, discount) {
        var priceWithoutDiscount = unitPrice * quantity;
        var discountAmount = priceWithoutDiscount * discount;
        return priceWithoutDiscount - discountAmount;
    };
    return OrderDetails;
}());
var total = OrderDetails.getTotal(500, 2, 0.1);
console.log(total);
