export class OrderModel{

    constructor(orderID,orderDate,customerId,total){
        this._orderId=orderID;
        this._orderDate=orderDate;
        this._customerId=customerId;
        this._total=total;
        this._orderID = orderID;
    }


    get orderID() {
        return this._orderID;
    }

    set orderID(value) {
        this._orderID = value;
    }

    get orderDate() {
        return this._orderDate;
    }

    set orderDate(value) {
        this._orderDate = value;
    }

    get customerId() {
        return this._customerId;
    }

    set customerId(value) {
        this._customerId = value;
    }

    get total() {
        return this._total;
    }

    set total(value) {
        this._total = value;
    }
}