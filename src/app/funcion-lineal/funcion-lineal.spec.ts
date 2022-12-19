import { variacion } from './funcion-lineal';

describe ('funcion', () =>{
    it('Should return y = [1 ,3, 5, 7], if X = [0.0, 1.0, 2.0, 3.0], a = 2 y b=1', ()=>{
        const y = variacion(2,1,[0.0,1.0,2.0,3.0]);
        expect(y).toEqual([1,3,5,7]);
    })

    it('Should return y = [3, 5, 10, 11], if X = [ 1.0, 3.0, 8.0, 9.0 ], a = 1 y b= 2', ()=>{
        const y = variacion(1,2,[1.0, 3.0, 8.0, 9.0]);
        expect(y).toEqual([3, 5, 10, 11]);
    })

    it('Should return y = [49, 81, 105, 113], if X = [ 5.0, 9.0, 12.0, 13.0 ], a = 8 y b= 9', ()=>{
        const y = variacion(8,9,[5.0, 9.0, 12.0, 13.0]);
        expect(y).toEqual([49, 81, 105, 113]);
    })

    it('Should return y = [4, 7, 9, 12], if X = [ 1.0, 4.0, 6.0, 9.0 ], a = 1 y  b= 3', ()=>{
        const y = variacion(1,3,[1.0, 4.0, 6.0, 9.0]);
        expect(y).toEqual([4, 7, 9, 12]);
    })

    it('Should return y = [17, 23, 32, 38], if X = [ 4.0, 6.0, 9.0, 11.0 ], a = 3 y b= 5', ()=>{
        const y = variacion(3,5,[4.0, 6.0, 9.0, 11.0]);
        expect(y).toEqual([17, 23, 32, 38]);
    })
})