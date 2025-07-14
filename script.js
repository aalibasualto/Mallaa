document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    if (ramo.classList.contains('bloqueado')) return;

    // Alternar clase de aprobado
    ramo.classList.toggle('aprobado');

    const desbloquea = ramo.dataset.desbloquea;
    if (!desbloquea) return;

    const ramosADesbloquear = desbloquea.split(',');
    ramosADesbloquear.forEach(id => {
      const dependiente = document.getElementById(id.trim());
      if (dependiente && dependiente.classList.contains('bloqueado')) {
        dependiente.classList.remove('bloqueado');
      }
    });
  });
});
