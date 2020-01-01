var sum = 0
var x = 123
for(var i = 0; i<x+1; i++) {
	sum = sum + i
}

console.log(sum)
if(x%2 == 0) {
	sum = (x) + ((x-1)*(x/2))
}
else {
	sum = x * ((x+1)/2)
}
console.log("Sum by my method is: " + sum )