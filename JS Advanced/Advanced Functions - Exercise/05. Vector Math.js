(function () {

    return{
        add: (v1, v2) => {return [v1[0] + v2[0], v1[1] + v2[1]]},
        multiply: (v1, scalar) => {return [v1[0] * scalar, v1[1] * scalar]},
        length: (v1) => {return Math.sqrt(Math.pow(v1[0],2) + Math.pow(v1[1], 2))},
        dot: (v1, v2) => {return (v1[0] * v2[0]) + (v1[1] * v2[1])},
        cross: (v1, v2) => {return (v1[0] * v2[1]) - (v1[1] * v2[0])}
    }
}());
console.log(add([1, 1], [1, 0]));