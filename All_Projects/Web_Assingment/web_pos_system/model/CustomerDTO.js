function CustomerDTO(customerId, customerName, customerAddress, customerPhone) {
    var __cid = customerId;
    var __name = customerName;
    var __address = customerAddress;
    var __contact = customerPhone;

    this.getCustomerId = function () {
        return __cid;
    }
    this.setCustomerId = function (customerId) {
        this.__cid = customerId;
    }

    this.getCustomerName = function () {
        return __name;
    }
    this.setCustomerName = function (customerName) {
        this.__name = customerName;
    }

    this.getCustomerAddress = function () {
        return __address;
    }
    this.setCustomerAddress = function (customerAddress) {
        this.__address = customerAddress;
    }

    this.getCustomerPhone = function () {
        return __contact;
    }
    this.setCustomerPhone = function (customerPhone) {
        this.__contact = customerPhone;
    }
}

