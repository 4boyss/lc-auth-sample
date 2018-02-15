import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import LoginForm from '../components/LoginForm.js'

export default () => (
  <div>
    <div className="formContainer">
    <h1> Signup Page for example </h1>
      <LoginForm />
    </div>

    <style jsx>{`
      .formContainer {
        margin: 20px;
        padding: 20px;
      }
    `}</style>
  </div>
)
