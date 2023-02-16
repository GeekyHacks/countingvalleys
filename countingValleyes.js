
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