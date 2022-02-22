export const helloFunction = () => {
    alert('hola')
}

export const helpFunction = () => {

}

export const clearFunction = (fun) => {
    fun(data => ({...data, clearScreen: false}))
}