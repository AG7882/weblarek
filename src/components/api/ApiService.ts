import { IApi, CatalogResponse, OrderPayload } from "../../types/index";

export class ApiService {
  private iApi: IApi;

  constructor(private api: IApi) {
    this.iApi = api;
  }

  async getProducts(): Promise<CatalogResponse> {
    return this.iApi.get<CatalogResponse>("/product/");
  }

  async sendOrder(data: OrderPayload): Promise<void> {
    this.iApi.post("/order/", data);
  }
}
