const partnerData = [
  { id: 1, name: 'Partner 1' },
  { id: 2, name: 'Partner 2' },
  { id: 3, name: 'Partner 3' },
  { id: 4, name: 'Partner 4' }
]

export default function Partners() {
  return (
    <section id="partners" className="partners">
      <div className="container">
        <h2>Our Partners</h2>
        <div className="partners-grid">
          {partnerData.map(partner => (
            <div key={partner.id} className="partner-card">
              <img src={`https://via.placeholder.com/200x100?text=${partner.name}`} alt={partner.name} />
              <h4>{partner.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
