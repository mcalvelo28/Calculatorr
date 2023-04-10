var FirstNum = '';

var SecondNum = '';

var NumIntegers = 0;

var CurrentNumber = 1;

let Operation = '';
let ReturnValue = '';

let Precision = 0;
let List = '';

var NegativeValue = 1;

function CreateCharacter(char){
   if (char === '.') {
      if (CurrentNumber === 1){
         if (FirstNum.includes('.') === false){
            FirstNum += char
            console.log(char)
            document.getElementById("out").innerHTML = FirstNum;
            NumIntegers += 1
         }
      } if (CurrentNumber === 2){
         document.getElementById("sign").innerHTML = ' ';
         if (SecondNum.includes('.') === false){
            SecondNum += char
            console.log(char)
            document.getElementById("out").innerHTML = SecondNum;
            NumIntegers += 1
         }
      }
   }
}

function CreateNumber(x){
   NegativeValue = 1
   NegativeText()
   if (CurrentNumber === 1) {
      if (NumIntegers < 12) {
      FirstNum += x
      console.log(FirstNum)
      document.getElementById("out").innerHTML = FirstNum;
      NumIntegers += 1
      }
   } if (CurrentNumber === 2) {
         if (NumIntegers < 12) {
         SecondNum += x
         console.log(SecondNum)
         document.getElementById("out").innerHTML = SecondNum;
         NumIntegers += 1
      }
   }
}

function ChooseOperation(oper) {
   if (FirstNum !== '' && ReturnValue === '') {
      FirstNum = Number(FirstNum) * NegativeValue
      Operation = oper
      CurrentNumber = 2
      console.log(FirstNum)
      NumIntegers = 0
      NegativeValue = 1
      NegativeText()
   } if (ReturnValue !== '') {
      console.log(ReturnValue)
      SecondNum = ''
      Operation = oper
      CurrentNumber = 2
      console.log(FirstNum)
      NumIntegers = 0
      NegativeValue = 1
      NegativeText()
      console.log('work')
   }

}

function Calculate() {
   console.log(`first${FirstNum}, sec${SecondNum}`)
   if (SecondNum !== '') {
      SecondNum = Number(SecondNum) * NegativeValue
      if (Operation === '+') {
         var ReturnValue = FirstNum + SecondNum
      } if (Operation === '-') {
         var ReturnValue = FirstNum - SecondNum
      } if (Operation === '*') {
         var ReturnValue = FirstNum * SecondNum
      } if (Operation === '/') {
         var ReturnValue = FirstNum / SecondNum
      }

      List = ReturnValue.toString()

      if (List.length > 12) {
         List = List.split('.')

         Precision = 11 - List[0].length
         console.log(Precision)

         if (Precision < 0) {
            ReturnValue = ReturnValue.toFixed(0)
         } else {
            ReturnValue = ReturnValue.toFixed(Precision)
         }

      }

      console.log(List, Precision)

      if (ReturnValue < 0) {
         NegativeText(ReturnValue)
      } else {
         NegativeText(ReturnValue)
      }

      document.getElementById("out").innerHTML = Math.abs(ReturnValue);
      console.log(ReturnValue)
      FirstNum = ReturnValue * NegativeValue
      SecondNum = ''
   }
}

function Erase() {
   FirstNum = '';
   Precision = 0;
   List = '';

   SecondNum = '';

   NumIntegers = 0;
   NegativeValue = 1;
   NegativeText(NegativeValue)

   CurrentNumber = 1;

   Operation = '';
   ReturnValue = '';
   document.getElementById("out").innerHTML = FirstNum;
}

function ChangeSign() {
   if (NegativeValue === 1) {
      NegativeValue = -1
   } else {
      NegativeValue = 1
   }
   NegativeText(NegativeValue)
   console.log(NegativeValue)
}

function NegativeText(sign) {
   if (sign < 0) {
      document.getElementById("sign").innerHTML = '-';
   } else {
      document.getElementById("sign").innerHTML = ' ';
   }
}