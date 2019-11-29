var obj = {prop: 1}
function updateObjectWithKeyAndValue(object,key,value){
  object = Object.assign({},obj)
  object[key]=value
  return object
}
