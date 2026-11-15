import { IProduct } from "../../types/index";

export class Catalog {
  private products: IProduct[];
  private selectedProduct: IProduct | null;

  constructor() {
    this.products = [];
    this.selectedProduct = null;
  }

  setProducts(products: IProduct[]): void {
    this.products = products;
  }

  getProducts(): IProduct[] {
    return this.products;
  }

  getProductById(id: string): IProduct | undefined {
    return this.products.find((item) => item.id === id) || undefined;
  }

  setSelectedProduct(product: IProduct): void {
    this.selectedProduct = product;
  }

  getSelectedProduct(): IProduct | null {
    return this.selectedProduct;
  }
}
