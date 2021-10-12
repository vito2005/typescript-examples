interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person

let key: PersonKeys = 'name'
key = 'age'

type User = {
    _id: number
    name: string
    email: string
    created: Date
}

type UserKeyNoMeta1 = Exclude<keyof User, '_id' | 'created'> // 'name' | 'email'
type UserKeyNoMeta = Pick<User, 'name' | 'email'>

let u1: UserKeyNoMeta1 = 'name'
// u1 = '_id'