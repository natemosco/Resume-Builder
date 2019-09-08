const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const html = (string) =>{
    let parser = new DOMParser();
    let dom = parser.parseFromString(string,'text/html');
    let children = Array.from(dom.all[2].children);
    return (children.length == 1) ? children[0] : children;
}


function Template1(props,style=""){
    console.dir(props)
    const template1String = `
    <section class="template template1">
    
        <div class="template1-banner ${style}">
            <img class="template1-img" src="${props.photo}" alt="profile avatar"/>
            <div>
                <h1>${props.fname} ${props.lname}</h1>
                <h3>${props["organization-title"]}</h3>
                <p>${props.tel}</p>
                <p>${props.email}</p>
                <p>${props.address}</p>
            </div>
        </div>
        
        <div class ="template1-body">
        
            <section class="template1-left">
                <div>
                    <h3>Expertise</h3>
                    <p>${props.expertise1}</p>
                    <p>${props.expertise2}</p>
                    <p>${props.expertise3}</p>
                    <p>${props.expertise4}</p>
                    <p>${props.expertise5}</p>
                </div>
                <div class="template1-education-container">
                    <h3>Education</h3>
                               
                </div>
                <div>
                    <h3 class="template1-references">References</h3>
                    
                </div>
            </section>

            <section class="template1-right">
                <div>
                    <h3>Objective</h3>
                    <p>${props.about}</p>
                </div>
                <div>
                    <h3 class="template1-jobs">Expirence</h3>
                   
                </div>
                <div class="template1-certification">
                    <h3>Certifications</h3>
                </div>
                <div>
                    <h3>Skills & Hobbies</h3>
                    <ul class="skills-hobbies-container">
                    </ul>
                </div>
            </section>

        </div>
    </section>   
    `
    const template1 = html(template1String);

    function Education(props){
        const educationString = ` <h5 class="template1-degree">${props.degree}</h5>
        <p class="template1-graduation-date">${props.grad-date}</p>
        <p class="template1-university">${props.university}</p>
        <p class="template1-gpa">${props.pga}</p>` 

        return html(educationString);
    }  

    props.education.forEach(e=>{
        template1.querySelector(".template1-education-container").append(Education(e));
    })
    function References(props){
        const referenceString = ` 
        <h5 class="template1-ref-firstname template1-ref-lastname">${props.fname} ${props.lname}</h5>
        <p class="template1-ref-title">${props.refTitle}</p>
        <p class="template1-ref-workplace">${props.refWorkplace}</p>
        <p class="template1-ref-email">${props.email}</p>
        ` 

        return html(referenceString);
    }  

    props.references.forEach(e=>{
        template1.querySelector(".template1-references").append(References(e));
    })

    function Experience(props){
        const jobString = ` 
        <h5 class="template1-job-title">${props.jobs} | ${props.jobDates}</h5>
        <p class="template1-title">${props.title}</p>
        <p class="template1-description">${props.jobDescription}</p>
        ` 
        return html(certificationString);
    }  

    props.experience.forEach(e=>{
        template1.querySelector(".template1-jobs").append(Experience(e));
    })
    function Certifications(props){
        const certificationString = ` 
        <h5 class="template1-certification">${props.certification}</h5>
        <p class="template1-accrediting-body">${props.accreditingBody}</p>
        <p class="template1-expiration">${props.expiration}</p>
        ` 
        return html(certificationString);
    }  

    props.certification.forEach(e=>{
        template1.querySelector(".template1-certification").append(Certifications(e));
    })
    function SkillsAndHobbies(props){
        const skillsAndHobbiesString = ` 
        <p>${props.skillsAndHobbies}</p>     
        ` 
        return html(skillsAndHobbiesString);
    }  

    props.certification.forEach(e=>{
        template1.querySelector(".skills-hobbies-container").append(SkillsAndHobbies(e));
    })
    
         
    return template1;
}


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

  