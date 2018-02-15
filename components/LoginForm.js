import React from 'react'

export default class LoginForm extends React.Component {
    static async getInitialProps () {
    }
  
    render () {
      return (
        <form className="pure-form pure-form-stacked" action="/users/signup" method="post">
            <fieldset  className="pure-group">
                <legend> Giving validate Email and Password and we keep it securious</legend>
                <input className="pure-input-1-2" type="email" placeholder="Email" defaultValue="" />
                <input className="pure-input-1-2" type="password" placeholder="Password" defaultValue="" />
                <label htmlFor="remember">
                    <input className="rmbCheckBox" id="remember" type="checkbox" />
                    <span>Remember me</span>
                </label>
                <button type="submit" className="pure-button pure-button-primary">Sign in</button>
            </fieldset>
            <style jsx>{`
            input[type=checkbox].rmbCheckBox {
                display: inline;
                margin-right: 10px;
            }
            `}</style>
        </form>
      )
    }
  }