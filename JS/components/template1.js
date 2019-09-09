const template1_meta = {
    education:{
        count:3,
        obj:{
            Degree:1,
            Date:1,
            Univeristy:1,
            GPA:1
        }
    },
    references:{
        count:1,
        obj:{
            "Reference name":1,
            "Reference title":1,
            Workplace:1,
            Email:1
        }
    },
    expertise:5,
    certification:{
        count:3,
        obj:{
            certification:1,
            accreditingBody:1,
            expiration:1
        }
    },
    skillsAndHobbies:10,
    experience:{
        count:2,
        obj:{
            job:1,
            employmentDates:1,
            title:1,
            jobDescription:1
        }
    }
}


function Template1(props,style=styles.purple){
    const template1String = `
    <section class="template1 template" data-component="template1">

        <div class="template1-banner ${style.background}">
            <img class="template1-img" src="${props.photo}" alt="profile avatar"/>
            <div>
                <h1>${props.fname} ${props.lname}</h1>
                <h3>${props["organization-title"]}</h3>
                <div class="template1-bar"></div>
                <p>${props.tel}</p>
                <p>${props.email}</p>
                <p>${props.address}</p>
            </div>
        </div>
        
        <div class ="template1-body">
        
            <section class="template1-left ${style.border}">
                <div class="template1-expertise">
                    <h3 class="${style.color}">Expertise</h3>
                    <p class="${style.border}">${props.expertise1}</p>
                    <p class="${style.border}">${props.expertise2}</p>
                    <p class="${style.border}">${props.expertise3}</p>
                    <p class="${style.border}">${props.expertise4}</p>
                    <p class="${style.border}">${props.expertise5}</p>
                </div>
                <div class="template1-education-container">
                    <h3 class="${style.color}">Education</h3>
                            
                </div>
                <div>
                    <h3 class="template1-references ${style.color}">References</h3>
                    
                </div>
            </section>

            <section class="template1-right">
                <div>
                    <h3 class="${style.color}">Objective</h3>
                    <p>${props.about}</p>
                </div>
                <div class="template1-job-container">
                    <h3 class="template1-jobs ${style.color}">Expirence</h3>
                
                </div>
                <div class="template1-certification">
                    <h3 class="${style.color}">Certifications</h3>
                </div>
                <div>
                    <h3 class="${style.color}">Skills & Hobbies</h3>
                    <ul class="skills-hobbies-container">
                    </ul>
                </div>
            </section>

        </div>

     
    </section>   
    `
    const template1 = html(template1String);

    template1.querySelectorAll("*").forEach(e=>{
        e.dataset.component = "template1";
    })


    function Education(props){
        const educationString = ` <h5 class="template1-degree">${props.Degree}</h5>
        <p class="template1-graduation-date">${props.Date}</p>
        <p class="template1-university">${props.University}</p>
        <p class="template1-gpa">${props.GPA}</p>` 

        return html(educationString);
    }  

    props.education.forEach(e=>{
        template1.querySelector(".template1-education-container").append(Education(e));
    })
    function References(props){
        const referenceString = ` 
        <h5 class="template1-ref-firstname template1-ref-lastname">${props["Reference name"]}</h5>
        <p class="template1-ref-title">${props["Reference title"]}</p>
        <p class="template1-ref-workplace">${props.Workplace}</p>
        <p class="template1-ref-email">${props.Email}</p>
        ` 

        return html(referenceString);
    }  

    props.references.forEach(e=>{
        template1.querySelector(".template1-references").append(References(e));
    })

    function Experience(props){
        const jobString = ` 
        <h5 class="template1-job-title">${props.job} | ${props.employmentDates}</h5>
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
        <li>${props.skillsAndHobbies}</li>     
        ` 
        return html(skillsAndHobbiesString);
    }  

    props.certification.forEach(e=>{
        template1.querySelector(".skills-hobbies-container").append(SkillsAndHobbies(e));
    })

         
    return template1;
}