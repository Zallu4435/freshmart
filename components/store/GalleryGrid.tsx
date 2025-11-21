export default function GalleryGrid() {
  return (
    <section style={{ padding: '2rem 1rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>In-store Gallery</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ aspectRatio: '1 / 1', background: '#e5e7eb', borderRadius: 8 }} />
          ))}
        </div>
      </div>
    </section>
  )
}
