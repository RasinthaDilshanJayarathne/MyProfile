

/*$("#addNewCustomerBtn").click(function () {
    generateCustomerId();
});*/

$("#popCustBtnAdd").click(function () {
    /* $("#customerTable>tr").of("click");*/
    saveCustomer();
    loadAllCustomer();
    loadCustomerDataTextField();
    clearPopData();
});

function loadCustomerDataTextField(){
    $("#customerTable>tr").click(function () {

        let customerId1 = $(this).children(":eq(0)").text();
        let customerName1 = $(this).children(":eq(1)").text();
        let customerAddress1 = $(this).children(":eq(2)").text();
        let customerPhone1 = $(this).children(":eq(3)").text();

        $("#txtCustId").val(customerId1);
        $("#txtCustName").val(customerName1);
        $("#txtCustAddress").val(customerAddress1);
        $("#txtCustPhoneNo").val(customerPhone1);
    });
}

function saveCustomer() {
    let customerId = $("#txtPopCustId").val();
    let customerName = $("#txtPopCustName").val();
    let customerAddress = $("#txtPopCustAddress").val();
    let customerPhone = $("#txtPopCustPhone").val();

    customerDB.push(new CustomerDTO(customerId,customerName, customerAddress, customerPhone));

    loadCustChomboBoxData("<option>"+customerId+"</option>");
}

$("#btnCustUpdate").click(function () {
    let customerId = $("#txtCustId").val();
    let customerName = $("#txtCustName").val();
    let customerAddress = $("#txtCustAddress").val();
    let customerPhone = $("#txtCustPhoneNo").val();

    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCustomerId() === customerId){
            customerDB[i].setCustomerName(customerName);
            customerDB[i].setCustomerAddress(customerAddress);
            customerDB[i].setCustomerPhone(customerPhone);
        }
    }
    loadAllCustomer();
    clearAll();
    loadCustomerDataTextField()
});

$("#customerTable").on('click', '#btnCustomerDelete', function () {
    var index = 0;
    for (var i = 0; i < customerDB.length; i++) {
        if ($("#txtCustId").val() == customerDB[i].getCustomerId()) {
            index = i;
        }
    }
    customerDB.splice(index, 1);

    clearAll();

    $(this).closest('tr').remove();

});

function loadAllCustomer() {
    $("#customerTable").empty();
    /*for (var i of customerDB) {
        /!*create a html row*!/
        let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.phoneNo}</td>
            <td><button id="btnCustomerDelete" type="button" class="btn-sm btn-danger">Delete</button></tr></tr>`;
        /!*select the table body and append the row *!/
        $("#customerTable").append(row);
        console.log(row);
    }*/

    for (let i = 0; i < customerDB.length; i++){

        $("#customerTable").append("<tr>" +
            "<td>"+customerDB[i].getCustomerId()+"</td>" +
            "<td>"+customerDB[i].getCustomerName()+"</td>" +
            "<td>"+customerDB[i].getCustomerAddress()+"</td>" +
            "<td>"+customerDB[i].getCustomerPhone()+"</td>" +
            `<td><button id="btnCustomerDelete" type="button" class="btn-sm btn-danger">Delete</button></td>`+
            "</tr>");
    }
}

$("#btnCustSearch").click(function () {
    var searchID = $("#searchBar3").val();

    var response = searchCustomer(searchID);
    if (response) {
        $("#txtCustId").val(response.getCustomerId());
        $("#txtCustName").val(response.getCustomerName());
        $("#txtCustAddress").val(response.getCustomerAddress());
        $("#txtCustPhoneNo").val(response.getCustomerPhone());
    } else {
        clearAll();
        alert("No Such a Customer");
    }

});

function searchCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCustomerId() == id) {
            return customerDB[i];
        }
    }
}

var regExCusID = /^(C00-)[0-9]{3,4}$/;
var regExCusName = /^[A-z ]{3,20}$/;
var regExCusAddress = /^[A-z0-9/ ]{6,30}$/;
var regExCusPhoneNo = /[0-9]{3}[-]?[0-9]{7}$/;

$("#txtPopCustId").keyup(function (event) {
    let input = $("#txtPopCustId").val();

    if (regExCusID.test(input)) {
        $("#txtPopCustId").css('border', '2px solid green');
        $("#error").text("");

        if (event.key == "Enter") {
            $("#txtPopCustName").focus();
        }
    } else {
        $("#txtPopCustId").css('border', '2px solid red');
        $("#error").text("Wrong format:C00-001");
    }
});

