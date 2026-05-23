'use strict';

// URL base da API Jikan v4
const BASE_URL = 'https://api.jikan.moe/v4/anime';

const limparTela = () => {
    document.getElementById('lista-animes').innerHTML = '';
};

const mostrarAnimes = (animes) => {
    const lista = document.getElementById('lista-animes');

    animes.forEach(anime => {
        const item = document.createElement('li');

        // Pega os nomes dos gêneros (genres é um array de objetos)
        const generos = anime.genres.map(g => g.name).join(', ');

        item.innerHTML = `
            <h2>${anime.title}</h2>
            <p>Episódios: ${anime.episodes ?? 'Desconhecido'}</p>
            <p>Gêneros: ${generos || 'Não informado'}</p>
            <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
        `;

        lista.appendChild(item);
    });
};

// CONSUMO DA API
const listarAnimes = async () => {
    limparTela();

    // Captura o valor digitado no input
    const titulo = document.getElementById('titulo').value.trim();

    if (!titulo) {
        alert('Digite o nome de um anime!');
        return;
    }

    try {
        // Monta a URL com o parâmetro de busca
        const response = await fetch(`${BASE_URL}?q=${titulo}`);

        // Converte a resposta para JSON
        const json = await response.json();

        if (json.data.length === 0) {
            alert('Nenhum anime encontrado!');
            return;
        }

        mostrarAnimes(json.data);

    } catch (erro) {
        console.error('Erro ao buscar animes:', erro);
        alert('Ocorreu um erro. Tente novamente.');
    }
};