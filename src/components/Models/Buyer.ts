import { IBuyer, TPayment, ValidationError } from "../../types/index";

export class Buyer implements IBuyer {
  payment: TPayment;
  email: string;
  phone: string;
  address: string;

  constructor(data: IBuyer) {
    this.payment = data.payment;
    this.email = data.email;
    this.phone = data.phone;
    this.address = data.address;
  }

  saveData(
    payment?: TPayment,
    address?: string,
    phone?: string,
    email?: string,
  ): void {
    if (payment !== undefined) this.payment = payment;
    if (address !== undefined) this.address = address;
    if (phone !== undefined) this.phone = phone;
    if (email !== undefined) this.email = email;
  }

  getData(): IBuyer {
    return {
      payment: this.payment,
      email: this.email,
      phone: this.phone,
      address: this.address,
    };
  }

  clearData(): void {
    this.payment = { method: "" };
    this.address = "";
    this.phone = "";
    this.email = "";
  }

  validate(): ValidationError {
    const errors: ValidationError = {};

    if (!this.payment) {
      errors.payment = "Необходимо выбрать вид оплаты";
    }
    if (!this.address.trim()) {
      errors.address = "Необходимо указать адрес доставки";
    }
    if (!this.phone.trim()) {
      errors.phone = "Необходимо ввести номер телефона";
    }
    if (!this.email.trim()) {
      errors.email = "Необходимо ввести email";
    }

    return errors;
  }
}
