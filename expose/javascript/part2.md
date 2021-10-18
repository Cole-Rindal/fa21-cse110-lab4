1) The value of i will be printed, "3" which is the number of loop iterations in the for loop.
2) The value of discountedPrice will be printed, "150" which is the discounted price of the last item in the array inputed.
3) The value of finalPrice will be printed, "150" which is the final price of the last item in the array inputed.
4) The code will return the array of the prices after the discount was applied, "[ 50, 100, 150 ]".
5) Error because i is out of scope. Let is only deined in the code block it is declared.
6) Error because discountedPrice is out of scope. Let is only deined in the code block it is declared.
7) The value of finalPrice will be printed, "150" which is the final price of the last item in the array inputed. This works because finalPrice is declared in the same code block it is called from unlike the others that were declared in the for loop.
8) The code will return the array of the prices after the discount was applied, "[ 50, 100, 150 ]". This works because disounted is declared in the same code block it is called from unlike the others that were declared in the for loop.
9) Error because i is defined in the loop so, i is out of scope when called on line 11.
10) Line 12 prints, "3", length is defined in the same code block it is called from so its in scope.
11) The function returns, "[ 50, 100, 150 ]" discounted is defined in the same code block it is called from so its in scope.
12) Object calls
    1)  console.log( student.name );
    2)  console.log( student['Grad Year'] );
    3)  student.greeting();
    4)  console.log( student['Favorite Teacher'].name );
    5)  console.log( student.courseLoad[0] );
13) Arithmetic
    1)  '3' + 2 -> '32'                 Number is converted to string and both concatenated.
    2)  '3' - 2 -> 1                    Cant subtract 2 from string '3' so converted to numbers for 3 - 2.                    
    3)  3 + null -> 3                   Null has a value of 0 so, 3 + 0.
    4)  '3' + null -> '3null'           Null is converted to string so concatenated
    5)  true + 3 -> 4                   True is 1 so 1 + 3.
    6)  false + null -> 0               False is 0 and null is 0 so 0 + 0.
    7)  '3' + undefined -> 3undefined   Converted to string and concatenated.
    8)  '3' - undefined -> NaN          Undefined is Nan so 3 - NaN = NaN
14) Comparison
    1)  '2' > 1 -> true             String '2' is converted to number for comparison.
    2)  '2' < '12' -> false         String are compared letter by letter, '12' has more letters.
    3)  2 == '2' -> true            String changes to number for comparison.
    4)  2 === '2' -> false          Check equality without type conversion number != string
    5)  true == 2 -> false          Value of true is 1
    6)  true === Boolean(2) -> true Value of 2 converted to Boolean is true, true === true.
15) "==" checks equality with type conversion, "===" checks equality without type conversion.
16) for ( cars in statistics ){
        if( cars.substring(0, 1) == 'r' || statistics[cars] % 2 == 1 ){
            console.log(`${cars}: ${statistics[cars]}`);
        }   
    }
17) The code will print out, "[ 2, 4, 6 ]" because iterate through the inputted array and we pass the value of the array to the doSomething function, which muliplies the number by 2 and then we push it to the new array.
18) function getTime(){
        let d = new Date();
        let time = d.toLocaleTimeString();
        console.log(time)
    }
    setInterval( getTime ,1000 );
19) This code outputs, 
"1
4
3
2"
1 and 4 are printed immediately and the commands withing the setTimeout() are executed in order based on the ms of delay that is selected for them.