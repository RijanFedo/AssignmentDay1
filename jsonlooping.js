let obj={"Rijan":9600722057,"Rino":8870413624,"Amma":7598473046};
let arr={"Fedo":[123,456,789],"Dini":[12,34,56,67]}
for(let a in obj)
{
  console.log(a + ":" + obj[a])
}
for(let a in arr)
{
  for(let b of arr[a])
{
  console.log(b)
}
arr[a].forEach(a=> console.log(a))
//console.log(arr[a].length)
for(let i=0;i<arr[a].length;i++)
{
    console.log(arr[a][i])
}
}
