function init(){
    var a = 50;
    var b = 6;

    console.log(c);
    
    if(a < b){
        function initC(){
            var c = b - a;
        }
        initC();
    }
    else{
        function initC(){
            var c = a - b;
        }
        initC();
    }
    
    console.log(c);
}

init();