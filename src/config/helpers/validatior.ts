class Validator {
  validationUsername(value: string): boolean {
    const usernameValid = /^(?=.{4})[a-z][a-z\d]*_?[a-z\d]{5,30}$/g.test(value)
    return usernameValid
  }

  validationPassword(value: string): boolean {
    const usernameValid =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!@#$&*])[a-zA-Z\d!@#$&*]{8,30}.*/g.test(
        value,
      )
    return usernameValid
  }

  validationPhoneNumber(value: string): boolean {
    const usernameValid = /^(?=08|62)[\d]{9,14} *$/g.test(value)
    return usernameValid
  }

  validationEmail(value: string): boolean {
    const usernameValid =
      /^(?=.{5,30})([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g.test(
        value,
      )
    return usernameValid
  }
  validationConfirmPassword(pass: string, confirm: string): boolean {
    const usernameValid = pass === confirm
    return usernameValid
  }
}

export default Validator
