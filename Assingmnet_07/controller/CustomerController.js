/*import{customerModel} from "../model/customerModel.js";*/

/*
$('').on('click','',function (event) {
    console.log($(event.target).text());
})
$('#').on('click',(event)=>{
    let value=$('input[name=""]').val();
    if (value){
        console.log(value);
        $('').append(<li>${value}</li>)
    }else{
        alert('invalid-input')
    }
})

function saveCustomer() {
    let  Customer_Id=$('#customer_id').val();
    let  Customer_name=$('#customer_name').val();
    let  Customer_address=$('#customer_address').val();
    let  Customer_salary=$('#customer_salary').val();

    var tableData=`<tr>
                   <td>${Customer_Id}</td>
                   <td>${Customer_name}</td>
                   <td>${Customer_address}</td>
                   <td>${Customer_salary}</td>
                   </tr>`
        var tableDT=`<option value="${Customer_name}">`
    
    `
}*/

import{CustomerModel} from "../model/customerModel.js";
export class CustomerController{
    constructor() {
        /*Buttone Click tika danne meke*/
        $('#btnAddCustomer').click(this.handleSaveCustomer);
        $('#btnUpdateCustomer').click(this.handleUpdateCustomer);
        $('#btnDeleteCustomer').click(this.handleDeleteCustomer);
    }

    handleSaveCustomer(){
        console.log('Save Customer');
    }
    handleUpdateCustomer(){
        console.log('Update Customer');
    }
    handleDeleteCustomer(){
        console.log('Delete Customer');
    }
}
new CustomerController();