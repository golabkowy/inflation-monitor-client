export class ProductModel {
  constructor(
    public id: number,
    public name: string,
    public price: string,
    public shop: string,
    public date: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.shop = shop;
    this.date = date;
  }
}
