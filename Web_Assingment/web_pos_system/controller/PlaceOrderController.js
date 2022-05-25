function generateOrderID() {
    $("#orderId").val("O00-0001");
    var orderId = orderDB[orderDB.length - 1].getOrderId();
    var tempId = parseInt(orderId.split("-")[1]);
    tempId = tempId + 1;
    if (tempId <= 9) {
        $("#orderId").val("O00-000" + tempId);
    } else if (tempId <= 99) {
        $("#orderId").val("O00-00" + tempId);
    } else if (tempId <= 999) {
        $("#orderId").val("O00-0" + tempId);
    } else {
        $("#orderId").val("O00-" + tempId);
    }
}

function setCurrentDate() {
    let orderDate = $("#orderDate");
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    orderDate.val(today);
}

var tableRowCount;

$("#addToCart").click(function () {
    /* checkQuntity();*/

    var duplicate = false;
    for (var i = 0; i < $("#orderTable tr").length; i++) {

        if ($("#itemChombo option:selected").text() == $("#orderTable tr").children(':nth-child(1)')[i].innerText) {
            duplicate = true;
        }
    }
    if (duplicate != true) {

        loadItemData();
        minusQty($("#orderOrderQty").val());
        manageTotal($("#orderOrderQty").val() * $("#orderUnitPrice").val());

    } else if (duplicate == true) {

        manageQuantity(tableRowCount.children(':nth-child(5)').text(), $("#orderOrderQty").val());
        $(tableRowCount).children(':nth-child(4)').text($("#orderQtyOnHand").val());
        $(tableRowCount).children(':nth-child(5)').text($("#orderOrderQty").val());

        updateManageTotal(tableRowCount.children(':nth-child(6)').text(), $("#orderOrderQty").val() * $("#orderUnitPrice").val());
        $(tableRowCount).children(':nth-child(6)').text($("#orderOrderQty").val() * $("#orderUnitPrice").val());

    }

    $("#orderTable>tr").click('click', function () {

        tableRowCount = $(this);

        let itemCode = $(this).children(":eq(0)").text();
        let itemName = $(this).children(":eq(1)").text();
        let unitPrice = $(this).children(":eq(2)").text();
        let available = $(this).children(":eq(3)").text();
        let qty = $(this).children(":eq(4)").text();
        let total = $(this).children(":eq(5)").text();


        $("#itemChombo").val(itemCode);
        $("#orderItemName").val(itemName);
        $("#orderUnitPrice").val(unitPrice);
        $("#orderOrderQty").val(qty);
        $("#orderQtyOnHand").val(available);


    });
    /*clearItemData();*/


});

var tot = 0;

function manageTotal(amount) {
    tot += amount;
    $("#total").val(tot);
    calculateDiscount();

    let A = $("#total").val();
    let B = $("#discountCmb").val();

    $("#subToal").val(A - B);
}

function updateManageTotal(prvTotal, nowTotal) {
    tot -= prvTotal;
    tot += nowTotal;

    $("#total").val(tot);
    calculateDiscount();

    let A = $("#total").val();
    let B = $("#discountCmb").val();

    $("#subToal").val(A - B);
}

function manageQuantity(prevQty, nowQty) {
    var prevQty = parseInt(prevQty);
    var nowQty = parseInt(nowQty);
    var availableQty = parseInt($("#orderQtyOnHand").val());

    availableQty += prevQty;
    availableQty -= nowQty;

    $("#orderQtyOnHand").val(availableQty);
}

function minusQty(orderQty) {
    var minusQty = parseInt(orderQty);
    var manageQty = parseInt($("#orderQtyOnHand").val());

    manageQty = manageQty - minusQty;

    $("#orderQtyOnHand").val(manageQty);
}

function manageBalence() {
    let A = $("#subToal").val();
    let B = $("#cash").val();

    $("#balance").val(B - A);
}

function loadCustChomboBoxData(value) {
    $("#custChombo").append(value);
}

/*$('#custChombo').click(function () {
    var customerId = $('#custChombo').val();
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCustomerId() == customerId) {
            $('#orderCustName').val(customerDB[i].getCustomerName());
            $('#orderTelephoneNo').val(customerDB[i].getCustomerPhone());
            $('#orderAddress').val(customerDB[i].getCustomerAddress());
        }
    }
});*/


$("#custChombo").click(function () {
    let custId = $("#custChombo").val();
    let custName = $("#orderCustName").val();
    let telephoneNo = $("#orderTelephoneNo").val();
    let address = $("#orderAddress").val();

    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCustomerId() == custId) {
            custName = customerDB[i].getCustomerName();
            telephoneNo = customerDB[i].getCustomerPhone();
            address = customerDB[i].getCustomerAddress();

            $("#orderCustName").val(custName);
            $("#orderTelephoneNo").val(telephoneNo);
            $("#orderAddress").val(address);
        }
    }
});

function loadItemChomboBoxData(value) {
    $("#itemChombo").append(value);
}

