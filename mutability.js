
const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
}
  
person.age++
person.country = "FR"

  const clone1 = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }
  Object.freeze(clone1)
  
  const clone2 = {
      name: 'Rick',
      age: 77,
      country: 'US',
    }
 
    Object.freeze(clone2)

  const samePerson = {
    name: person.name,
    age: person.age,
    country: person.country
  }
    
