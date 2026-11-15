import { IApi, CatalogResponse, OrderPayload } from "../../types/index";

export class ApiService {
  private iApi: IApi;

  constructor(api: IApi) {
    this.iApi = api;
  }

  getProducts(): Promise<CatalogResponse> {
    return this.iApi.get<CatalogResponse>("/product/");
  }

  sendOrder(data: OrderPayload): Promise<OrderPayload> {
    return this.iApi.post<OrderPayload>("/order/", data);
  }
}
