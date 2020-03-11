const XO = (str) => {
  let splitString = str.split("")
  let xs = []
  let os = []

  splitString.map(x => {
    if(x === 'x' || x === 'X') {
      xs.push(x)
    }
    if(x === 'o' || x === 'O') {
      os.push(x)
    }

  })
  console.log(xs.length)
  console.log(os.length)

  if (xs.length === os.length) {
    return true
  } else if (xs.length != os.length){
      return false
  } else {
      return true
  }
}

console.log(XO("xxOo")); //true
console.log(XO("xxxm")); //false
console.log(XO('xo')); //true
console.log(XO("Oo")); //false
console.log(XO("ooom")); //false