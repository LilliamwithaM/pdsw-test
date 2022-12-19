export function variacion(a : number, b :number, x :number[]){
    let y = [];

    for (let i = 0; i<4; i++){
        y[i] = a *x[i] + b;
    }
    return y;
}