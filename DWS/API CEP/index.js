async function buscarCEP(){
    const inpurText = document.getElementById("cep").value.replace(/\D/g, "")
    const resultado = document.getElementById("resultado")
    
    if(inpurText.length !== 8){
        alert("CEP inválido")
        return
    }

    const url = `https://viacep.com.br/ws/${inpurText}/json/`

    const response = await fetch(url)
    const data = await response.json()

    if(data.erro){
        alert("CEP não encontrado")
        return
    }

    const {cep, logradouro, complemento, bairro, localidade, uf} = data

    resultado.innerHTML = `
    CEP: <strong> ${cep} </strong> <br>
    Logradouro: <strong> ${logradouro} </strong> <br>
    Complemento: <strong> ${complemento} </strong> <br>
    Bairro: <strong> ${bairro} </strong> <br>
    Cidade: <strong> ${localidade} </strong> <br>
    Estado: <strong> ${uf} </strong> 
    `
}  