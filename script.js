//author: Krishna Katta

var waterBottle=5,cap=20,pen=2,candyBag=10,cupCake=3;
var customerName="", customerTitle="", customerEmail="", creditCardNo="", customerDescription="";
var waterBottlesQty = "",capsQty = "",pensQty = "",bagsQty = "",cupcakesQty = "", totalAmount = 0;

//Validations
function validateInfo(){
    customerTitle += document.getElementById("title").value;
    customerDescription += document.getElementById("description").value; 
    customerName += document.getElementById("name").value;
    customerEmail += document.getElementById("email").value;
    creditCardNo += document.getElementById("creditCard").value;
    let expiryMonth=document.getElementById("expiryMonth").value;
    let expiryYear=document.getElementById("expiryYear").value;
    if(customerName == "")
    {
        document.getElementById("validateName").innerHTML="Enter a Name";
    } 
    else if(customerEmail == "")
    {
        document.getElementById("validateEmail").innerHTML="Enter an Email ID";
    }

    //Email ID Validation
    var validateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (validateEmail.test(customerEmail) == false) {
        document.getElementById("validateEmail").innerHTML="Enter a valid email";
    }

    //CC validation
    var validateCreditCard = /^([0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4})$/;
    if (validateCreditCard.test(creditCardNo) == false) {
        document.getElementById("validateCardNumber").innerHTML="Enter valid credit card no (eg: 1234-5678-9012-3456)";
    }
    var months = /^(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)/i;
    if (months.test(expiryMonth) == false) {
        document.getElementById("validateExpiryMonth").innerHTML="Enter a valid month (eg: DEC)";
    }
    var year = /[0-9]{4}/;
    if (year.test(expiryYear) == false) {
        document.getElementById("validateExpiryYear").innerHTML="Enter a valid year (eg: 2021)";
    }

    //Quantity validation
    var validateNumber = /^[0-9]$/;
    waterBottlesQty += document.getElementById("waterBottles").value;
    capsQty += document.getElementById("caps").value;
    pensQty += document.getElementById("pens").value;
    bagsQty += document.getElementById("candyBags").value;
    cupcakesQty += document.getElementById("cupCakes").value;
    if(validateNumber.test(waterBottlesQty))
        document.getElementById("waterBottles").innerHTML=`${waterBottlesQty}`;
    else if(validateNumber.test(capsQty))
        document.getElementById("caps").innerHTML=`${capsQty}`;
    else if(validateNumber.test(pensQty))
        document.getElementById("pens").innerHTML=`${pensQty}`;
    else if(validateNumber.test(bagsQty))
        document.getElementById("candyBags").innerHTML=`${bagsQty}`;
    else if(validateNumber.test(cupcakesQty))
        document.getElementById("cupCakes").innerHTML=`${cupcakesQty}`;
    else
        document.getElementById("validateInputNumber").innerHTML="Quantity should be a positive number!";
}

