import { IBuyer, TPayment, ValidationErrors } from "../../types/index";

export class Buyer /*implements IBuyer*/ {
  private _payment: TPayment = "";
  private _email: string = "";
  private _phone: string = "";
  private _address: string = "";

  constructor() {
    /* this._payment = "";
    this._email = "";
    this._phone = "";
    this._address = "";*/
  }

  saveData(data: Partial<IBuyer>): void {
    if (data.payment !== undefined) this._payment = data.payment;
    if (data.address !== undefined) this._address = data.address;
    if (data.phone !== undefined) this._phone = data.phone;
    if (data.email !== undefined) this._email = data.email;
  }

  getData(): IBuyer {
    return {
      payment: this._payment,
      email: this._email,
      phone: this._phone,
      address: this._address,
    };
  }

  clearData(): void {
    this._payment = "";
    this._address = "";
    this._phone = "";
    this._email = "";
  }

  validate(): ValidationErrors {
    const errors: ValidationErrors = {};

    if (!this._payment) {
      errors.payment = "Необходимо выбрать вид оплаты";
    }
    if (!this._address.trim()) {
      errors.address = "Необходимо указать адрес доставки";
    }
    if (!this._phone.trim()) {
      errors.phone = "Необходимо ввести номер телефона";
    }
    if (!this._email.trim()) {
      errors.email = "Необходимо ввести email";
    }

    return errors;
  }
}
