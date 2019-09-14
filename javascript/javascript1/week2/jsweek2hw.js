
//weather wear


function clothesToWear (temperature){
if(temperature <=10) {
return "winter jacket, gloves, scarf & nice shoes";
}  
else if(temperature <20 && temperature>11) {
return "summer jacket and half paint";
} else {
    return "shirts, T-shirt and half paint";

 }
}
const whatDoIwear = clothesToWear(21)
console.log(whatDoIwear);



   // student manager 
   
   const class07Students = [];
   function addStudentToClass(studentName) {
       if (class07Students.length < 6){
           class07Students.push(studentName);
       }
       else if (class07Students.length > 6){
           console.log('Cannot add more students to class07');
       }
       else if (studentName === 'Queen'){
        class07Students.push(studentName);
       }
      
   }
function getNumberOfStudents (){
    class07Students.length
}
    

addStudentToClass('gita');
addStudentToClass('shyam');
addStudentToClass('hari');
addStudentToClass('chari');
addStudentToClass('rosa');
addStudentToClass('max');
addStudentToClass('Queen');
addStudentToClass('nohan');


console.log(class07Students);



//Event application

const days =['Sunday', 'monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function getEventWeekday(date){
    let daysToEvent = '';
    const today = daysToEvent.day();
    const eventday = (date+today)%7;
    return 'The event is on:'+ days[eventday];
     }
console.log (getEventWeekday(5));

// flight booking fullname function

      const firstname = "Benjamin";
       const surname = "hughes";
       const useFormalName = "lords";
       let getFullname1;
       let getFullname2;
       function getFullname (firstname,surname,useFormalName){
           if(useFormalName === true){
               getFullname1 = useFormalName + firstname + surname;
               return getFullname1;

           }
           
           else {
               getfullname2 = firstname+surname;
               return getfullname2;
           }
        }
        console.log(getFullname(useFormalName + '' + firstname + '' + surname));

       //trying to do in different way like week1 julia and peter house
       
      /*
       const firstname = ['Benjamin', 'nabin'];
       const surname = ['hughes', 'subedi'];
       const useFormalName = [ 'lords, 'mr'];
       let getFullname1 = [];
       getFullname1.push ( useFormalName[0]+'' + firstname[0]+'' + surname[0]);
       console.log(getFullname1);

       let getFullname2 = [];
       getFullname2.push ( useFormalName[1] + ''+ firstname[1]+ ''+ surname[1]);
       console.log(getFullname2);
       */

    