   // 1.Variables & Operators
      const Form = document.querySelector("#Form");
Form.addEventListener("submit", function (e) {
    e.preventDefault();

    const ArrayForm = [];
    const Information = ["#FullName",  "#Age" ,"#Job", "#Friends","CertificateStatus","RetirementAge"];


    for (const child of Information) {
        const item = document.querySelector(child)
        const value = item.value.trim();
           ArrayForm.push(value);

    }

    console.log(ArrayForm)

})
    //  2.Functions
        
        // تابع محاسبه سن 
function calcAge(birthYear) {

        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }

    // تابع محاسبه سال های باقی مانده تا بازنشستگی
function yearsUntilRetirement(birthYear, firstName, retirementAge) {
        const age = calcAge(birthYear);
        const yearsLeft = retirementAge - age;
            
            if (yearsLeft > 0) {
                return firstName + " تا " + yearsLeft + " سال دیگر بازنشسته می‌شود.";
            } else {
                return firstName + " هم اکنون بازنشسته است.";
            }
 }