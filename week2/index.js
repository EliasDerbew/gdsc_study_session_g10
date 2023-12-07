const weight = prompt ("Enter your weight")
const height = prompt ("Enter your height")
const BMI = weight / ( height * height )
if ( BMI < 18.5 )

   {
    console.log("You are Under Weight")
   }
else if (BMI >= 18.5 && BMI <= 24.9)
   {
    console.log("You are Normal Weight")
   }
else if (BMI > 24.9)
   {
    console.log("You are Over Weight")
   }
console.log(BMI)