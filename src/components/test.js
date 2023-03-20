import {produce} from 'immer'
const arr1 = {
  Name: "Tahir",
};
function update(array){

  return produce(array, updater=>{
     updater.age = 10;
  })
}

const updatedObject = update(arr1);

for(let [key,value] of Object.entries(updatedObject)){
  console.log(key + value)
}



