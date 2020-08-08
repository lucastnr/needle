export async function register(cpf, email, password) {
  console.log(cpf + " " + email +" " + password)
  const response = await fetch('https://needle-server.herokuapp.com/register', {
    method: 'POST',
    body: JSON.stringify({
      cpf: cpf,
      email: email,
      password: password
    })
  })
}