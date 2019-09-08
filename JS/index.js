



/*corresponding template functions above*/
const templates = [Template1/* other templates functions*/]

function TemplatePage(userData){
    const templateString = `
    <section id="templates">

    </section>
    `
    const templatePage = html(templateString);

    templates.forEach(template=>{
        let template_component = template(userData);
        template_component.classList.add("mini");
        template_component.onclick = e =>{
            alert("clicked");
        }
        templatePage.append(template_component);
    })

    return templatePage;
}

function parseInput(inputs){
    let props = {
        education:[],
        certification:[],
        references:[],
        experience:[]
        
    };

    inputs.forEach(e=>{
        props[e.name] = e.value
    })

    return props;
}

$("#submit").onclick = e =>{
    e.preventDefault();
    let data = parseInput(Array.from($("#form").children));
    $("#template-page").append(TemplatePage(data));
    
    $("#template-page").classList.add("show");
    $("#landing-page").classList.add("hide");
}

  