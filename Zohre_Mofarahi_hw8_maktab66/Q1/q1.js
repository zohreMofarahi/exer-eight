// challenge start
 const splitBill=(amount , numPeople) => `Each person needs to pay ${amount/ numPeople}`
    
  console.log (splitBill(10,2))
  console.log (splitBill(10,4))


  // stretch goal start
const countdown =(startingNumber ,step) => {
   let countFromNum = startingNumber + step
    return decrease=() => {
   countFromNum -=step;
   return countFromNum;
    }
    }
   const countingDown =countdown(25,3);
   
   console.log(countingDown());
   console.log(countingDown());
   
 