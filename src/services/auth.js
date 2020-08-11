import qs from 'querystring'

export async function signIn(email, password) { // Função que requere os dados do usuário  
  try {
    const response = await fetch('https://needle-server.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: qs.stringify({
        email: email,
        password: password,
      })
    })
    const json = await response.json()
    return json
  } catch (error) {
    // console.warn("Login mal-sucedido")
    return null
  }
}