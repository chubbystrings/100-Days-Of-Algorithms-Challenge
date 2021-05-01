function oddOrEven(array) {
    //enter code here
   function calculateEvenOdd(arr) {
     return arr.reduce((a, b) => a + b) % 2 === 0 ? 'even' : 'odd'
   }
   if (array.length === 0 ) {
    return  calculateEvenOdd([0])
   }
   
   return calculateEvenOdd(array)
}