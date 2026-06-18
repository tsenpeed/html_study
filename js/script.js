/* ============================================
   JavaScript - Menu Responsivo Hamburguer
   História dos Videogames
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  const botao = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');

  if (!botao || !menu) return;

  // Abre/fecha o menu ao clicar no botão hamburguer
  botao.addEventListener('click', function () {
    const aberto = menu.classList.toggle('ativo');
    botao.classList.toggle('ativo', aberto);
    botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
  });

  // Fecha o menu ao clicar em um link (útil no mobile)
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('ativo');
      botao.classList.remove('ativo');
      botao.setAttribute('aria-expanded', 'false');
    });
  });

  // Fecha o menu ao voltar para a tela grande (desktop)
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      menu.classList.remove('ativo');
      botao.classList.remove('ativo');
      botao.setAttribute('aria-expanded', 'false');
    }
  });
});
