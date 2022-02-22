import { useContext } from "react";
import { list } from "../commands/listOfCommands";
import { DataContext } from "../context/useData";

export const Command = ({text }) => {

  const [ , setState ] = useContext(DataContext);

  
  if(text){
    if(text == 'help'){

      return <div>
        Thanks for using my terminal. 

        The list of commands is: 
        <ul>
          {
            list.map(element => <li>{element}</li>)
          }
        </ul>

      </div>;

    }else if(text == 'social'){

      return 'www.github.com'

    }else if (text == 'cls' || text == 'clear'){

      setState({
        command: '',
        clearScreen: false
      })
      return 'hola'

    }else if(text == 'fakefetch'){
      return 'Tu so'
    }else{

      return 'Please type a valid command'
    }

  }else{
      return 'An error has ocurred'
  }
}
