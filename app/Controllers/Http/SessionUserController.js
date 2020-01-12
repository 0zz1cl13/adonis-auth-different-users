'use strict'

class SessionUserController {

  async store ({ request, auth }) {
    const { cpf, password } = request.all();

    // console.log(cpf)

    const token = await auth.attempt(cpf, password)

    return token
  }

}

module.exports = SessionUserController
