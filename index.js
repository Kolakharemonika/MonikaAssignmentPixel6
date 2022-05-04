


function validation() {

   
    if(nameChecker()===true){

        if(userEmailChecker()===true){

              if(phoneChecker()===true){

                    //if personal details valid then form will submit after Random otp generated
                
                const thisisotp=Math.floor(1000 + Math.random()*9000);
                console.log("This is otp "+thisisotp); // OTP displayed on Console
                document.getElementById("otpname").value=thisisotp;
                   
                    //after validation --form will submit
                     document.form1.submit() ; 

               }else{
                      document.getElementById("numPhone").innerHTML="*enter valid PhoneNumber....!";
                       return false;
                    }
        }else{
             document.getElementById("userEmail1").innerHTML="You have entered an invalid email address!";
             return false;
        }
    }else{
        document.getElementById("fullName").innerHTML="*Invalid Name";
           return false;
    }
     
//if validation false then FORM will not SUBMIT
function newFunction() {
    document.preventDefault(); }
}//validation



function phoneChecker(){
    
    var phoneNumber=document.form1.userPhone.value;
    phoneNumber=phoneNumber.replace(/[^\d]/g, "");
    
  if (phoneNumber.length==10) {
 
   document.getElementById("numPhone").innerHTML="";//span error not shown
  //phonestate() function calling for assign state and sim name to phone number
   phonestate();

          if(phonestate()===true){
             return true;
             }else{
                  document.getElementById("telNo").value="";
                  document.getElementById("numPhone").innerHTML="*enter valid PhoneNumber....!";
                return false;
                   }
  }else{

  return false;
        }
    }//end phoneChecker


function nameChecker(){
    var userName =document.form1.userName.value; //fetching value of fullname
    var matches=userName.match(/\b[^\d\s]+\b/g);
    
   //length of fullname should two string---
        if(matches && matches.length ==2) {
            //comparing length of first & last name greater than 4 letters--
             if (matches[0].length>=4 && matches[1].length>=4) {
                       document.getElementById("fullName").innerHTML="";//name valid then error not shown
                       
                    return true;
                 } else{
                      document.getElementById("fulluserName").value="";
                      document.getElementById("fullName").innerHTML="*invalid fullname length";
                      return false;
                     }
        }else {
              document.getElementById("fulluserName").value="";
              document.getElementById("fullName").innerHTML="*Invalid Name";
            return false;
                }
}//end namChecker



function userEmailChecker(){
    var userEmail =document.form1.userEmail.value; //fetching value of email
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) 

    //  if (/^[a-zA-Z]+[0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z0-9-]+)*$/.test(userEmail)) 
      {
        document.getElementById("userEmail1").innerHTML="";
        return true;
      }
      else {
        document.getElementById("userEmail").value="";
        document.getElementById("userEmail1").innerHTML="You have entered an invalid email address!";
       return false;
      }

}//end







function check(){
    /*onkeypress on text--phone number will display like display like (123)-123-1234 if length==9 */
  var phoneNumber=document.form1.userPhone.value;
   phoneNumber=phoneNumber.replace(/[^\d]/g, "")
       if(phoneNumber.length==9) {
    //Mobile number display like (123)-123-1234
          var data=phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/,"($1)-$2-$3");
          document.form1.userPhone.value=data;
              return true;

                 }
     return false;
}//end check function


function phonestate(){
    //onkeyup of text-phone this function will call--
    var phoneNumber=document.form1.userPhone.value;
    var Number=phoneNumber.replace(/[^\d]/g, "");//removing Non-digit letters/special characters
   if(Number.length==10) {
       //SimName for alloted first 3 digit of PhoneNumber
       //for Vodaphone sim--Number between "921 to 999"
       var voda=/^[9][2][1-9]\d{7}$/;
       var voda1=/^[9][3-9][0-9]\d{7}$/;
// num 800 not given in assignment
//for Idea sim--Number between "" 801 to 920"
    var idea=/^[8][0][1-9]\d{7}$/;
    var idea1=/^[8][1-9][0-9]\d{7}$/;
    var idea2=/^[9][0-1][0-9]\d{7}$/;
    var idea3=/^[9][2][0]\d{7}$/;
//for relience sim--Number between "621 to 799
    var reli=/^[6][2][1-9]\d{7}$/;
    var reli1=/^[6][3-9][0-9]\d{7}$/;
    var reli2=/^[7][0-9][0-9]\d{7}$/;

    /* for Vodaphone sim--Number between "921 to 999"  */
   
    if(voda.test(Number)|| voda1.test(Number)){

                var data=Number.replace(/(\d{3})(\d{3})(\d{4})/,"($1)-$2-$3");
                document.form1.userPhone.value=data;
                var vodasim='Vodaphone Sim';
                document.getElementById("mylocation1").innerHTML=vodasim;
               //function statecheck call-- for getting state Name
                statecheck();
                return true;

    }else if(idea.test(Number)|| idea1.test(Number)|| idea2.test(Number)||idea3.test(Number)){
              var data=Number.replace(/(\d{3})(\d{3})(\d{4})/,"($1)-$2-$3");
              document.form1.userPhone.value=data;
              var ideasim='Idea Sim';
              document.getElementById("mylocation1").innerHTML=ideasim;
              statecheck();
              return true;

   }else if(reli.test(Number)|| reli1.test(Number) ||reli2.test(Number)){
               var data=Number.replace(/(\d{3})(\d{3})(\d{4})/,"($1)-$2-$3");
               document.form1.userPhone.value=data;
               var relisim='Relience Sim';
               document.getElementById("mylocation1").innerHTML=relisim;
               statecheck();
               return true;
   } else {
    document.getElementById("numPhone").innerHTML="*This phone number is not valid ";
    return false;
          }
return false;
}
return false;
}

    /*Phone number get valid State Name alphabetically,
     first 3 digit of phone number shows Sim card Name & next 3 digit for state name*/

function statecheck()
{    
const phone=document.form1.userPhone.value;
const userEnteredState=phone.slice(6,9);
//all states

const arrayState=["Andhra_Pradesh","Arunachal_Pradesh","Asam","Bihar","Chhatisgarh","Goa","Gujrat",
"Haryana","Himachal Pradesh","Jammu & Kashmir","Jharkhand","Karnatak","Kerala","Madhya_Pradesh","Maharashtra",
"Manipur","Meghalaya","Mizoram","Nagaland","Odisa","Punjab","Rajastan","Sikkim","Tamilnadu","Telgana",
"Tripura","Utter_pradesh","Uttarakhand","West Bengal","Delhi","DieDaman & DadraNagarHaveli",
"Pondicherry","chandigarh","Andaman & Nicobar", "Lakshdweep","Ladakh"];


const arrayStateValue=[27,54,081,108,135,162,189,216,243,270,297,324,351,378,405,432,459,486,513,540,576,594,
  621,648,675,702,729,756,783,810,837,864,891,918,945,999];


for(let stateDisplay=0; stateDisplay<=35; stateDisplay++){

    if(userEnteredState<=arrayStateValue[stateDisplay]){
       
        document.getElementById("mylocation").innerHTML=arrayState[stateDisplay];
        break;
    }

}

}




