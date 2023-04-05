var FirstNum = '';

var SecondNum = '';

var NumIntegers = 0;

var CurrentNumber = 1;

let Operation = '';
var ReturnValue = 0;


function CreateNumber(x){
   if (CurrentNumber === 1) {
      if (NumIntegers < 13) {
      FirstNum += x
      console.log(FirstNum)
      document.getElementById("out").innerHTML = FirstNum;
      NumIntegers += 1
      }
   } if (CurrentNumber === 2) {
         if (NumIntegers < 13) {
         SecondNum += x
         console.log(SecondNum)
         document.getElementById("out").innerHTML = SecondNum;
         NumIntegers += 1
      }
   }
}

function ChooseOperation(oper) {
   if (FirstNum !== '') {
      FirstNum = Number(FirstNum)
      Operation = oper
      CurrentNumber = 2
      console.log(FirstNum)
      NumIntegers = 0
   }

}

function Calculate() {
   if (SecondNum !== '') {

      SecondNum = Number(SecondNum)
      if (Operation === '+') {
         var ReturnValue = FirstNum + SecondNum
      } if (Operation === '-') {
         var ReturnValue = FirstNum - SecondNum
      } if (Operation === '*') {
         var ReturnValue = FirstNum * SecondNum
      } if (Operation === '/') {
         var ReturnValue = FirstNum / SecondNum
      }

      document.getElementById("out").innerHTML = ReturnValue;
   }
}

function Erase() {
   FirstNum = '';

   SecondNum = '';

   NumIntegers = 0;

   CurrentNumber = 1;

   Operation = '';
   ReturnValue = 0;
   document.getElementById("out").innerHTML = FirstNum;
}