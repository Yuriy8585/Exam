import Rukesreg from "./items/RulesReg";



function Registration () {


    return (
        <div>
  
        <Rukesreg />
    <div className="product">
      <form id="registrationForm">
        <p id="notice">Пожалуйста, прокрутите и прочитайте следующий текст.</p>
        <p>
          <textarea
            id="rules"
            defaultValue={
              " /n Регистрируясь на сайте, я соглашаюсь со следующими условиями: \n  Условие 1 \n  Условие 2 \n ...\n  Условие 99\n  Условие 100 "
            }
          />
        </p>
        <p>
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">Я согласен</label>
          <br />
          <input type="submit" id="nextstep" defaultValue="Далее" />
        </p>
      </form>
      <form id="registrationForm">
        <label htmlFor="username">Username:</label>
        <br />
        <input type="text" id="username" name="username" />
        <span id="usernameError" />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input type="text" id="email" name="email" />
        <span id="emailError" />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" name="password" />
        <span id="passwordError" />
        <br />
        <input
          href="http://127.0.0.1:8000/"
          type="submit"
          defaultValue="Submit"
        />
      </form>
    </div>
  
</div>

        
    )
}

export default Registration;
