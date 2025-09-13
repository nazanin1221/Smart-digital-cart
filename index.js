   // Variables & Operators
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