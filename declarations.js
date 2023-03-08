const escapeStr = '` \\ / "  \'';
const arr = [4, '2']    
const obj = {
    str : 'string',
    num : 2,
    bool: true,
    undef:undefined
}
const nested = {
    arr: Object.freeze([4, undefined, '2']),
    obj: Object.freeze({
      str: 'Hello',
      num: 42,
      bool: true
    })
  };
  
Object.freeze(nested);
Object.freeze(obj)
Object.freeze(arr)
nested.obj.update = 5
console.log(nested)