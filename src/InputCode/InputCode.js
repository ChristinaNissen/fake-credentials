import { useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../Context";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';


export default function Login() {

    const context = useContext(Context);
    const navigate = useNavigate();

    const [userCodeInput, setUserCodeInput] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

   
    const handleChangeCodeInput = (e) =>{
        setUserCodeInput(e.target.value)
        console.log(...userCodeInput)
    }

    const handleSubmit = (e) =>{
      if(userCodeInput.length !== 8){
        setErrorMessage('Koden skal være mindst 8 karakterer lang')

      }
      if(userCodeInput !== "^[A-Z][A-Z][A-Z][A-Z]"){
        setErrorMessage('Koden skal starte med 4 store bogstaver f.eks.: THDO')
      }
      if(userCodeInput === ''){
        setErrorMessage('Feltet skal udfyldes!')
      }
      else{
        context.setInputCode(userCodeInput);
        navigateToVotingPage();
      }
    }

    useEffect(() => {
     
    }, [userCodeInput]);

    function navigateToVotingPage(){
      navigate('/verificationcode');
  }



    return (

    <div className='container'>
        <div className='main'>
        <FormControl id="text">
   
        <Text color={'#1C4E81'}>For at teste til Folketingsvalget, er det obligatorisk at udfylde en kode i feltet herunder. 

        Koden skal starte med fire store bogstaver, efterfulgt af 10 tilfældige karakterer f.eks: "DTVSa$9+" </Text>
        <FormLabel
          color={'#1C4E81'} 
        >Indtast kode:</FormLabel>
        <Input 
          type="text" 
          placeholder='Indtast kode' 
          value={userCodeInput} 
          onChange={handleChangeCodeInput} 
          // Styling
          borderRadius={'0'}
          borderColor={'#1C4E81'}
          color={'#1C4E81'} 
          error={errorMessage}
          />
      </FormControl>

      <Button onClick={handleSubmit}
      
       // Styling
       color={'#FFF'}
       backgroundColor={'#1C4E81'}
       borderRadius={'0'}
       width={'30%'}
       _hover={{
        background: "#0e2842"}}
      >Stem nu</Button>
      </div>
      </div>
    )
}