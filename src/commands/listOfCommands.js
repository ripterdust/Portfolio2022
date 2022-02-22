const listOfCommands = {
    list : ['hello', 'help', 'fakefetch', 'date', 'social', 'cv', 'curriculum', 'resume', 'github', 'linkedin'],
    commands : {
        hello: {
            function: 'hello'
        },
        help: {
            function: () => {
                let list = ['hello', 'help', 'fakefetch', 'date', 'social', 'cv', 'curriculum', 'resume', 'github', 'linkedin']
                return `The commands aviables are: <br/> <ul>${list.map(elem => `<li>${elem}<li/>`)}</ul>`

            }
        }
    }
}