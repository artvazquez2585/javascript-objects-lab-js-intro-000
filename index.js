var recipes = {}
function updateObjectWithKeyAndValue(object,key,value){
  object = Object.assign({},recipes)
  object[key]=value
  return object
}
