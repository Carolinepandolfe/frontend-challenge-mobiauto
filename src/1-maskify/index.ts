export const maskify = (string: string) => {
  if(string.length > 4 ) {
    return string.slice(-4).padStart(string.length, '#')
  }
  return string
}

console.log(maskify('teste'))