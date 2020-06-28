export interface Product {
  name: string;
  unitPrice: number;
}

export class OrderDetail {
  product: Product;
  quantity: number;
  getTotal(discount: number): number {
    if(discount) {
      const priceWithoutDiscount = this.product.unitPrice * this.quantity;
      const discountAmount = priceWithoutDiscount * (discount || 0);
      return priceWithoutDiscount - discountAmount;
    } else {
      //We fo
    }
  } 
  doSomething(input: {something: () => void, result: string}) {
    input.something();
    return input.result;
  }
}