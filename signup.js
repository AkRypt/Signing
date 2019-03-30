$(document).ready(function(){
    var er=0;
    $("#sup").click(function(){
        if ($("#fni").val()=="") {
            $("#fn").append("* First Name is required!").show();
            er+=1;
        }
        else {

        }
        if ($("#lni").val()=="") {
            $("#ln").append("* Last Name is required!").show();
            er+=1;
        }
        else {
            
        }
        if ($("#emi").val()=="") {
            $("#em").append("* Email is required!").show();
            er+=1;
        }
        else {
            
        }
        if ($("#uni").val()=="") {
            $("#un").append("* Username is required!").show();
            er+=1;
        }
        else {
            
        }
        if ($("#pwi").val()=="") {
            $("#pw").append("* Password is required!").show();
            er+=1;
        }
        else {
            
        }
        if ($("#phi").val()=="") {
            $("#ph").append("* Phone Number is required!").show();
            er+=1;
        }
        else {
            if (er>0) {
                $("#sup").toggleClass("btn-danger");
            }   
        }
    });
});