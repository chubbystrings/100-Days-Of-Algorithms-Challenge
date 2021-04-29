function bmi(weight, height) {
    function weights(num) {
      if (num <= 18.5) return "Underweight"
      if(num<= 25) return "Normal"
      if(num <= 30) return "Overweight"
      if(num > 30) return "Obese"
    }
    const hi = height**2
    const res = weight / hi
    console.log(res)
    return weights(res);
}