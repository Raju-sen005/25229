// CONSOLE METHOD
console.log("Hi Harry")//[kisi variable ko print krane keliye]
console.error("this is an error")//[user ko error btane ke liye]
console.assert(1<5)//[isme likhi baat galat hone pr ye run hoga]

obj = [1,2,3,4,5]
console.table(obj)//[table banane ke liye]
// console.table(console)
console.warn("hey,don't drink soda")//[user ko warningbatane ke liye]

console.time("foeLoop")//[time ka pata lagane m ki kitna time laga]
for(let i=0;i<5;i++){
	console.log(555)
}
console.timeEnd("foeLoop")