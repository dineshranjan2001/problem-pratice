const data = [
    { name: "A", age: 20 },
    { name: "B", age: 20 },
    { name: "C", age: 30 }
];

/*
  {
    20:[...],
    30:[...]
    }
*/

const newObject={};
for(let arr of data){
  if(!newObject[arr.age]){
    newObject[arr.age]=[]
  }
}

for(let arr of data){
  newObject[arr.age].push(arr);
}
console.log(newObject)


// using reduce function
const result=data.reduce((acc,user)=>{
  if(!acc[user.age]){
    acc[user.age]=[];
  }

  acc[user.age].push(user);
  return acc;
},{});

console.log(result);