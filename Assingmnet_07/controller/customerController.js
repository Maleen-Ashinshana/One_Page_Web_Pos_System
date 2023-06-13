import {CustomerModel} from "../model/customerModel.js";


const cusData="CUSTOMER";
const cusIdRegx=/^(C)([0-9]){3}$/;
const cusNameRegx=/^([A-Za-z]){3,}$/;
const cusAddressRegx=/^([A-Za-z0-9,.]){3,}$/;
const cusSalaryRegx = /^\d+(,\d{3})*(\.\d{1,2})?$/;
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

                </tr>`
            $('#customerTableBody').append(data);
        })
    }
}

loadCustomerData();
/*Search Customer*/
$("#customerTableBody>tr").click(function (){
    let cusId=$(this).children(":eq(0)").text();
    let cusName=$(this).children(":eq(1)").text();
    let cusAddress=$(this).children(":eq(2)").text();
    let cusSalary=$(this).children(":eq(3)").text();

    console.log(cusId,cusName,cusAddress,cusSalary);

    $('#customer_id').val(cusId);
    $('#customer_name').val(cusName);
    $('#customer_address').val(cusAddress);
    $('#customer_salary').val(cusSalary);
});
$("#customerTableBody>tr").dblclick(function (){
    $(this).remove();
    localStorage.getItem(cusData);

});

document.getElementById("btnDeleteCustomer").addEventListener('click',function () {
    alert(JSON.stringify("Are You Sure"));
    let customerD=JSON.parse(localStorage.getItem(cusData));
    customerD.map((result,index)=>{
        if (result._id){
            customerD.splice(index,1);
        }
    });
    localStorage.setItem(cusData,JSON.stringify(customerD));
    loadCustomerData();
});



