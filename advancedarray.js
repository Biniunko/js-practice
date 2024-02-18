const array = [1, 2, 10, 16]
const double=[]
const newarray= array.forEach((num)=>{
	double.push(num * 2)
})
console.log(double)
//map
const maparray= array.map((num)=>{
	return num*2
})
console.log(maparray)

//filter
const filterarray= array.filter(num=> {
	return num>5})
console.log(filterarray)

//reduce
const reducearray=array.reduce((accumulator, num)=>{
	return accumulator + num
},0)//0 is the default intialization it can be initialize with any number 
console.log('reduce',reducearray)

