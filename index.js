var obj = {prop: 1}
function updateObjectWithKeyAndValue(object,key,value){
  object = Object.assign({},obj)
  object[key]=value
  return object
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value
  return object
}
