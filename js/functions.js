
function printError(elemId, hintMsg) {
        document.getElementById(elemId).innerHTML = hintMsg;
    }
    function validateEmail(email) { //Validates the email address
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    console.log( emailRegex.test(email));
    return emailRegex.test(email);
}

function validatePhone(phone) { //Validates the phone number
    var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
    return phoneRegex.test(phone);
}
function sendenquiry()
{
    $('#succ-client-alert').html('');
    $('#fail-client-alert').html('');
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var cmessage = $('#message').val();

    console.log(validateEmail(email));

    var nameErr = emailErr = phoneErr  = true;
    console.log(name,'answer');
    if(name == "") {
        printError("nameErr", "Enter Name");
    } else {
            printError("nameErr", "");
            nameErr = false;
    }

   
    if(email == ""  || validateEmail(email) == false ) {
        printError("emailErr", "Enter valid Email");
    } else {
            printError("emailErr", "");
            emailErr = false;
    }

    if(phone == '') {
        printError("phoneErr", "Enter Valid Mobile Number");
    } else {
            printError("phoneErr", "");
            phoneErr = false;
    }

    
    
    if((nameErr || emailErr || phoneErr) == true) {
       return false;
    } 
    else{
        $("#sbutton").prop("disabled", true);
        $.ajax({
        url: 'http://144.126.253.144/contact-us',
        type: 'POST',
        data:{name:name, email:email, phone:phone, message:cmessage,website:"P and K",to:"balajisivasakthi2020@gmail.com"},
        success: function(data)
        {
            
            $("#sbutton").prop("disabled", false);
            var datas = JSON.parse(data);
             if(datas.status=="Success")
            {
                $('#succ-client-alert').html('Your request has been sent successfully');
                $('#fail-client-alert').html('');
                $('#consultation-form')[0].reset();
            }
            else
            {
                $('#succ-client-alert').html('');
                $('#fail-client-alert').html('We were unable to send your request. Please try again');
            }
         
        }
    });
    }
}
function sendenquirypopup()
{
    $('#succ-client-alert1').html('');
    $('#fail-client-alert1').html('');
    var name = $('#ename').val();
    var email = $('#eemail').val();
    var phone = $('#ephone').val();
    var cmessage = $('#equery').val();

    

    var enameErr = eemailErr = ephoneErr  = true;
    
    if(name == "") {
        printError("enameErr", "Enter Name");
    } else {
            printError("enameErr", "");
            enameErr = false;
    }

   
    if(email == ""  || validateEmail(email) == false ) {
        printError("eemailErr", "Enter valid Email");
    } else {
            printError("eemailErr", "");
            eemailErr = false;
    }

    if(phone == '' || validatePhone(phone) == false) {
        printError("ephoneErr", "Enter Valid Mobile Number");
    } else {
            printError("ephoneErr", "");
            ephoneErr = false;
    }

    
    
    if((enameErr || eemailErr || ephoneErr) == true) {
       return false;
    } 
    else{
        $("#enbutton").prop("disabled", true);
        $.ajax({
        url: 'ajax-mail.php',
        type: 'POST',
        data:{name:name, email:email, phone:phone, cmessage:cmessage, referer:"ezioaws", action:"add_enquiry"},
        success: function(data)
        {
            
            $("#enbutton").prop("disabled", false);
            var datas = JSON.parse(data);
             if(datas.status=="Success")
            {
                $('#succ-client-alert1').html('Your request has been sent successfully');
                $('#fail-client-alert1').html('');
                $('#enquiry-form')[0].reset();
            }
            else
            {
                $('#succ-client-alert1').html('');
                $('#fail-client-alert1').html('We were unable to send your request. Please try again');
            }
         
        }
    });
    }
}
