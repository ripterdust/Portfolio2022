import { useContext } from "react";
import { DataContext } from "../context/useData";

export const Command = ({text }) => {

  const [ , setState ] = useContext(DataContext);

  
  if(text){
    if(text == 'help'){
      return 'help'
    }else if(text == 'social'){
      return 'www.github.com'
    }else{

      setState({
        command: '',
        clearScreen: false
      })
      return 'Nada'
    }

  }else{
      return 'An error has ocurred'
  }
}