$("#txtPopCustName").keyup(function (event) {
    let input = $("#txtPopCustName").val();

    if (regExCusName.test(input)) {
        $("#txtPopCustName").css('border', '2px solid green');
        $("#error1").text("");

        if (event.key == "Enter") {
            $("#txtPopCustAddress").focus();
        }
    } else {
        $("#txtPopCustName").css('border', '2px solid red');
        $("#error1").text("Wrong format:Nimal");
    }
});

$("#txtPopCustAddress").keyup(function (event) {
    let input = $("#txtPopCustAddress").val();

    if (regExCusAddress.test(input)) {
        $("#txtPopCustAddress").css('border', '2px solid green');
        $("#error2").text("");

        if (event.key == "Enter") {
            $("#txtPopCustPhone").focus();
        }
    } else {
        $("#txtPopCustAddress").css('border', '2px solid red');
        $("#error2").text("Wrong format:123/b Galle");
    }
});


$("#txtPopCustPhone").keyup(function (event) {
    let input = $("#txtPopCustPhone").val();

    if (regExCusPhoneNo.test(input)) {
        $("#txtPopCustPhone").css('border', '2px solid green');
        $("#error3").text("");
    } else {
        $("#txtPopCustPhone").css('border', '2px solid red');
        $("#error3").text("Wrong format:077-2314432");
    }
});

$("#txtCustId").keyup(function (event) {
    let input = $("#txtCustId").val();

    if (regExCusID.test(input)) {
        $("#txtCustId").css('border', '2px solid green');
        $("#lblError").text("");

        if (event.key == "Enter") {
            $("#txtCustName").focus();
        }
    } else {
        $("#txtCustId").css('border', '2px solid red');
        $("#lblError").text("Wrong format:C00-001");
    }
});

$("#txtCustName").keyup(function (event) {
    let input = $("#txtCustName").val();

    if (regExCusName.test(input)) {
        $("#txtCustName").css('border', '2px solid green');
        $("#lblError1").text("");

        if (event.key == "Enter") {
            $("#txtCustAddress").focus();
        }
    } else {
        $("#txtCustName").css('border', '2px solid red');
        $("#lblError1").text("Wrong format:Nimal");
    }
});

$("#txtCustAddress").keyup(function (event) {
    let input = $("#txtCustAddress").val();

    if (regExCusAddress.test(input)) {
        $("#txtCustAddress").css('border', '2px solid green');
        $("#lblError2").text("");

        if (event.key == "Enter") {
            $("#txtCustPhoneNo").focus();
        }
    } else {
        $("#txtCustAddress").css('border', '2px solid red');
        $("#lblError2").text("Wrong format:123/b Galle");
    }
});

$("#txtCustPhoneNo").keyup(function (event) {
    let input = $("#txtCustPhoneNo").val();

    if (regExCusPhoneNo.test(input)) {
        $("#txtCustPhoneNo").css('border', '2px solid green');
        $("#lblError3").text("");
    } else {
        $("#txtCustPhoneNo").css('border', '2px solid red');
        $("#lblError3").text("Wrong format:077-2314432");
    }
});


function clearPopData() {
    $('#txtPopCustId,#txtPopCustName,#txtPopCustAddress,#txtPopCustPhone').val("");
    $('#txtPopCustId,#txtPopCustName,#txtPopCustAddress,#txtPopCustPhone').css('border', '2px solid #ced4da');
    $('#txtPopCustId').focus();
    /* $("#popBtnAdd").attr('disabled', true);*/
    /*loadAllCustomers();*/
    /*$("#lblcusid,#lblcusname,#lblcusaddress,#lblcussalary").text("");*/
}

function clearAll() {
    $('#txtCustId,#txtCustName,#txtCustAddress,#txtCustPhoneNo').val("");
    $('#txtCustId,#txtCustName,#txtCustAddress,#txtCustPhoneNo').css('border', '2px solid #ced4da');
    $('#txtCustId').focus();
    /* $("#popBtnAdd").attr('disabled', true);*/
    /*loadAllCustomers();*/
    /*$("#lblcusid,#lblcusname,#lblcusaddress,#lblcussalary").text("");*/
}