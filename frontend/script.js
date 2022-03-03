function init(){
    var a = 50;
    var b = 6;

    console.log(c);
    
    if(a < b){
        (function (){
            var c = b - a;
        })();
    }
    else{
        (function (){
            var c = a - b;
        })();
    }
    
    console.log(c);
}

init();