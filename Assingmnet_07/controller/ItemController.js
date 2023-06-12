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