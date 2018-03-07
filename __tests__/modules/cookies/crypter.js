const {encrypt, decrypt} = require('../../../lib/cookies/crypter')

describe('crypter', ()=>{
    it('should return "" when encrypt given empty param', ()=>{
        const en = encrypt()
        expect(en).toBe('')
    })
    it('should return "" when decrypt given empty param', ()=>{
        const de = decrypt()
        expect(de).toBe('')
    })
    it('should return plaintext after decode an encoded string', ()=>{
        const plaintext = 'IlovePeter12345^&*()'
        const en = encrypt(plaintext)
        const de = decrypt(en)

        console.log('en: ', en)

        expect(en !== plaintext ).toBe(true)
        expect(de === plaintext ).toBe(true)
    })
})