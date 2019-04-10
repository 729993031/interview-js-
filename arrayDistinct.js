function distance_forEach(array) {
    console.time('forEach');

    let copyArray=[

    ];

    array.forEach((currentValue)=>{
        if(currentValue===0){
            copyArray.push(0)
        }else if (copyArray.indexOf(currentValue)<0) {
            copyArray.push(currentValue)
        }
    });
    return console.timeEnd('forEach');
}
function distance_filter(array) {
    console.time('filter');
    array.filter((element,index,array)=>        array.indexOf(element)===index
    )
    return console.timeEnd('filter');

}
function distance_map(array) {
    console.time('Map');
    const array_filtration=new Map();
    array.filter((element)=>!array_filtration.has(element)&&array_filtration.set(element,1));
    return console.timeEnd('Map');
}
const target_array=[];
for (let i = 0; i < 100000; i++) {
    target_array.push(0 + Math.floor((100000 - 0 + 1) * Math.random()))
}
distance_forEach(target_array);
distance_filter(target_array);
distance_map(target_array);

