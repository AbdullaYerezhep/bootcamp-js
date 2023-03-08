const escapeStr = '` \\ / "  \'';
const arr = [4, '2']

const obj = {
    str : 'string',
    num : 2,
    bool: true,
    undef:undefined
}
const nested = {
    arr: [4, undefined, '2'],
    obj: {
      str: 'Hello',
      num: 42,
      bool: true
    }
  };
Object.freeze(nested, arr, obj)