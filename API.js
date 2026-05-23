
const limpar() =>
{
    document.getElementById("titulo").value =;
}

const preencherFicha() =>
{
    document.getElementById("titulo").value = title;
}

const PesquisaAnime = async() => 
{
    limparFormulario();
    const url = `https://api.jikan.moe/application/json`;

    if(titulo)
    {
        const dados = await fetch(url); 
        const addres = await dados.json(); 

        if(addres.hasOwnProperty("Erro"))
        {
            alert("Anime não encontrado ");
        }
        else
        {
            preencherFormulario(addres);
        }
        
    }
}
