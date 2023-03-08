person.age++
person.country = "FR"

  const clone1 = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }
  Object.freeze(clone1)
  Object.freeze(clone2)

  const clone2 = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }


  const samePerson = {
    name: person.name,
    age: person.age,
    country: person.country
  }
    
