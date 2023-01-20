function shuffle(array){
    var ci = array.length,
    ri;

    while(0 !== ci){
        ri=Math.floor(Math.random()*ci);
        ci--;
        [array[ci], array[ri]]= [array[ci],array[ci]];
    }
    return array;
}
 
    
function spin(){
    
    const box = document.getElementById("box")
    const element = document.getElementById("mainbox")
    const st = document.getElementById("myTextBox").value;
    
    let SelectItem = "";

   let A = shuffle([1890]);
   let B = shuffle([1850]);
   let C = shuffle([1820]);
   let D = shuffle([1785]);
   let E = shuffle([1750]);
   let F = shuffle([1710]);
   let G = shuffle([1670]);
   let H = shuffle([1640]);
   let I = shuffle([1605]);
   let J = shuffle([1575]);
   

   let results;
     if(st==100) results=shuffle(A);
     if(st==200) results=shuffle(B);
     if(st==300) results=shuffle(C);
     if(st==400) results=shuffle(D);
     if(st==500) results=shuffle(E);
     if(st==600) results=shuffle(F);
     if(st==700) results=shuffle(G);
     if(st==800) results=shuffle(H);
     if(st==900) results=shuffle(I);
     if(st==1000) results=shuffle(J);
     if(st=="")alert("Please Fill Input");
   

   


   box.style.setProperty("transition", " all ease 5s");
   box.style.transform = "rotate(" + results[0] + "deg)";
   element.classList.remove("animate");

   setTimeout(function(){
    element.classList.add("animate");
   },5000);

   setTimeout(function(){
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)"
   },8000);
}