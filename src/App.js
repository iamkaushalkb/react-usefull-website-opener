import './App.css';
import './custom.css';
import Button from './Button'

const App = ()=> {
  return <div>
    <h1>Useful Website Opener</h1>
    <h3>Which website do you want to open?</h3>
    <Button name="Google" link="https://google.com"/>
    <Button name="Facebook" link="https://facebook.com"/>
    <Button name="Youtube" link="https://youtube.com"/>
    <Button name="Github" link="https://github.com"/>
    <Button name="Canva" link="https://canva.com"/>
    <Button name="Gmail" link="https://mail.google.com/mail/u/1/#inbox"/>
    <Button name="Instagram" link="https://instagram.com"/>
    <Button name="Twitter" link="https://twitter.com"/>
    <Button name="Netflix" link="https://netflix.com"/>
  </div>
}

export default App;
