const checkIfTheFirstLetterIsUppercase = (word: string) => {
  console.log(word !== word.charAt(0).toLowerCase() + word.slice(1))
}

checkIfTheFirstLetterIsUppercase('carol')
checkIfTheFirstLetterIsUppercase('Carol')
checkIfTheFirstLetterIsUppercase('Carol Pandolfe')
checkIfTheFirstLetterIsUppercase('carol Pandolfe')