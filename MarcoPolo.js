function marcoPolo(){
    var result="";
    var a,b,c;
    for(var i=1;i<=100;i++){
        a = i%4;
        b = i%7;
        if(a === 0 && b === 0){
            result = result + "marcopolo"
        }
        else if(a === 0){
            result = result + "marco";
        }
        else if(b === 0){
            result = result + "polo";
        }
        else{
            result = result + i;
        }
        if(i !== 100){
            result = result + ",";
        }
    }
    return result;
}
console.log(marcoPolo());