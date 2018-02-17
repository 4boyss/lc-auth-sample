
export default class LoginForm extends React.Component {
  static async getInitialProps ({res}) {
    return {...res.locals.data}
  }
  
  render() {
    const {message, title} = this.props
    return (
      <div className='successContainer'>
        <h1> Success </h1>
        <div className='content'>
            <h2> {title}</h2>
            <p>{message}</p>
        </div>
    
        <style jsx>{`
          .successContainer {
            margin: auto auto;
            text-align: center;
            background: #95daff;
            width: 80%;
            min-width: 300px;
            color: #3c3c3c;
          }
          .successContainer h1 {
            padding-top: 40px;
          }
    
          .content h2 {
            font-weight: 300;
            font-size: large;
          }
    
          .content p {
            width: 70%;
            min-width: 300px;
            padding-bottom: 50px;
            margin: auto;
          }
    
        `}</style>
      </div>)
  }
}