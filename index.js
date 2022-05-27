var array1 = [1,2,3,4]
var array2 = [5,6,7,8]
var array3 = [9,10,11,12]
var array4 = [13,14,15,16]
var resp1 = [0,0,0,0]
for(var i = 0;i < array1.length; i++){
	resp1 [i] = array1[i] + array2[i] + array3[i] + array4[i]
}
var resp2 = [0]
for(var j = 0;j < array1.length; j++){
	resp2 = array1[0]*array1[1]*array1[2]*array1[3]
}
for(var j = 0;j < array1.length; j++){
	resp3a = array1[0] + array1[1] + array1[2] + array1[3]
}
{
  resp3b = array2[0] + array2[1] + array2[2] + array2[3]
}
{
  resp3c = array3[0] + array3[1] + array3[2] + array3[3]
}
{
  resp3d = array4[0] + array4[1] + array4[2] + array4[3]
}
for(var j = 0;j < array1.length; j++){
	resp4 = array1[0] * array2[1] * array3[2] * array4[3]
}
console.log("A soma dos elementos de primeira coluna é =",resp1[i=0])
console.log("O produto dos elementos da primeira linha é =",resp2)
console.log("A soma de todos os elementos é =",resp3a+resp3b+resp3c+resp3d)
console.log("O produto da diagonal principal é =",resp4)