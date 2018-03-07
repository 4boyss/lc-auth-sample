import Link from 'next/link'
import Signup from '../components/Signup.js'
import PropTypes from 'prop-types';


export default class signup extends React.Component {
  render () {
    return (
      <div>
        <div className="formContainer">
        <h1> Signup Page for example </h1>
          <Signup />
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