//Checkout function
function confirmCheckOut()
{
    validateInfo();
    if(customerName != "" && customerEmail != "" && creditCardNo != "" &&  expiryYear > 2021 || waterBottlesQty > 0 || capsQty > 0 || pensQty > 0 || bagsQty > 0 || cupcakesQty > 0)
    {
        document.getElementById("divReceipt").style.display = "block";
        var tableTotalReceipt = document.getElementById("tableTotalReceipt");
        document.getElementById("displayName").innerHTML = customerName;
        document.getElementById("displayEmail").innerHTML = customerEmail;
        document.getElementById("displayCardNumber").innerHTML = 'xxxx-xxxx-xxxx' + creditCardNo.slice(14);

        //Quantity and calculation
        if(parseInt(waterBottlesQty) > 0)
        {
            var totalBottles= waterBottlesQty * waterBottle;
            totalAmount += totalBottles;
            var newRow = tableTotalReceipt.insertRow();
            newRow.style = "text-align: left;";
	        var cell1 = newRow.insertCell(0);
	        cell1.innerHTML = "<i> Water Bottles </i>";
	        var cell2 = newRow.insertCell(1);
	        cell2.innerHTML = waterBottlesQty;
            var cell3 = newRow.insertCell(2);
	        cell3.innerHTML = "$"+ waterBottle.toFixed(2);
            var cell4 = newRow.insertCell(3);
	        cell4.innerHTML = "$"+ totalBottles.toFixed(2);
        }
        if(parseInt(capsQty) > 0)
        {
            var totalCaps= capsQty * cap;
            totalAmount += totalCaps;
            var newRow = tableTotalReceipt.insertRow();
            newRow.style = "text-align: left;";
	       	var cell1 = newRow.insertCell(0);
	       	cell1.innerHTML = "<i> Caps </i>";
	       	var cell2 = newRow.insertCell(1);
	       	cell2.innerHTML = capsQty;
            var cell3 = newRow.insertCell(2);
	       	cell3.innerHTML = "$"+ cap.toFixed(2);
            var cell4 = newRow.insertCell(3);
	       	cell4.innerHTML = "$"+ totalCaps.toFixed(2);
        }
        if(parseInt(pensQty) > 0){
            var totalPens= pensQty * pen;
            totalAmount += totalPens;
            var newRow = tableTotalReceipt.insertRow();
            newRow.style = "text-align: left;";
	       	var cell1 = newRow.insertCell(0);
	       	cell1.innerHTML = "<i> Pens </i>";
	       	var cell2 = newRow.insertCell(1);
	       	cell2.innerHTML = pensQty;
            var cell3 = newRow.insertCell(2);
	       	cell3.innerHTML = "$"+ pen.toFixed(2);
            var cell4 = newRow.insertCell(3);
	       	cell4.innerHTML = "$"+ totalPens.toFixed(2);
        }
        if(parseInt(bagsQty) > 0){
            var totalBags= bagsQty * candyBag;
            totalAmount += totalBags;
            var newRow = tableTotalReceipt.insertRow();
            newRow.style = "text-align: left;";
	       	var cell1 = newRow.insertCell(0);
	       	cell1.innerHTML = "<i> Candy Bags </i>";
	       	var cell2 = newRow.insertCell(1);
	       	cell2.innerHTML = bagsQty;
            var cell3 = newRow.insertCell(2);
	       	cell3.innerHTML = "$"+ candyBag.toFixed(2);
            var cell4 = newRow.insertCell(3);
	       	cell4.innerHTML = "$"+ totalBags.toFixed(2);
        }
        if(parseInt(cupcakesQty) > 0)
        {
            var totalCupCakes= cupcakesQty * cupCake;
            totalAmount += totalCupCakes;
            var newRow = tableTotalReceipt.insertRow();
            newRow.style = "text-align: left;";
	       	var cell1 = newRow.insertCell(0);
	       	cell1.innerHTML = "<i> Cup Cakes </i>";
	       	var cell2 = newRow.insertCell(1);
	       	cell2.innerHTML = cupcakesQty;
            var cell3 = newRow.insertCell(2);
	       	cell3.innerHTML = "$"+ cupCake.toFixed(2);
            var cell4 = newRow.insertCell(3);
	       	cell4.innerHTML = "$"+ totalCupCakes.toFixed(2);
        }

        //Donation
        var newRow = tableTotalReceipt.insertRow();
        newRow.style = "text-align: left;";
	    var cell1 = newRow.insertCell(0);
        cell1.colSpan = 3;
	    cell1.innerHTML = "<i> Donation - 10% (Minimum $10) </i>";
        var cell2 = newRow.insertCell(1);
        if(totalAmount > 100){
            cell2.innerHTML = "$"+(totalAmount * 0.1)
        }
        else{
            cell2.innerHTML = "$10";
        }
	    	
        //Total Amount with donation
        var totalRow = tableTotalReceipt.insertRow();
        totalRow.style = "text-align: left;";
	    var row1 = totalRow.insertCell(0);
        row1.colSpan = 3;
	    row1.innerHTML = "<i> Total </i>";
	    var row2 = totalRow.insertCell(1);
        if(totalAmount > 100){
            row2.innerHTML = "$" + (totalAmount * 1.1).toFixed(2);
        }
        else{
            row2.innerHTML = "$" + (totalAmount + 10).toFixed(2);
        }
    }
    else{
        alert("Details can't be empty or your credit card has been expired!");
    }
}   
