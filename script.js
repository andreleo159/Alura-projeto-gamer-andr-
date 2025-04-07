document.addEventListener('DOMContentLoaded', function() {
    const botaoAlternaContraste = document.getElementById('alterna-contraste');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const formulario = document.querySelector('.formulario');
    const navLinks = document.querySelectorAll('.nav-link');
    const botaoInicio = document.querySelector('.botao-inicio');
    const botoesPrimarios = document.querySelectorAll('.btn-primary');
    const secaoTropicalia = document.getElementById('tropicalia');
    const secaoGaleria = document.getElementById('galeria');
    const fundoGaleria = document.querySelector('.fundo-galeria');

    botaoAlternaContraste.addEventListener('click', function() {
        body.classList.toggle('alto-contraste');
        if (header) header.classList.toggle('alto-contraste');
        if (footer) footer.classList.toggle('alto-contraste');
        if (formulario) formulario.classList.toggle('alto-contraste');
        navLinks.forEach(link => link.classList.toggle('alto-contraste'));
        if (botaoInicio) botaoInicio.classList.toggle('alto-contraste');
        botoesPrimarios.forEach(botao => botao.classList.toggle('alto-contraste'));
        if (secaoTropicalia) secaoTropicalia.classList.toggle('alto-contraste');
        if (secaoGaleria) secaoGaleria.classList.toggle('alto-contraste');
        if (fundoGaleria) fundoGaleria.classList.toggle('alto-contraste');
    });
});