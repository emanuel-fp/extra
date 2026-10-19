const projects = 
{
    number_generator: {
        name:"number generator",
        description:"A site with multiple functions of RNG (my first ever project with javascript!)",
        path: "./number_generator/index.html"
    },
}
for (const i in projects) 
{
    if (!Object.hasOwn(projects, i)) continue;
    
    const project = projects[i];
    
    console.log(project)

    let container = document.getElementById("Projects_container")
    container.innerHTML = `<a href="${project.path}" class="project"> <p><span class="title">${project.name}</span> <div class="divisor"></div> <span class="description">${project.description}</span></p> </a>`
}

function openProject (index) 
{
    window.location.href = projects[index]
}