/*function loadItemData(){
    $('#itemChombo').click(function () {
        var itemCode = $('#itemChombo').val();
        for (let i = 0; i < itemDB.length; i++) {
            if (itemDB[i].getItemCode() == itemCode) {
                $('#orderItemName').val(itemDB[i].getItemName());
                $('#orderUnitPrice').val(itemDB[i].getItemPrice());
                $('#orderQtyOnHand').val(itemDB[i].getItemQtyOnHand());
            }
        }
    });
}*/

$("#itemChombo").click(function () {
    let itemCode = $("#itemChombo").val();
    let itemName = $("#orderItemName").val();
    let itemPrice = $("#orderUnitPrice").val();
    let itemQty = $("#orderQtyOnHand").val();

    for (var i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getItemCode() == itemCode) {
            itemName = itemDB[i].getItemName();
            itemPrice = itemDB[i].getItemPrice();
            itemQty = itemDB[i].getItemQtyOnHand();

            $("#orderItemName").val(itemName);
            $("#orderUnitPrice").val(itemPrice);
            $("#orderQtyOnHand").val(itemQty);
        }
    }
});

let itemCode;
let subTotal;
let discount;

$("#orderTable").empty();

function loadItemData() {

    let itemCode = $("#itemChombo").val();
    let itemName = $("#orderItemName").val();
    let itemPrice = $("#orderUnitPrice").val();
    let itemQty = $("#orderQtyOnHand").val();
    let itemOrderQty = $("#orderOrderQty").val();

    let total = itemPrice * itemOrderQty;

    let avalilableQty = itemQty - itemOrderQty;

    /*if ($("#orderQtyOnHand") >= $("#orderOrderQty")){

    }*/

    $("#orderTable").append("<tr>" +
        "<td>" + itemCode + "</td>" +
        "<td>" + itemName + "</td>" +
        "<td>" + itemPrice + "</td>" +
        "<td>" + avalilableQty + "</td>" +
        "<td>" + itemOrderQty + "</td>" +
        "<td>" + total + "</td>" +
        `<td><button id="btnItemCartDelete" type="button" class="btn-sm btn-danger">Delete</button></td>` +
        "</tr>");

    calculateDiscount();

}

function calculateDiscount() {
    if (tot >= 10000) {
        discount = $("#discountCmb").val((tot / 100) * 20);
        $("#subToal").val(tot - discount);
    } else if (tot >= 8000 && tot < 9999) {
        discount = $("#discountCmb").val((tot / 100) * 15);
        $("#subToal").val(tot - discount);
    } else if (tot >= 6000 && tot < 7999) {
        discount = $("#discountCmb").val((tot / 100) * 10);
        $("#subToal").val(tot - discount);
    } else if (tot >= 2000 && tot < 5999) {
        discount = $("#discountCmb").val((tot / 100) * 5);
        $("#subToal").val(tot - discount);
    } else {
        $("#discountCmb").val("00");
    }
}

$("#btnPurchase").click(function () {

    placeOrder();
    pushOrderDetails();
    clearCustomerData();
    manageBalence();
    clearItemData();
    $("#orderTable").empty();
    generateOrderID();
    tot = 0;
});

function placeOrder() {

    let orderId = $("#orderId").val();
    let customerId = $("#custChombo").val();
    let date = $("#orderDate").val();
    discount = $("#discountCmb").val();
    subTotal = $("#subToal").val();

    orderDB.push(new OrderDTO(orderId, customerId, date, discount, subTotal));
}

function pushOrderDetails() {

    for (let i = 0; i < $("#orderTable tr").length; i++) {
        var orderDetail = new OrderDetailDTO(
            $("#orderId").val(),
            $("#orderDate").val(),
            $("#custChombo").val(),
            $("#orderCustName").val(),
            $("#orderTable tr").children(':nth-child(1)')[i].innerText,
            $("#orderTable tr").children(':nth-child(2)')[i].innerText,
            $("#orderTable tr").children(':nth-child(5)')[i].innerText,
            $("#orderTable tr").children(':nth-child(6)')[i].innerText)

        console.log($("#orderTable tr").children(':nth-child(6)')[i].innerText);

        orderDetailDB.push(orderDetail);
    }
}


function checkQuntity() {
    var orderQtyOnHand = parseInt($('#orderQtyOnHand').val());
    var orderQty = parseInt($('#orderOrderQty').val());
    if (orderQty > orderQtyOnHand) {
        $('#orderOrderQty').val('');
    } else {
        loadItemData();
        clearItemData();
    }
}

$("#btnOrderDetail").click(function () {
    loadAllOrderDetail();
});

$("#orderTable").on('click', '#btnItemCartDelete', function () {
    $(this).closest('tr').remove();
    $('#discountCmb,#total').val("");
    clearItemData();

});

function clearItemData() {
    $('#itemChombo,#orderItemName,#orderUnitPrice,#orderQtyOnHand,#orderOrderQty,orderId,orderDate').val("");
}

function clearCustomerData() {
    $('#custChombo,#orderCustName,#orderTelephoneNo,#orderAddress,#orderDate').val("");
}

$("#clear").click(function () {
    $('#total,#discountCmb,#subToal,#cash,#balance').val("");
});