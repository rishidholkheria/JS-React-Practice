const str = "UK:US:FedEx:4,UK:FR:Jet1:2,US:UK:RyanAir:8,CA:UK:CanadaAir:8" 

var arr = str.split(",");
console.log('arr', arr);


var totalPrice = 0;
arr.map((it, index) => {
    var sArray = (it.split(":"));
    sArray.map((el,ind) => {
        if(el[0] === 'US' && el[1]==='UK'){
            console.log("PRICE",el[3])
        }
    })
    // totalPrice = totalPrice + parseInt(it[it.length-1]);
})
console.log(totalPrice);