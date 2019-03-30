$(document).ready(function(){
    var er=0;
    $("#signin").click(function(){
        if ($("#uni").val()=="") {
            $("#un").hide().append("* Please enter your username!").show();
            er+=1;
        }
        else {

        }
        if ($("#pwi").val()=="") {
            $("#pw").append("* Password is required!").show();
            er+=1;
        }
        else {
            if (er>0) {
                $("#signin").addClass("btn-danger");
            }
        }
    });
});