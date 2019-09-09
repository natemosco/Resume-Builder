

function showResume(e){
    $(".show").classList.add("hide");
    $(".show").classList.remove("show");

    $("#resume-page").classList.add("show");
    $("#resume-page").classList.remove("hide");


    const template = e.target.dataset.component;
    $("#resume-page-right").append(template_components[template][0](globalData));
    let currentMeta = template_components[template][1];
    $("#resume-page-left").append(Form(currentMeta));
}

/*corresponding template functions above*/
const templates = [Template1]
const template_components = {
    template1:[Template1,template1_meta]
}

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
            showResume(e);
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

let globalData ;

$("#submit").onclick = e =>{
    e.preventDefault();
    let data = parseInput(Array.from($("#form").children));
    globalData = data;
    $("#template-page").append(TemplatePage(data));
    
    $("#template-page").classList.add("show");
    $("#template-page").classList.remove("hide");

    $("#landing-page").classList.remove("show");
    $("#landing-page").classList.add("hide");
}

  