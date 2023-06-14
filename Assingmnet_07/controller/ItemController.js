import {ItemModel} from "../model/itemModel.js";



const ItemData="ITEM";
document.getElementById("btn_Add_Item").addEventListener('click',function () {
    let pre_data = localStorage.getItem(ItemData);
    let data_arr=[];
    if(pre_data) {
        data_arr = JSON.parse(pre_data);
    }
    let Item = new ItemModel(
        $('#Item_code').val(),
        $('#Item_Name').val(),
        $('#Item_Price').val(),
        $('#Item_Qty').val());

    data_arr.unshift(Item);
    localStorage.setItem(ItemData, JSON.stringify(data_arr));
    LoadItemData();
})


function LoadItemData(){
    let pre_data=localStorage.getItem(ItemData);
    let itemDataArr=JSON.parse(pre_data);

    if (itemDataArr) {
        $('#item_table_body').empty();
        itemDataArr.map((result) => {
            console.log(result);
            var data = `
                <tr>
                    <th scope="row">${result._code}</th>
                    <td>${result._name}</td>
                    <td>${result._price}</td>
                    <td>${result._qty}</td>
        
                </tr>`
            $('#item_table_body').append(data);

        })
    }

}
LoadItemData();

/*Item Search*/
$("#item_table_body>tr").click(function (){
    let itemCode=$(this).children(":eq(0)").text();
    let itemName=$(this).children(":eq(1)").text();
    let itemPrice=$(this).children(":eq(2)").text();
    let itemQty=$(this).children(":eq(3)").text();

    console.log(itemCode,itemName,itemPrice,itemQty);

    $('#Item_code').val(itemCode);
    $('#Item_Name').val(itemName);
    $('#Item_Price').val(itemPrice);
    $('#Item_Qty').val(itemQty);
});

document.getElementById("Delete_Item").addEventListener('click',function () {
    alert(JSON.stringify("Are You Sure"));
    let itemD=JSON.parse(localStorage.getItem(ItemData));
    itemD.map((result,index)=>{
        if (result._code){
            itemD.splice(index,1);
        }
    });
    localStorage.setItem(ItemData,JSON.stringify(itemD));
    LoadItemData();
});
