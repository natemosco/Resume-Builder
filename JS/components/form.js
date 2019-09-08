function Form(){
    let formString = `
    <form autocomplete="on" id="form">
        <input autofocus type="text" autocomplete="on" name="a" placeholder="Expertise 1">
        <input type="text" autocomplete="on" name="a" placeholder="Expertise 2">
        <input type="text" autocomplete="on" name="a" placeholder="Expertise 3">
        <input type="text" autocomplete="on" name="a" placeholder="Expertise 4">
        <input type="text" autocomplete="on" name="a" placeholder="Expertise 5">


        <input type="text" autocomplete="on" name="lname" placeholder="Last Name">
        <input type="text" autocomplete="on" name="organization" placeholder="Employer">
        <input type="text" autocomplete="on" name="organization-title" placeholder="Job Title">
        <input type="text" autocomplete="on" name="email" placeholder="Email">
        <input type="text" autocomplete="on" name="address" placeholder="Address">
        <input type="text" autocomplete="on" name="tel" placeholder="Phone Number">
        <input type="file" autocomplete="on" name="photo" placeholder="Add your image">
        <textarea name="about" d="textarea" placeholder=""></textarea>         
    </form>
    `

    const form = html(formString);
    const inputs = Array.from(form.querySelector("input"));
    inputs.forEach(input=>{
        input.onkeyup = e=>{
            
            console.log(e.key);
        }
    })


    return form;
}