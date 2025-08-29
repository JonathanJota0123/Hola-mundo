const terapias = [
  {
    tipo: "Terapias personales",
    descripcion: "Un viaje interno hacia la sanacion",
    link: "/HTML/Services-personal.html",
  },
  {
    tipo: "Terapias de pareja",
    descripcion: "Reconstruir el amor juntos",
    link: "/HTML/Services-parents.html",
  },
  {
    tipo: "Terapia en familia",
    descripcion: "La union como fuerza sanadora",
    link: "/HTML/Services-parents.html",
  },
];

const container = document.querySelector("#terapias-container");

terapias.forEach((t) => {
  const card = `
    <div class="col-md-4">
          <div class="card shadow-sm mb-4">
            <div class="card-body">
               <h5 class="card-title">${t.tipo}</h5>
              <p class="card-text">${t.descripcion}</p>
              <a ${t.link} class="btn btn-primary">Ver mas</a>
            </div>
          </div>`;
  container.innerHTML += card;
});
