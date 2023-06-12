import {CustomerModel} from "../model/customerModel.js";


const cusData="DATA";
document.getElementById("btnAddCustomer").addEventListener('click',function () {
    let pre_data = localStorage.getItem(cusData);
    let data_arr=[];
    if(pre_data) {
        data_arr = JSON.parse(pre_data);
    }
    let customer = new CustomerModel(
        $('#customer_id').val(),
        $('#customer_name').val(),
        $('#customer_address').val(),
        $('#customer_salary').val());
    data_arr.unshift(customer);
    localStorage.setItem(cusData, JSON.stringify(data_arr));
    loadCustomerData();
})

    //java Script valin value allaganna vidiha
    /*/!*console.log(document.getElementById("id").value);*!/*/
    //j quary walin value allaganna vidiha
    /*let customer={
        id : $('#customer_id').val(),
        name:$('#customer_name').val(),
        address:$('#customer_address').val(),
        tel:$('#customer_salary').val()
    }*/
/*    let customer=new Customer(
        $('#customer_id').val(),
        $('#customer_name').val(),
        $('#customer_address').val(),
        $('#customer_salary').val(),
    );
    $('#customerTableBody').append('<tr>' +
        '<td>'+customer.id+'</td>' +
        '<td>'+customer.name+'</td>' +
        '<td>'+customer.address+'</td>' +
        '<td>'+customer.tel+'</td>' +
        '</tr>');
    })*/
/*    function CustomerArray(){
        let pre_data=localStorage.getItem(cusData);
        let data_arr=[];
        if (pre_data){
            data_arr=JSON.parse(pre_data);
        }

            let customer=new Customer(
                $('#customer_id').val(),
                $('#customer_name').val(),
                $('#customer_address').val(),
                $('#customer_salary').val(),
            );
            let  index=CReId(data_arr,customer.id);
            if (index!==-1) {
                data_arr[index]._name = $('#customer_name').val(),
                    data_arr[index]._address = $('#customer_address').val(),
                    data_arr[index]._mobile = $('#customer_salary').val()
                data_arr.splice(index,1,customer)
            }else {
                console.log("+++++++++")
                data_arr.unshift(customer);
            }
            localStorage.setItem(cusData, JSON.stringify(data_arr));
            loadCustomerData();


    }*/


function CReId(arr,id){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]._id===id) {
            return i;
        }
    }
    return -1;

}
function loadCustomerData(){
    let pre_data=localStorage.getItem(cusData);
    let customerDataArr=JSON.parse(pre_data);

    if (customerDataArr) {
        $('#customerTableBody').empty();
        customerDataArr.map((result) => {
            console.log(result);
            var data = `
                <tr>
                    <th scope="row">${result._id}</th>
                    <td>${result._name}</td>
                    <td>${result._address}</td>
                    <td>${result._salary}</td>
                    <!--<td width="15%">
                        <button class="btn btn-success" id="btn-edite">Edite</button>
                        <button class="btn btn-danger" id="btn-delete">Delete</button>
                    </td>-->
                </tr>`
            $('#customerTableBody').append(data);

        })

    }

 /*   closeNewCustomer();*/
}
/*$('#btnAddCustomer').on('click',(event) => {
        CustomerArray();
});*/
loadCustomerData();
function SearchCustomer() {
    let CustomerId=$('#customer_id').val();
    let customersArr=JSON.parse(localStorage.getItem(cusData));
    let customer=searchCusMethod(customersArr,customerId);
    if (customer!==null){
        $('#customer_name').val(customer._name);
        $('#customer_address').val(customer._address);
        $('#customer_salary').val(customer._salary);
    }else {

        $('#customer_id').val("");
        $('#customer_address').val("");
        $('#customer_salary').val("");
        $('#customerSalaryOrder').val("");
        alert("Not Found")
    }

}

function searchCusMethod(arr,id){
    for (const arrElement of arr) {
        if (arrElement._id===id){
            return arrElement;
        }
    }
    return null;
}