const list =  ['hello', 'help', 'fakefetch', 'date', 'social', 'cv', 'curriculum', 'resume', 'github', 'linkedin', 'clear']

export const listOfCommands = {
    list: list,
    commands : {
        hello: {
            function: 'hello'
        },
        help: {
            function: () => {
                
                return `The commands aviables are: <br/> <ul>${list.map(elem => `<li>${elem}<li/>`)}</ul>`

            }
        }
    }
}