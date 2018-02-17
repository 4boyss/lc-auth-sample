import Link from 'next/link'
import LoginForm from '../components/LoginForm.js'
import PropTypes from 'prop-types';


export default class signup extends React.Component {
  render () {
    return (
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
  }
}