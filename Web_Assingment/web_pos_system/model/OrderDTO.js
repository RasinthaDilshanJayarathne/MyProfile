function OrderDTO(orderId, customerId, date, discount, total) {
    var __oid = orderId;
    var __cid = customerId;
    var __date = date;
    var __discount = discount;
    var __tot = total;

    this.getOrderId = function () {
        return __oid;
    }
    this.setOrderId = function (orderId) {
        this.__oid = orderId;
    }

    this.getCustomerID = function () {
        return __cid;
    }
    this.setCustomerID = function (customerId) {
        this.__cid = customerId;
    }

    this.getDate = function () {
        return __date;
    }
    this.setDate = function (date) {
        this.__date = date;
    }

    this.getDiscount = function () {
        return __discount;
    }
    this.setDiscount = function (discount) {
        this.__discount = discount;
    }

    this.getTotal = function () {
        return __tot;
    }
    this.setTotal = function (total) {
        this.__tot = total;
    }
}