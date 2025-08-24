export default function RevistaPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-4xl font-bold mb-8">Revista La Vidriera</h1>

          <p className="text-card-foreground text-lg leading-relaxed text-white">
              Aqui puede ver el contendio, agrandar la revista y compartirla</p>
          <p className="text-card-foreground text-lg leading-relaxed text-white">
              Tambien puedes apretar en los emprendimiento y te llevaran a su contacto
            </p>
            <div className="mt-8">
              <iframe allowFullScreen={true} allow="clipboard-write" scrolling="no" className="fp-iframe" src="https://heyzine.com/flip-book/8d76b8f8e8.html" style={{ border: '0px', width: '100%', height: '600px' }}></iframe>
            </div>
        </div>
      </div>
    </main>
  )
}
