function properties(input) {

        let propertyOne = input[0];
        let valueOne = input[1];
        let propertyTwo = input[2];
        let valueTwo = input[3];
        let propertyThree = input[4];
        let valueThree = input[5];

        var object = {[propertyOne]:valueOne, [propertyTwo]:valueTwo, [propertyThree]:valueThree};
    console.log(object);

}

properties(['name', 'Pesho', 'age', '23', 'gender', 'male'])