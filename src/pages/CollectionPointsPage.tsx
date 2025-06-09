import mapImg from '@/assets/images/photo/map.png';

const CollectionPointsPage = () => (
  <div style={{ width: '100vw', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h1>Пункты сбора</h1>
    <img src={mapImg} alt="Пункты сбора" style={{ width: '40vw', maxWidth: '400px', height: 'auto', marginTop: '2rem' }} />
    <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>Здесь будет информация о пунктах сбора вашего города.</p>
  </div>
);

export default CollectionPointsPage; 