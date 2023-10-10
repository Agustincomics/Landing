import React, { Component } from 'react';
import L from 'leaflet';

// Importa los estilos de Leaflet (opcional)
import 'leaflet/dist/leaflet.css';

class MapContainer extends Component {
  componentDidMount() {
    // Crea un mapa de Leaflet en el elemento con el ID "map"
   let map = this.map = L.map('map').setView([-26.7837267, -65.1788721 ], 13); // Define la ubicación inicial y el nivel de zoom

    // Agrega un proveedor de mapas (por ejemplo, OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    L.marker([-26.7837267, -65.1788721]).addTo(map)
    .bindPopup('Puedes encontrarnos aquí')
    .openPopup();
  }

  componentWillUnmount() {
    // Limpia y destruye el mapa cuando el componente se desmonta
    this.map.remove();
  }

  render() {
    return (
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    );
  }
}

export default MapContainer;
