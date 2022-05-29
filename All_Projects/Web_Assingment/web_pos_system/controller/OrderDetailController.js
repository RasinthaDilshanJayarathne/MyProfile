function loadAllOrderDetail() {
    $("#orderDetailTable").empty();
    for (let i = 0; i < orderDetailDB.length; i++){
        $("#orderDetailTable").append("<tr>" +
            "<td>"+orderDetailDB[i].getOrderId()+"</td>" +
            "<td>"+orderDetailDB[i].getOrderDate()+"</td>" +
            "<td>"+orderDetailDB[i].getCusId()+"</td>" +
            "<td>"+orderDetailDB[i].getCusName()+"</td>" +
            "<td>"+orderDetailDB[i].getItemCode()+"</td>" +
            "<td>"+orderDetailDB[i].getItemName()+"</td>" +
            "<td>"+orderDetailDB[i].getItemQty()+"</td>" +
            "<td>"+orderDetailDB[i].getTotAmount()+"</td>" +
            "</tr>");
    }
}