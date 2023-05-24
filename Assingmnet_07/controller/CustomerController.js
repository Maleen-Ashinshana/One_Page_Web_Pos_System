import{customerModel} from "../model/customerModel";

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
                  <th scope="row">${cus}</th>   
                   
    
    `
}