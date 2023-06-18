import {PlaceOrderModel} from "../model/PlaceOrderModel.js";


/*let cus=new CustomerModel()._id;*/
var Order=new Array();
let cusData="CUSTOMER"
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
$("#Customer-Id").change(function (){
    var id=$("#Customer-Id").find('option:selected').text();
    console.log(id+"******")
    var found=false;

    for (var i=0;i< data_arr.length;i++){
        if (data_arr[i]._id==id){
            $("#Customer-Name").val(data_arr[i]._name);
          /*  var code*/
        }
        found=true;
    }
})
function addToCmb(){
    let cus=JSON.parse(localStorage.getItem(cusData));
    cus.map((result) => {
        let data=`<option value="${result._id}">${result._id}</option>`
        $('#select-Customer-Id').append(data);
    })
}
addToCmb();
/*var comboBox =document.getElementById("#Customer-Id");
comboBox.value=cus;*/
/*$("#Customer-Id").change(function (){
  var id=$("#Customer-Id").find('option:selected').text();
  var found=false;
})*/

/*$("#Customer-Id").change(function (){
/!*    let cus=JSON.parse(localStorage.getItem(cusData));*!/
    var id=$("#Customer-Id").find('option:selected').text();
    var found=false;
    for (var i=0;i<cusData.length;i++){
        if (cusData[i].get(Cus.getElementById(CustomerModel))==id){
            $("#Customer-Name").val(cusData[i].customerId()==id);

        }
    }
})*/

