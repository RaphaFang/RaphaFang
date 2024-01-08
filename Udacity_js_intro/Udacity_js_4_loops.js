 // 1.____________________________________________________________
var x = 1;
while (x <= 20) {
    if (x%3 === 0 && x%5 === 0){
        console.log("JuliaJames");
    }else if(x%3 === 0){
        console.log("Julia");
    }else if(x%5 === 0){
        console.log("James");
    }else{
        console.log(x);
    }
    x +=1;
}


 // 2.____________________________________________________________
var num = 99;
while (num > 0) {
    if(num >2){
        console.log(num+" bottles of juice on the wall! "+num+" bottles of juice! Take one down, pass it around... "+(num-1)+" bottles of juice on the wall!");
    }else if (num ===2){
        console.log(num+" bottles of juice on the wall! "+num+" bottles of juice! Take one down, pass it around... "+(num-1)+" bottle of juice on the wall!");
    }else{
        console.log(num+" bottle of juice on the wall! "+num+" bottle of juice! Take one down, pass it around... "+(num-1)+" bottles of juice on the wall!");
    }
    num-=1;
}


 // 2.____________________________________________________________
