// interface Contact {
//   id: number
//   name: string
// }
// function clone(source: Contact): Contact {
//   return Object.apply({}, source)
// }
// const a: Contact = { id: 122, name: 'Home Lander' }
// const b = clone(a)
interface Contact {
  id: number
  name: string
}
interface UserContact {
  id: number
  name: string
}
function clone<T1, T2 extends T1>(source: T1): T2 {
  return Object.apply({}, source)
}
const a: Contact = { id: 122, name: 'Home Lander' }
const b = clone<Contact, UserContact>(a)

const dateRange = { startDate: Date.now(), endDate: Date.now() }
const dateCopy = clone(dateRange)
