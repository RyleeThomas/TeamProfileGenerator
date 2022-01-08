
 const employeeType = memberObject => {
    if(memberObject.getRole() == "Engineer"){
        return `
                                <p>GitHub Account:<a href="https://github.com/${memberObject.getGithub()}" class="btn btn-link">${memberObject.getGithub()}</a></p>
        `;
    }
    if(memberObject.getRole() == "Intern"){
        return `
                               <p>School Attending:${memberObject.getSchool()}</p>
        `;
    }
    if(memberObject.getRole() == "Manager"){
        return `
                               <p>Office Number:${memberObject.office}</p>
        `;
    }
    if(memberObject.getRole() == "Employee"){
        return `''`;
    }
 };

const generateCard = teamArr => {
    const teamHtmlArr = teamArr.map(member => {
        return `
                        <div class="panel panel-info"> 
                            <div class="panel-heading">
                                <h3>${member.getName()}</h3>
                                <h5>${member.getRole()}</h5>
                            </div>
                            <div class="panel-body">
                                <p>ID: ${member.getId()}</p>
                                <p>Email:<a href="mailto:${member.getEmail()}" class="btn btn-link">${member.getEmail()}</a></p>
                                ${employeeType(member)};
                            </div> 
                        </div>
    `;
    });
    return `
                    <div class="panel-group">
                        ${teamHtmlArr.join('')}
                    </div>
    `;
};

const generatePage = teamArr => {

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            <title>Team Members</title>
        </head>
  
        <body>
            <header class="well-lg text-center" style="background-color:rgb(176, 181, 196)">
                <h1>Team Members</h1>
            </header>
            <section class="container" style="padding: 20px">
                <div class="justify-space-between">
                    ${generateCard(teamArr)}    
                </div>
                
            </section>

        </body>
    </html>

    `;
}

module.exports = generatePage;