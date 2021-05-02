
const encrypt = (input) => {
    let res = ''
    for (let i = 0; i < input.length; i++) {
        let charcode = input.charCodeAt(i) + 1
        let newCode = String.fromCharCode(charcode)
        res += newCode
    }
    return res
}

const decrypt = (input) => {
    let res = ''
    for (let i = 0; i < input.length; i++) {
        let charcode = input.charCodeAt(i) - 1
        let newCode = String.fromCharCode(charcode)
        res += newCode
    }
    return res
}


export default {encrypt, decrypt}
  
