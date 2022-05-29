/*
document.getElementById("customer").style.display = "none";
document.getElementById("item").style.display = "none";
document.getElementById("placeOrder").style.display = "block";

document.getElementById("navHome").addEventListener("click", function () {
    document.getElementById("placeOrder").style.display = "block";
    document.getElementById("customer").style.display = "none";
    document.getElementById("item").style.display = "none";

    generateOrderID();
});

document.getElementById("navItem").addEventListener("click", function () {
    document.getElementById("placeOrder").style.display = "none";
    document.getElementById("customer").style.display = "none";
    document.getElementById("item").style.display = "block";
});

document.getElementById("navCustomer").addEventListener("click", function () {
    document.getElementById("placeOrder").style.display = "none";
    document.getElementById("customer").style.display = "block";
    document.getElementById("item").style.display = "none";
});*/
$("#placeOrder").click(function () {
    generateOrderID();
    setCurrentDate();
    /* addToCarBtnDesable();*/
    loadItemChomboBoxData();

});
/*
function addToCarBtnDesable(){
    if ($('#itemChombo,#orderItemName,#orderUnitPrice,#orderQtyOnHand,#orderOrderQty').val("")){
        document.getElementById("addToCart").disabled = true;
    }
}
*/


$("#addNewCustomerBtn").click(function () {
    console.log("Hello");
    var customerId = customerDB[customerDB.length - 1].getCustomerId();
    var tempId = parseInt(customerId.split("-")[1]);
    tempId = tempId + 1;
    if (tempId <= 9) {
        $("#txtPopCustId").val("C00-000" + tempId);
    } else if (tempId <= 99) {
        $("#txtPopCustId").val("C00-00" + tempId);
    } else if (tempId <= 999) {
        $("#txtPopCustId").val("C00-0" + tempId);
    } else {
        $("#txtPopCustId").val("C00-" + tempId);
    }
});

$("#addNewItem").click(function () {
    console.log("Hello");
    var customerId = itemDB[itemDB.length - 1].getItemCode();
    var tempId = parseInt(customerId.split("-")[1]);
    tempId = tempId + 1;
    if (tempId <= 9) {
        $("#txtPopItemCode").val("I00-000" + tempId);
    } else if (tempId <= 99) {
        $("#txtPopItemCode").val("I00-00" + tempId);
    } else if (tempId <= 999) {
        $("#txtPopItemCode").val("I00-0" + tempId);
    } else {
        $("#txtPopItemCode").val("I00-" + tempId);
    }
});