async function buscarDOG(){

    const imagem = document.getElementById("imagem-cachorro")

    const url = `https://dog.ceo/api/breeds/image/random`

    try{
        const response = await fetch(url)
        const data = await response.json()
        
        imagem.src = data.message
        
    }catch(error){
        console.error("Erro ao buscar o CEP:", error)
        alert("Erro ao buscar o CEP. Tente novamente mais tarde.")
    }
}  