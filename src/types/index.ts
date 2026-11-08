export type ApiPostMethods = "POST" | "PUT" | "DELETE";

export type TPayment = { method: "card" | "cash" | "" };

export interface IApi {
  get<T extends object>(uri: string): Promise<T>;
  post<T extends object>(
    uri: string,
    data: object,
    method?: ApiPostMethods,
  ): Promise<T>;
}

export interface CatalogResponse {
  total: number;
  items: IProduct[];
}

export interface OrderPayload {
  Id: string;
  total: number;
} 

export interface IProduct {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number | null;
}

export interface IBuyer {
  payment: TPayment;
  email: string;
  phone: string;
  address: string;
}

export interface ValidationError {
  payment?: string;
  address?: string;
  phone?: string;
  email?: string;
}


