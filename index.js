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

// 3.Arraye
function createFriendsArray(numFriends) {

     const friends = [];
     for (let i = 1; i <= numFriends; i++) {

     friends.push("دوست " + i); }

    return friends; }

//Objects 
        // person با داده های فرم
function createPersonObject(formData) {
        const numFriends = parseInt(formData.friends);
        const hasLicense = formData.certificateStatus.toLowerCase() === 'yes';
            
    return {
             firstName: formData.fullName,
             birthYear: new Date().getFullYear() - parseInt(formData.age),
             job: formData.job,
             friends: createFriendsArray(numFriends),
             hasDriversLicense: hasLicense,
             retirementAge: parseInt(formData.retirementAge),
    //  محاسبه سن
calcAge: function() {
        this.age = new Date().getFullYear() - this.birthYear;
         return this.age; },
   //  دریافت خلاصه اطلاعات
   getSummary: function() {

        if (!this.age) {
        this.calcAge();
    }
                    
    let summary = this.firstName + " one" + this.job + " " + this.age + 
     " ساله است، و او " + this.friends.length + " Friends have";
                    
    if (this.hasDriversLicense) {
         summary += " And she/he has a driver's license.";
             } else {
                summary += " And she/he hasn't a driver's license."; }

  // اضافه کردن اطلاعات بازنشستگی
const yearsLeft = this.retirementAge - this.age;
        if (yearsLeft > 0) {
                summary += " She/he up" + yearsLeft + " She/he will retire next year.";
          } else {
                 summary += " She/he is now retired..";
                    }
                    
        return summary; } };
 }
        