function singleParametars(input){
    return new Promise((resolve, reject)=>{
        if(typeof input !="string" || isNaN(input)==false){
            reject(console.log(`Your input ${input} is not a string `))
        }    
        setTimeout(function(){
            resolve(console.log(`You input ${input} in uppercase is :` + input.toUpperCase()));
        }, 4000);
        })
    }

singleParametars(2);
singleParametars("kristijan");