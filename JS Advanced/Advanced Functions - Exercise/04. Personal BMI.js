function bmi(name, age, weight, height) {
    let obj = {name:name,
        personalInfo:{
        age: age,
            weight:weight,
            height: height,
        },
    BMI:0,
    status:""};

    let h = height / 100;
    let bmi = Math.round((weight / h) / h);
    obj.BMI = bmi;

    let status = "";

    if(bmi < 18.5){
        status = "underweight";
    } else if(bmi >= 18.5 && bmi < 25){
        status = "normal";
    } else if(bmi >= 25 && bmi < 30){
        status = "overweight";
    } else if(bmi >= 30){
        status = "obese";
        obj.recommendation = 'admission required';
    }

    obj.status = status;

    return obj;
}

bmi("Honey Boo Boo", 9, 57, 137)