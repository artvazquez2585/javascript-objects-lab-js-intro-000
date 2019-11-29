var recipe = {}
function updateObjectWithKeyAndValue(object,key,value){
  object = Object.assign({},obj)
  object[key]=value
  return object
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value
  return object
}
function destructivelyDeleteFromObjectByKey(object,key){
//  object = Object.assign({},obj)
  delete object[key]
  return object
}
