'use strict'; // modo estrito para tornar erros mais evidentes

//limpa a tela para moostrar os dados da pesquisa
const limparTela = () => 
{
    document.getElementById('NomeAnime').value = '';
};

//mostra o anime pesquisado
const mostrarAnimes = (animes) => 
{
    const lista = document.getElementById('lista-animes');
    lista.innerHTML = ''; 
    const listaAnimes = Array.isArray(animes) ? animes : [animes]; 

    listaAnimes.forEach(anime => 
    {
        const li = document.createElement('li'); //cria a lista 
        li.className = 'anime-item'; //A classe para estilizar

        const img = document.createElement("img"); //imagem do anime
        img.src = anime.images?.jpg?.image_url || '';
        img.style.width = "150px"; 

        const NomeAnime = document.createElement("h3"); //titulo do anime
        NomeAnime.textContent = anime.title; 

        const ranking = document.createElement("p"); //ranking do anime
        ranking.textContent = `Ranking: ${anime.rank || 'Dessconecido'}`;

        const sinopse = document.createElement("p"); //sinopse do anime
        sinopse.textContent = anime.synopsis ? anime.synopsis.substring(0, 200) + '...' : 'Sem sinopse';

        const episodios = document.createElement("p"); //episodios do anime
        episodios.textContent = `Episódios: ${anime.episodes || 'Desconecido'}`;

        //coloca os elementos dentro da li
        li.append(img, NomeAnime, ranking, sinopse, episodios);

        // Coloca a li dentro da lista e envia para o HTML
        lista.appendChild(li);  
    });
}

//validar nome do anime
const validarNome = (titulo) => 
{
    const mensagemErro = document.getElementById('mensagem-erro');

    // .trim() remove espaços inúteis do início e fim
    if (!titulo || titulo.trim() === '')
    {
        mensagemErro.textContent = 'Por favor, insira um nome de anime válido.';
        return false;
    }
    mensagemErro.textContent = '';
    return true;
};

// URL base da API Jikan v4
//procura o anime na URL
const pesquisarAnime = async (titulo) => 
{
    limparTela();
    const BASE_URL = 'https://api.jikan.moe/v4/anime/?q=';
    
    if (validarNome(titulo))
    {
        const dados = await fetch(BASE_URL + encodeURIComponent(titulo)); //faz a requisição para a API
        const resposta = await dados.json();
        
        if(resposta.hasOwnProperty("Erro"))
        {
            alert('Anime não encontrado.');
        }
        else
        {
            mostrarAnimes(resposta.data);
        }
    }
}
