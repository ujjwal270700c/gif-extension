document.addEventListener("DOMContentLoaded",function(){
    const name=document.getElementById("name");
    document.getElementById('btn').addEventListener("keypress",function(e){

        const inputname=name.value;
         if(13===e.keyCode){
          alert(`Hello ${inputname}, Click on NEWTAB for trending Gif's `);
         }
         })
    });