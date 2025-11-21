export default function ExperienceHighlights() {
  return (
    <section style={{ padding: '2rem 1rem', background: 'white' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Experience Highlights</h2>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
          <li style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: 8 }}>Friendly staff</li>
          <li style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: 8 }}>Clean aisles</li>
          <li style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: 8 }}>Fresh inventory</li>
        </ul>
      </div>
    </section>
  )
}
