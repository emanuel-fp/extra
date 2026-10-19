let container = document.getElementById("Projects_container")
const projects = 
{
    number_generator: {
        name:"number generator",
        description:"A site with multiple functions of RNG (my first ever project with javascript!)",
        path: "./number_generator/index.html"
    },
}

let newHtml = ""

for (const i in projects) 
{
    if (!Object.hasOwn(projects, i)) continue;
    
    const project = projects[i];
    
    console.log(project)

    newHtml += `<a href="${project.path}" class="project"> <p><span class="title">${project.name}</span> <div class="divisor"></div> <span class="description">${project.description}</span></p> </a>`

    
}
container.innerHTML = newHtml

function openProject (index) 
{
    window.location.href = projects[index]
}