//count numbers between two numbers

function countNum(a,b){
    let countr = 0;
    for(let i =a;i<=b;i++){
        countr++;
    }
    console.log("Count between",a,"and",b,"is:",countr);
};
countNum(272,316);