const { isPrime } = require("./prime")

describe('isPrime', () => {
    it('retorna se um número primo é primo', () => {
        const resultado = isPrime(7)

        expect(resultado).toBe(true)
    })

    it('retorna se um número negativo é primo', () => {
        const resultado = isPrime(-2)

        expect(resultado).toBe(false)
    })

    it('retorna se um número não primo é primo', () => {
        const resultado = isPrime(14)

        expect(resultado).toBe(false)
    })
})

