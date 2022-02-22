import { clearFunction, helloFunction, helpFunction } from "./functions"

const list =  ['hello', 'help', 'fakefetch', 'date', 'social', 'cv', 'curriculum', 'resume', 'github', 'linkedin', 'clear']

export const listOfCommands = {
    list: list,
    commands : {
        hello: {
            function: helloFunction
        },
        help: {
            function: helpFunction
        },
        clear: {
            function: clearFunction
        }
    }
}