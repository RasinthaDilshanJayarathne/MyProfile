function OrderDetailDTO(orderId, orderDate,customerId,customerName, itemCode, itemName, orderQty, totalItem) {
    var __oid = orderId;
    var __date = orderDate;
    var __cusId = customerId;
    var __cusName = customerName;
    var __code = itemCode;
    var __name = itemName;
    var __qty = orderQty;
    var __itemPrice = totalItem;

    this.getOrderId = function () {
        return __oid;
    }
    this.setOrderId = function (orderId) {
        this.__oid = orderId;
    }

    this.getOrderDate = function () {
        return __date;
    }
    this.setOrderDate = function (orderDate) {
        this.__date = orderDate;
    }
    this.getCusId = function () {
        return __cusId;
    }
    this.setCusId = function (customerId) {
        this.__cusId = customerId;
    }
    this.getCusName = function () {
        return __cusName;
    }
    this.setCusName = function (customerName) {
        this.__cusName = customerName;
    }

    this.getItemCode = function () {
        return __code;
    }
    this.setItemCode = function (itemCode) {
        this.__code = itemCode;
    }

    this.getItemName = function () {
        return __name;
    }
    this.setItemName = function (itemName) {
        this.__name = itemName;
    }

    this.getItemQty = function () {
        return __qty;
    }
    this.setItemQty = function (orderQty) {
        this.__qty = orderQty;
    }
    this.getTotAmount = function () {
        return __itemPrice;
    }
    this.setTotAmount = function (totalItem) {
        this.__itemPrice = totalItem;
    }
}