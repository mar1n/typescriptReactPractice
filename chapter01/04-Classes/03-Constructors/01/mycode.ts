class Product {
    name: '';
    unitPrice: number;
  }
  
  interface IOrderDetail {
    product: Product;
    quantity: number;
    getTotal(discount: number): number;
  }
  
  class OrderDetail implements IOrderDetail {
    product: Product;
    quantity: number;
  
    getTotal(discount: number): number {
      const priceWithoutDiscount = this.product.unitPrice * this.quantity;
      const discountAmount = priceWithoutDiscount * discount;
      return priceWithoutDiscount - discountAmount;
    }
  }
  