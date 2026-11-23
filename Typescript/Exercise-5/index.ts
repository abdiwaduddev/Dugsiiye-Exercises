function echo<T>(data : T) : T {
    return data
}

const myname = echo<string>("Abdiwadud")
console.log(myname.toUpperCase())

const mynumber = echo<number>(2345)
console.log(mynumber.toFixed(2))

const myobject = echo({name : "abdiwadud", age : 20})

console.log(myobject.name)

interface APIresult <T> {
    status : string,
    data : T
}

const stringResponse: APIresult<string> = {
  status: "Active",
  data: "Done",
};

console.log(stringResponse)

const userResponse: APIresult<{ id: number; name: string }> = {
  status: "Active",
  data: { id: 1, name: "abdiwadud" },
};

console.log(userResponse)

function first <T> (item : T[]) : T {
    return item[0]
}

const StringItem = first<string>(["London", "Newyork", "Galkio", "Ankara"])
const numberItem = first<number>([10,20,30,40,50])
const objectIem = first([{id : 1, name : "geele"}, {id: 2, name : "Hawa"}])

console.log(StringItem)
console.log(numberItem)
console.log(objectIem)