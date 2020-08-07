export async function register(cpf, email, password) {
  const response = await fetch('https://needle-server.herokuapp.com/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      cpf,
      email,
      password
    })
  });
}