var FirstNum = '';

var SecondNum = '';

var NumIntegers = 0;

var CurrentNumber = 1;

let Operation = '';
let ReturnValue = '';

let Precision = 0;
let List = '';

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
   if (FirstNum !== '' && ReturnValue === '') {
      FirstNum = Number(FirstNum)
      Operation = oper
      CurrentNumber = 2
      console.log(FirstNum)
      NumIntegers = 0
   } if (ReturnValue !== '') {
      SecondNum = ''
      Operation = oper
      CurrentNumber = 2
      console.log(FirstNum)
      NumIntegers = 0
      console.log('work')
   }

}

function Calculate() {
   console.log(`first${FirstNum}, sec${SecondNum}`)
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

      List = ReturnValue.toString()

      if (List.length > 13) {
         List = List.split('.')

         Precision = 12 - List[0].length
         console.log(Precision)

         if (Precision < 0) {
         ReturnValue = ReturnValue.toFixed(0)
         } else {
            ReturnValue = ReturnValue.toFixed(Precision)
         }

      }

      console.log(List, Precision)

      document.getElementById("out").innerHTML = ReturnValue;
      FirstNum = ReturnValue
      SecondNum = ''
   }
}

function Erase() {
   FirstNum = '';
   Precision = 0;
   List = '';

   SecondNum = '';

   NumIntegers = 0;

   CurrentNumber = 1;

   Operation = '';
   ReturnValue = '';
   document.getElementById("out").innerHTML = FirstNum;
}