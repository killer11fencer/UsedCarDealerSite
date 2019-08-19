// Notes to be taken about incoorperatiing HOC and Render Props

HOC 
RENDER PROPS

let volleyball = () => {
    return 'hello'
}

let test = [ 5,'ab','aab','abb','abab','abaaaba']

function minimalOperations(words) {
  let wordArr = words.filter((item)=>{
    return !(parseInt(item) == item);
  })
    let numArr = wordArr.map(word => {
      let letters = word.split('')
     let filter = letters.map((letter,i) => {
       console.log(letters[i-1])
       if(letters[i-1] === letter) {
         return false
       }
      else {return true}
     })
     if(filter.includes(false)) {
       return 1
     } else {return 0}
    
    })
    return numArr

     
}