'use strict'; // modo estrito para tornar erros mais evidentes

//limpa a tela para moostrar os dados da pesquisa
const limparTela = () => 
{
    document.getElementById('titulo').value = '';
};

//mostra o anime pesquisado
const mostrarAnimes = (animes) => 
{
    const lista = document.getElementById('lista-animes');

    lista.innerHTML = ''; 
    animes.forEach(anime => 
    {
        const li = document.createElement('li'); //cria a lista de animes
        li.textContent = anime.title; //adiciona o titulo do anime
        lista.appendChild(li); // envia para o HTML
    });
}

//validar nome do anime
const validarNome = (titulo) => 
{
    if (!titulo)
    {
        alert('Por favor, digite o nome de um anime.');
        return false;
    }
    return true;
};

// URL base da API Jikan v4
//procura o anime na URL
const pesquisarAnime = async (titulo) => 
{
    
}

const BASE_URL = 'https://api.jikan.moe/v4/anime';