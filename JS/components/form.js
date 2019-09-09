function Form(metaProps){
    let formString = `
    <form autocomplete="on" id="meta">     
    </form>
    `
    const form = html(formString);
    
    for(let key in metaProps){
        if(typeof metaProps[key] == "number"){
            for(let i = 1;i <= metaProps[key];i++){
                form.append(Input(key));
            }
        }
        if(typeof metaProps[key] == "object"){
            for(let i = 0;i<metaProps[key].count;i++){
                for(let innerKey in metaProps[key].obj){
                    form.append(Input(innerKey));
                }
            }
        }
    }

    function Input(props){
        return html(`
            <div class="">
                <label for="props">${props}</label>
                <input type="text" name="${props}"/>
            </div>  
        `)
    }


    const inputs = Array.from(form.querySelectorAll("input"));
    inputs.forEach(input=>{
        input.onkeyup = e=>{
            console.log(e.key);
        }
    })


    return form;
}