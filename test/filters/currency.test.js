import filtroCurrency from '../../src/filters/currency'

describe('FiltroCurrency', () => {

    it('Deve retornar valor formatado', () => {
        const resultado = filtroCurrency(1267.9)
        expect(resultado).toEqual('R$ 1.267,90')
    })

    it('Deve retornar valor ZERO', () => {
        const resultado = filtroCurrency()
        expect(resultado).toEqual('R$ 0,00')
    })

})
