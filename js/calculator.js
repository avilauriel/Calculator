/*********************************************************************
 *                Calculator: A JavaScript Implementation            *
 * PLEASE DO NOT MODIFY THE CODE THE SECTION LABELED AS UNMODIFIABLE *
 * CIS 5620: Authoring Websites                                      *
 *********************************************************************/

/* 
  Avoid creating global variables by implementing all the application
  inside an Immediately Invoked Function Expression (IIFE).
*/
(() => {

    /******************************************
     *          UNMODIFIABLE SECTION          *
     * DO NOT MODIFY THE CODE IN THIS SECTION *
     ******************************************/
  
    /**
    Add event listeners to each operator button in the interface.
  
    @returns No value.
    */
    function addCalculatorListeners() {
      for (let calcFunction of [clear, add, substract, multiply, divide, calculate]) {
        const control = document.querySelector("#" + calcFunction.name);
        control.addEventListener('click', calcFunction);
      }
    }
  
    // Add event listeners
    addCalculatorListeners();
  
    /******************************************
     *       END OF UNMODIFIABLE SECTION      *
     ******************************************/  
  
/* Not needed
    // #1 Connect to the input area
    //let result=document.getElementById("operand");
    const resultsEl = document.querySelector('.operand');
    const additionEl = document.querySelector('.add');
    const subtractionEl = document.querySelector('.substract');
    const multiplicationEl = document.querySelector('.multiply');
    const divisionEl = document.querySelector('.divide');
    const equalEl = document.querySelector('.calculate');
  
*/
   

   /**
    Resets the calculator to its initial state.
  
    
    @returns No value.
    */  
    function clear() {
      result = Calculator.display.value= " ";
      console.log("CLEAR");
    }
  
   /**
    Performs the addition operation.
  
    @returns No value.
    */

    function add(number) {
      result = (Calculator.display.value += '+');
      console.log("ADD");
  
    }
  
   /**
    Performs the substraction operation.
  
    @returns No value.
    */  
    function substract(number) {
      result = (Calculator.display.value += '-');
      console.log("SUBSTRACT");
    }
  
   /**
    Performs the multiplication operation.
  
    @returns No value.
    */    
    function multiply(number) {
      result = (Calculator.display.value += '*');
      console.log("MULTIPLY");
    }
  
   /**
    Performs the division operation.
  
    @returns No value.
    */    
    function divide(number) {
      result = (Calculator.display.value += '/');
      console.log("DIVIDE");
    }
  
   /**
    Handles the "=" operator.
  
    @returns No value.
    */    

    
    function calculate(number) {
      try{
        result = (Calculator.display.value = eval(Calculator.display.value));
      }
      catch(err){
        result("Enter the Valid input");
      }
      console.log("CALCULATE");
      
    }

    
  
  })();
