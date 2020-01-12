'use strict'

class SessionAdminController {

  async store ({ request, auth }) {
    const { cpf, password } = request.all();

    console.log(cpf)

    const adminAuth = auth.authenticator('admin')

    const token = await adminAuth.attempt(cpf, password)

    return token
  }

}

module.exports = SessionAdminController
