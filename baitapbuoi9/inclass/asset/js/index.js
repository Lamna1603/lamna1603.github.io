// // const arr=[1,2,3,5];

// // //arr.foreach
// // let total=0;
// // arr.forEach(function(value){
// //     total+=value
// // })
// // console.log(total)

// // //arr.map
// // const test=arr.map(function(value){
// //     return value+'test'
// // })
// // console.log(arr)
// // console.log(test)

// // //arr.find

// // const test2=arr.find(function(value){
// //     return value===1//khi k tim thay thi return undefind, thay thi in ra gia tri dos
// // })

// // console.log(test2)

// // const arr2=[
// //     'a','b','c'
// // ]

// // const result2=arr.includes('d') 
// // const result3=arr.reduce(function(previousValue,currentValue,curretnIndex,arr){
// //     console.log('pre: ',previousValue)
// //     console.log('current: ',currentValue)
// //     console.log("..........")
// //     return currentValue
// // },"abc")

// // console.log('finish',result3)

// const arr=[1,2,3]

// function forEach(arr,callback){
//     for(let i=0;i<arr.length;i++){
//         callback(arr[i],i,arr)
//     }
// }

// function map(arr,callback){
//     var arrnew=[]
//     for(i=0;i<arr.length;i++){
//         const value=callback(arr[i],i,arr)
//         arrnew.push(value)
//     }
//     return arrnew
// }

// function find(arr,callback){
    
//     for(i=0;i<arr.length;i++){
//         const value=callback(arr[i],i,arr)
//         if(value) return arr[i]
//     }
//     return 
// }
// function include(arr, value){
//     for(i=0;i<arr.length;i++){
//         if(value===arr[i])
//             return true;
//         else return false
//     }
// }

// function reduce(arr,initial,callback){

    
//     let i=0
//     if(initial===undefined){

//      initial=a[0]
//      i=1
//     }
//     for(;i<arr.length;i++){
//         const current=a[i]
//         const currentIndex=i
//         const pre=initial
//         initial=callback(pre,current,currentIndex,arr)
//     }
//     return initial

// }

// // use 

// forEach(arr,function(){

// })

const d=new Date
setTimeout(function(){
    console.log('sau 3 giai')
},3000){

}

setInterval()
clearTimeout

js event loop


Array.filterzswzsw