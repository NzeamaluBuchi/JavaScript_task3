function wholeNumber (number) {
   let intArray = [];
    for (i=1; i<=number; i++) {
        
        if (i%30==0) {
            intArray.push("yu-gi-oh");
        } else if (i%15==0) {
            intArray.push("gi-oh");
        }  else if (i%10==0){
            intArray.push("yu-oh");
        } else if (i%6==0) {
            intArray.push("yu-gi");
        }
        else if(i%2==0) {
            intArray.push("yu");
        } 
        else if (i%3==0) {
            intArray.push("gi");
        } else if (i%5==0) {
           intArray.push("oh");
        } else {
            intArray.push(i);
        }  
    } 
    console.log(intArray);
  
}

console.log(wholeNumber(100));
console.log(wholeNumber(26));