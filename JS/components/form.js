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
            <div class="input-container">
                <label for="props">${props}</label>
                <input type="text" name="${props}"/>
            </div>             
        `)
    }


    const inputs = Array.from(form.querySelectorAll("input"));
    inputs.forEach(input=>{
        input.onkeyup = e=>{

            (function(currentValue,e){
                setTimeout(()=>{
                    if(currentValue == e.target.value){

                        let data = {};
                        inputs.forEach(e=>{
                            if(data.hasOwnProperty(e.name)){
                                if(typeof data[e.name] != "object"){
                                    data[e.name] = [data[e.name]]
                                }
                                data[e.name].push(e.value)
                            }else{
                                data[e.name] = e.value
                            }     
                        })

                        $("#resume-page-right").innerHTML = "";
                        data = {
                            ...data,
                            ...globalData
                        }

                        debugger;
                        
                        $("#resume-page-right").append(globalTemplate[0](data));
                    }
                },1000)
            })(e.target.value,e)

        }
    })


    return form;
}