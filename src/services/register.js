import qs from 'querystring'

export async function register(cpf, email, password) {
  console.log(cpf + " " + email +" " + password)

  const response = await fetch('https://needle-server.herokuapp.com/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: qs.stringify({
      cpf: cpf,
      email: email,
      password: password,
    })
  })
}