function updateObjectWithKeyAndValue(object,key,value){
  newobject = Object.assign({},object)
  newobject[key]=value
  return newobject
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value
  return object
}
function destructivelyDeleteFromObjectByKey(object,key){
//  object = Object.assign({},obj)
  newobject = Object.assign({},object)
  delete newobject[key]
  return newobject
}
