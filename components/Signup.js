import React from 'react'

export default class LoginForm extends React.Component {
    static async getInitialProps () {
    }
  
    render () {
      return (
        <form className="pure-form pure-form-stacked" action="/users/signup" method="post">
            <fieldset  className="pure-group">
                <legend> Giving validate Email and Password and we keep it securious</legend>
                <input className="pure-input-1-2" name="email" type="email" placeholder="Email" defaultValue="" />
                <input className="pure-input-1-2" name="password" type="password" placeholder="Password" defaultValue="" />
                <input type="submit" className="pure-button pure-button-primary" value="Submit" />
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