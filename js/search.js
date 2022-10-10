
function printError(elemId, hintMsg) {
        document.getElementById(elemId).innerHTML = hintMsg;
    }
    

function searchprop()
{
    var slocation = $('#tags').val();


    var slocationErr = true;

    if(slocation == "") {

        printError("slocationErr", "Enter the Location");
    } else {
        printError("slocationErr", "");
            slocationErr = false;
    }

    
    
    if((slocationErr) == true) {
       return false;
    } 
    else{
        window.location.href="lands-and-plot/"+slocation;
    }
}

$( function() {
    var availableTags = [
      "Saravanampatti",
      "Keeranatham"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );


