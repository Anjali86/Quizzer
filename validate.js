
function validate() {
  var age, weight,name, res;

  name= document.getElementById("name").value;
  age = document.getElementById("age").value;
  weight = document.getElementById("weight").value;

  
  if (age >= 5 && age <=7)
  {
    if( weight >=15 && weight<=20){   
        res = "Your Weight is perfect";
  } 

  else{
    if(weight>20){
        res = "Hello Your weight is Greater than recommended value of  20KG at an age of 5-7";
      }else{
    res = "Hello Your weight is less than recommended value of  20KG at an age of 5-7";
  }
  }
  }     
    else if(age >= 8 &&  age <= 10)
    
    {
        if (weight >=20 && weight<=25){
            res = "Your Weight is perfect";
        }
        else{
            res = "Hello Your weight is less than recommended value of  25KG at an age of 8-10";  
        }
    }
    
   
   
         else if(age >= 11 &&  age <= 15)
         {
if (weight >=26 && weight<=30){
    res = "Your Weight is perfect";
}
else{
    res = "Hello Your weight is less than recommended value of  30KG at an age of 11-15";
}
         }
         


             else if(age >= 16 &&  age <= 20)
             {
                 if(weight >=31 && weight<=40){
                    res = "Your Weight is perfect";
                 }
                 else{
                    res = "Hello Your weight is less than recommended value of  40KG at an age of 16-20";
                 }
             }
             
             
     document.getElementById("username").innerHTML = "Hello" +"&nbsp;"+ name+ +"&nbsp;"+"!!!";
  document.getElementById("demo").innerHTML = res;

}
