var recipe = {prop: 1}
function updateObjectWithKeyAndValue(object,key,value){
  object = Object.assign({},recipe)
  object[key]=value
  return object
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value
  return object
}
function destructivelyDeleteFromObjectByKey(object,key){
//  object = Object.assign({},obj)
  object = Object.assign({},recipe)
  delete object[key]
  return object
}
