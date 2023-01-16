document.getElementById("button").addEventListener("click",function()
{
   /*get value of Temperature input */
    let degree=document.getElementById("degreeInput").value;
    /*get value of drop down menu */
    let tempTo=document.getElementById("type").value;
   /* validate number */
    let validate=/^\d+$/;

    /*condtion check if valid degree or not*/

   if(degree=='')
   {
    alert(" Enter valid Data Temperature ");
    document.getElementById("degreeInput").value="";
   }
  else if(degree.match(validate))
  {
     if(tempTo=='Fahrenheit')
    {
    /*syntax of conversion celcius to fahrenheit*/
      let result=(degree*9/5)+32;
      document.getElementById("result").value=result;
    }
     else if(tempTo=='Calevin')
     {
       /*syntax of conversion celcius to fahrenheit*/
      let result2=parseInt(degree)+273.15;
      document.getElementById("result").value=result2;
      
     }

     else
     {
      alert("Choose right operation");
     }

    

  }
  //if Temperature input is Invalid
    else{
      alert("Enter valid Temprature")
    }    
 
   


});



