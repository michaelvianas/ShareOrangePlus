import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";



const Login = () =>{

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email('Email Invalido').required("O campo é obrigatório"),
      password: yup.string().required("O campo é obrigatório"),
    }),
    onSubmit: (values) => { 
      alert(JSON.stringify(values, null, 2))
      navigate("/perfil")
    },
  });
  
  return (
    <>
      <header className="cabecalho">
        <div>
          <Link className="conect" to="/">Tela inicial</Link>  
        </div> 
      </header> 

      <main>
        <div className="container">
           <form onSubmit={formik.handleSubmit} noValidate >
            <h2>Seja Bem vindo!</h2>              
            <div className="wrapperInput">
            <label htmlFor="">Email</label>
              <input 
              type="email"
              id="email"
              label="email"
              errors={formik.touched.email && formik.errors.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="@email"
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="alerta">{formik.errors.email}</span>
              ) : null }
            </div>
              <div className="wrapperInput">
                <label htmlFor="">Senha</label>
              <input 
              type="password"
              id="password"
              label="password"
              errors={formik.touched.password && formik.errors.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="senha"
              />
              {formik.touched.password && formik.errors.password ? (
                <span className="alerta">{formik.errors.password}</span>
              ) : null }
              <span className="esqueciSenha">Esqueci minha senha</span>
            </div>
            <button type="submit">Entrar</button>
            <div className="cadastro">
              <p>Ainda não tem conta?</p>
              <Link className="connectLogin" to="/tela">Cadastre-se</Link> 
            </div>
          </form>
        </div>
      </main>
    </>

  )

}

export default Login