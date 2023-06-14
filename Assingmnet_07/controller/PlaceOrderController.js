import {PlaceOrderModel} from "../model/PlaceOrderModel.js";

function generateOrderID(){

        var Order=new Array();

        if (Order.length==0){
            $("#OrderId").val("0-001");
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