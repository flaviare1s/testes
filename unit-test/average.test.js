// describe(descricaoSTRING, testeFUNCAO)

const { getAverage } = require("./average")

describe('getAverage', () => {
    it('retorna a média de 3 números', () => {
        const average = getAverage(1, 2, 3)

        expect(average).toBe(2) // Esse passa no teste
        // expect(average).toBe(10) // Esse não passa no teste
    })

    it('retorna a média de 3 números negativos', () => {
        const average = getAverage(-1, -2, -3)

        expect(average).toBe(-2)
    })

    it('retorna null quando não são passados parâmetros', () => {
        const average = getAverage()

        expect(average).toBe(null)
    })

    it('retorna a média de 2 números', () => {
        const average = getAverage(1, 2)

        expect(average).toBe(1.5)
    })

    it('retorna o único número passado', () => {
        const average = getAverage(1)

        expect(average).toBe(1)
    })
})