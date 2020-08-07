export async function signIn(email, password) { // Função que requere os dados do usuário  
  try {
    const response = await fetch(`https://needle-server.herokuapp.com/login/${email}/${password}`)
    const json = await response.json()
    return json
  } catch (error) {
    console.error(error)
    return null
  }
}