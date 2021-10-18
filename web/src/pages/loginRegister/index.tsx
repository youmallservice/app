import React from 'react'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"
import './styles.css'

export default function LoginRegister(){
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
                      <input type="email" name="customer[email]" placeholder="" id="CustomerEmail" className="" />
                    </FormControl>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                  <FormControl id="first-name">
                    <FormLabel >Senha</FormLabel>
                    <input type="password" value="" name="customer[password]" placeholder="" id="CustomerPassword" className="" />
                  </FormControl>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                  <input type="submit" className="btn mb-3" value="Entrar" />
                  <p className="mb-4">
                    <a href="#" id="RecoverPassword">Esqueceu a senha?</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="verticalLine"></div>

        <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col ">
          <div className="mb-4">
            <form method="post" action="#" id="CustomerLoginForm" accept-charset="UTF-8" className="contact-form">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <FormControl className="inputForm" id="FirstName" isRequired>
                      <FormLabel>Nome</FormLabel>
                      <input type="text" name="customer[first_name]" placeholder="" id="FirstName" />
                    </FormControl>
                    <FormControl className="inputForm" id="LastName" isRequired>
                      <FormLabel>Sobrenome</FormLabel>
                      <input type="text" name="customer[last_name]" placeholder="" id="LastName" />
                    </FormControl>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <FormControl className="inputForm" id="email" isRequired>
                      <FormLabel >Email</FormLabel>
                      <input type="email" name="customer[email]" placeholder="" id="CustomerEmail" className="" />
                    </FormControl>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <FormControl className="inputForm" id="phone1" isRequired>
                      <FormLabel>Contato 1</FormLabel>
                      <input type="text" name="customer[phone1]" placeholder="" id="Phone1" />
                    </FormControl>
                    <FormControl className="inputForm" id="phone2">
                      <FormLabel>Contato 2</FormLabel>
                      <input type="text" name="customer[phone2]" placeholder="" id="phone2" />
                    </FormControl>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <FormControl className="inputForm" id="password" isRequired>
                      <FormLabel>Senha</FormLabel>
                      <input type="password" name="customer[password]" placeholder="" id="Password" />
                    </FormControl>
                    <FormControl className="inputForm" id="phone2" isRequired>
                      <FormLabel>Confirme a Senha</FormLabel>
                      <input type="password" name="customer[passwordConfirmation]" placeholder="" id="Password" />
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="stepsCreate">
                  <input type="submit" className="btn mb-3" value="criar conta" />
                </div>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
