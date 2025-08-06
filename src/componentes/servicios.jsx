// src/components/Servicios.jsx
import './Servicios.css';

const servicios = [
  { nombre: 'Desarrollo Web institucional', descripcion: 'Sitios modernos, rápidos y escalables.' },
  { nombre: 'Branding visual estratégico', descripcion: 'Logos únicos, portadas impactantes, layouts profesionales.' },
  { nombre: 'Asesoría legal y fiscal', descripcion: 'Protección de marca, facturación internacional, cobros legales.' },
];

export default function Servicios() {
  return (
    <section id="servicios" className="servicios">
      <h2>Servicios</h2>
      <div className="cards">
        {servicios.map((s, i) => (
          <div key={i} className="card">
            <h3>{s.nombre}</h3>
            <p>{s.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
