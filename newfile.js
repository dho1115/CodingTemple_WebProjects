

function largerinteger(a,b) { // #1: Larger integer.
    return a > b ? a : b;
}//accepts 2 integers and displays the larger. 

// function sort3numbers(a,b,c) { //#2: Sort 3 numbers.
    
//     return 
// } 

function LargestOf5Numbers(a,b,c,d,e) { //#3: Largest of 5 numbers.
    var arr = [];
    arr.push(a);
    arr.push(b);
    arr.push(c);
    arr.push(d);
    arr.push(e);
    alert(arr.sort((a,b) => b-a)[0]);
} 

function oddoreven() { //#4: Odd or even;
    for(var i=1; i<16; i++) {
        console.log(i%2 === 1 ? "odd" : "even");
    }
} 

function fizzBuzz() { //#5: FizzBuzz
    for(var i=1; i<101; i++) {
        if(i%15 === 0) {
            console.log("FizzBuzz");
        } else if(i%3 === 0) {
            console.log("Fizz");
        } else if(i%5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
} 

function divisibleby3() { //#6: Count how many numbers between 1-1000 divisible by 3.
    var count; 
    count =0;

    for(var i=0; i<1000; i++) {
        i%3 === 0 ? count +=1 : count;
    }

    console.log(count);
} 

function tree() {
    var leftSide, arr;
    leftSide = "";
    arr = [];

    for(var i=1; i<6; i++) {
        leftSide += i;        
        arr.push(" " + leftSide);        
    };
    
    leftSide = "";

    for(var i=0; i<5; i++) {        
         leftSide += arr[i] + "\n";       
    }
    
    console.log(leftSide);
}