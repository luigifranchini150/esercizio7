function pizzbuzz(n) { 
   for (let i = 1; i <= n ; i++){
if (i % 15 == 0 ) { 
    console.log(`pizzbuzz`);
        }else if (i % 5 == 0 ){
            console.log(`pizz`);
        }else if (i % 3 == 0 ){
            console.log(`buzz`);
        }else{
            console.log(i);
            }
    }
}
pizzbuzz(100) 













