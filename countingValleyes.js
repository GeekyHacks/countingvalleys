
function countingValleys(steps, path) {
    // Write your code here
let valleyCounter = 0;
    let altitude = 0;
    for (let i=0; i<path.length; i++){
        if (path[i] ==="U"){
            altitude++;
            if (altitude === 0){
                valleyCounter++;
            }
        }else{
            altitude--;
        }
    }
    return valleyCounter;
}
/* 

the credits of this code goes to @ktmmoorthi

for this kind of problems you need to have a starting point  
and a refrence point which are both represented by the altutude variable

and since the output we want is how many valleys the hiker climbed we need 
a counter as valleyCounter


to go through all the path items you need for loop
and since the path is a string here the ending point for the for loop will be 
the length of it.

since the altitude goes increase when hiker ckimbs up 
altitude will be added in the first if statment and sustracted in the 
the else brackets

and valleycoubter must only start counting when the altitude at sealvl
and equal zero

the right place for return code is after the for loop so it gives the right 
answer */
