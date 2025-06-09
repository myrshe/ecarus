import ecoMarketImg from '@/assets/images/photo/ecoMarket.png';

const EcoMarketPage = () => (
  <div style={{ width: '100vw', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h1>ЭкоМаркет</h1>
    <img src={ecoMarketImg} alt="ЭкоМаркет" style={{ width: '40vw', maxWidth: '400px', height: 'auto', marginTop: '2rem' }} />
    <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>Здесь будет информация о товарах из переработанных материалов.</p>
  </div>
);

export default EcoMarketPage; 