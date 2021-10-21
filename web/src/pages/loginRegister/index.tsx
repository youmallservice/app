import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'

import api from '../../services/api'

import {
  FormControl,
  FormLabel,
  Select,
  Input,
  useToast,
} from "@chakra-ui/react"
import './styles.css'

interface Response {
  message: string;
  token: string;
  user: {
      id: number;
      name: string;
      email: string;
      isAdmin: boolean;
  }
}

export default function LoginRegister(){

  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [emailRegister, setEmailRegister] = useState("")
  const [password, setPassword] = useState("")
  const [passwordRegister, setPasswordRegister] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phone_1, setPhone_1] = useState("")
  const [phone_2, setPhone_2] = useState("0")
  const [birth, setBirth] = useState('');
  const [state, setState] = useState('')
  const [cep, setcep] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [complement, setComplement] = useState('')
  const [number_house, setNumber_house] = useState('')
  const [document, setDocument] = useState('')

  const [steps, setSteps] = useState(0)
  const toast = useToast();

  const history = useHistory();

  async function HandleSubmit(e: React.SyntheticEvent){
    const baseUrl = '/sessions'
    e.preventDefault()


    if(email && password){
      const body = {
        email,
        password
      };

      try{
        console.log(body)
        const response = await api.post <Response>(baseUrl, body);
        const {user, token} = response.data;
        localStorage.setItem('@Youmall:user', JSON.stringify(user));
        localStorage.setItem('@Youmall:token', JSON.stringify(token));
        history.push('/loja');
        toast({
          title: `Bem vindo ${name}`,
          status: "success",
          duration: 5000,
          isClosable: true,
        })
      }catch(error) {
        console.log(error)
        toast({
          title: "Usuário ou senha inválido",
          status: "error",
          duration: 5000,
          isClosable: true,
      })
      }
    }else{
      toast({
          title: "Insira os dados",
          description: "Existem campos vazios",
          status: "error",
          duration: 5000,
          isClosable: true,
      })
    }
  }

  function handleValidatePassword(e: React.SyntheticEvent){
    e.preventDefault();
    if(passwordRegister !== confirmPassword){
      toast({
        title: "As senhas não correspondem",
        status: "error",
        duration: 5000,
        isClosable: true,
    })
    } else if(passwordRegister.length < 8){
      toast({
        title: "A senha deve ter mais que 8 caracteres",
        status: "error",
        duration: 5000,
        isClosable: true,
    })
    }else{
    setSteps(1)
  }
  }


  function handleRegister(e: React.SyntheticEvent){
    const baseUrl = '/users/signup';
    e.preventDefault()

    const body = {
      name,
      cep,
      lastName,
      confirmPassword,
      document,
      phone_1,
      phone_2,
      neighborhood,
      city,
      state,
      number_house,
      email: emailRegister,
      street: address,
      password: passwordRegister,
    }

    try{
      const response = api.post('/users/signup', body);
      toast({
        title: "Conta criada",
        description: "Faça o login para acessar a sua conta",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
    }catch(error){
      console.log(error)
      toast({
        title: "Não foi possível criar sua conta",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return(
    <div className="formLoginContainer">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="mb-4">
            <form method="post" action="#" id="CustomerLoginForm" accept-charset="UTF-8" className="contact-form">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <FormControl id="first-name">
                      <FormLabel>Email</FormLabel>
                      <Input type="email" name="customer[email]" placeholder="" id="CustomerEmail" className="" onChange={event => setEmail(event.target.value)}/>
                    </FormControl>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                  <FormControl id="first-name">
                    <FormLabel >Senha</FormLabel>
                    <Input type="password" name="customer[password]" placeholder="" id="CustomerPassword" className="" onChange={event => setPassword(event.target.value)}/>
                  </FormControl>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                  <button className="btn mb-3" type="submit" onClick={HandleSubmit}>Entrar</button>
                  <p className="mb-4">
                    <a href="#" id="RecoverPassword">Esqueceu a senha?</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="verticalLine"></div>
        {steps === 0 &&
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col ">
          <div className="mb-4">
            <form method="post" action="#" id="CustomerLoginForm" accept-charset="UTF-8" className="contact-form">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <FormControl className="InputForm" id="FirstName" isRequired>
                      <FormLabel>Nome</FormLabel>
                      <Input type="text" name="customer[first_name]" placeholder="" id="FirstName" value={name} onChange={event => setName(event.target.value)}/>
                    </FormControl>
                    <FormControl className="InputForm" id="LastName" isRequired>
                      <FormLabel>Sobrenome</FormLabel>
                      <Input type="text" name="customer[last_name]" placeholder="" id="LastName" value={lastName} onChange={event => setLastName(event.target.value)}/>
                    </FormControl>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <FormControl className="InputForm" id="email" isRequired>
                      <FormLabel >Email</FormLabel>
                      <Input type="email" name="customer[email]" placeholder="" id="CustomerEmail" value={emailRegister} className="" onChange={event => setEmailRegister(event.target.value)}/>
                    </FormControl>
                    <FormControl className="InputForm" id="document" isRequired>
                      <FormLabel>document</FormLabel>
                      <Input type="text" name="customer[document]" placeholder="" id="document" value={document} onChange={event => setDocument(event.target.value)}/>
                    </FormControl>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <FormControl className="InputForm" id="phone1" isRequired>
                      <FormLabel>Contato 1</FormLabel>
                      <Input type="text" name="customer[phone1]" placeholder="" id="Phone1" value={phone_1} onChange={event => setPhone_1(event.target.value)}/>
                    </FormControl>
                    <FormControl className="InputForm" id="phone2">
                      <FormLabel>Contato 2</FormLabel>
                      <Input type="text" name="customer[phone2]" placeholder="" id="phone2" value={phone_2} onChange={event => setPhone_2(event.target.value)}/>
                    </FormControl>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <FormControl className="InputForm" id="password" isRequired>
                      <FormLabel>Senha</FormLabel>
                      <Input type="password" name="customer[password]" placeholder="" id="Password" value={passwordRegister} onChange={event => setPasswordRegister(event.target.value)}/>
                    </FormControl>
                    <FormControl className="InputForm" id="phone2" isRequired>
                      <FormLabel>Confirme a Senha</FormLabel>
                      <Input type="password" name="customer[passwordConfirmation]" placeholder="" id="Password" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)}/>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="stepsCreate">
                <button type="submit" className="btn mb-3" onClick={handleValidatePassword}> próximo </button>
              </div>
            </form>
          </div>
        </div>
        }

        {steps === 1 &&
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col ">
          <div className="mb-4">
            <form method="post" action="#" id="CustomerLoginForm" accept-charset="UTF-8" className="contact-form">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <FormControl className="InputForm" id="Birthday" >
                      <FormLabel>Data de Nascimento</FormLabel>
                      <Input type="date" name="customer[birth]" placeholder="" id="Birthday" value={birth} onChange={event => setBirth(event.target.value)}/>
                    </FormControl>
                    <FormControl className="InputForm" id="LastName" isRequired>
                      <FormLabel>Estado</FormLabel>
                      <Select placeholder="Selecione" value={state} onChange={event => setState(event.target.value)}>
                        <option value="option1">AC</option>
                        <option value="option2">AL</option>
                        <option value="option3">AP</option>
                        <option value="option3">AM</option>
                        <option value="option3">BA</option>
                        <option value="option3">CE</option>
                        <option value="option3">ES</option>
                        <option value="option3">MA</option>
                        <option value="option3">MT</option>
                        <option value="option3">MS</option>
                        <option value="option3">MG</option>
                        <option value="option3">PA</option>
                        <option value="option3">PB</option>
                        <option value="option3">PR</option>
                        <option value="option3">PE</option>
                        <option value="option3">PI</option>
                        <option value="option3">RJ</option>
                        <option value="option3">RN</option>
                        <option value="option3">RS</option>
                        <option value="option3">RO</option>
                        <option value="option3">RR</option>
                        <option value="option3">SC</option>
                        <option value="option3">SP</option>
                        <option value="option3">SE</option>
                        <option value="option3">TO</option>
                        <option value="option3">DF</option>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <FormControl className="InputForm" id="cep-code" isRequired>
                      <FormLabel >Cep</FormLabel>
                      <Input type="text" name="customer[cepCode]" value={cep} placeholder="000000-000" id="cepCode" onChange={event => setcep(event.target.value)}/>
                    </FormControl>
                    <FormControl className="InputForm" id="city" isRequired>
                      <FormLabel>Cidade</FormLabel>
                      <Input type="text" name="customer[city]" value={city} placeholder="" id="City" onChange={event => setCity(event.target.value)}/>
                    </FormControl>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <FormControl className="InputForm" id="Address" isRequired>
                      <FormLabel>Endereço</FormLabel>
                      <Input type="text" name="customer[address]" value={address} placeholder="" id="Address" onChange={event => setAddress(event.target.value)}/>
                    </FormControl>
                    <FormControl className="InputForm" id="neighborhood" isRequired>
                      <FormLabel>Bairro</FormLabel>
                      <Input type="text" name="customer[neighborhood]" value={neighborhood} placeholder="" id="neighborhood" onChange={event => setNeighborhood(event.target.value)}/>
                    </FormControl>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <FormControl className="InputForm" id="complement">
                      <FormLabel>Complemento</FormLabel>
                      <Input type="text" name="customer[complement]" placeholder="" value={complement} id="Complement" onChange={event => setComplement(event.target.value)}/>
                    </FormControl>
                    <FormControl className="InputForm" id="number_house" isRequired>
                      <FormLabel>Numero</FormLabel>
                      <Input type="text" name="customer[number_house]" placeholder="" value={number_house} id="number_house" onChange={event => setNumber_house(event.target.value)}/>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="stepsCreate">
                <button type="submit" className="btn mb-3" onClick={() => setSteps(0)}> Voltar </button>
                <button type="submit" className="btn mb-3" onClick={handleRegister}> Criar Conta </button>
              </div>
            </form>
          </div>
        </div>
        }

    </div>
  )
}
