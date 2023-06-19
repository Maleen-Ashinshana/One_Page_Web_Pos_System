import {PlaceOrderModel} from "../model/PlaceOrderModel.js";


/*let cus=new CustomerModel()._id;*/
var Order=new Array();
let cusData="CUSTOMER"
let itemData="ITEM"
/*let Cus=CustomerModel.prototype;*/
/*cus=JSON.parse(localStorage.getItem(CustomerModel));*/
/*cus=JSON.parse()*/


function generateOrderID(){
        if (Order.length==0){
            $("#OrderId").val("0-0001");
        }else if (Order.length>0){
            var orderId=Order[Order.length-1]._getItemByOrder(orderId.split("-")[1]);
            var tempId=parseInt(orderId);
            tempId=tempId+1;
            if (tempId<=9){
                $("#OrderId").val("O-000" + tempId);

            }else if (tempId <= 99) {
                $("#OrderId").val("O-00" + tempId);
            } else if (tempId <= 999) {
                $("#OrderId").val("O-0" + tempId);
            } else if (tempId <= 9999) {
                $("#OrderId").val("O-" + tempId);
            }
        }
}
generateOrderID();
function addToCustomerCmb(){
    let cus=JSON.parse(localStorage.getItem(cusData));
    cus.map((result) => {
        let data=`<option value="${result._id}">${result._id}</option>`
        $('#select-Customer-Id').append(data);
        $('#Customer-Name').append(cus._name);
        console.log(cusData+"***");
        /*$('#Customer-Name').append(result._name);*/
      /*  if (result._id==){

        }*/

    })


}

addToCustomerCmb();

$("#select-Customer-Id").change(function () {
    var id = $("#select-Customer-Id").find('option:selected').text();

    let customers=JSON.parse(localStorage.getItem(cusData));
    customers.map((result) => {

        if (result._id === id) {
            console.log(result);
            $('#Customer-Name').val(result._name)

        }

    })
});

function addToItemCmb(){
    let item=JSON.parse(localStorage.getItem(itemData));
    item.map((result) => {
        let data=`<option value="${result._code}">${result._code}</option>`
        $('#select-item-code').append(data);

        /*$('#Customer-Name').append(result._name);*/

    })

}
addToItemCmb();

$("#select-item-code").change(function () {
    var code = $("#select-item-code").find('option:selected').text();

    let items=JSON.parse(localStorage.getItem(itemData));
    items.map((result) => {

        if (result._code === code) {
            console.log(result);
            $('#Item-Name-order').val(result._name)
            $('#Price-order').val(result._price)
            $('#Qty-order').val(result._qty)

        }

    })
});

