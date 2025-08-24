export default function TurnosFarmaciaPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Turnos de Farmacia</h1>

          <div className="bg-card rounded-lg p-8">
            <p className="text-card-foreground text-lg leading-relaxed mb-6">
              Consulta los turnos de las farmacias de guardia en City Bell, Villa Elisa y Gonnet.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-xl font-semibold text-primary mb-2">Información Actualizada</h3>
                <p className="text-card-foreground">
                  Los turnos de farmacia se actualizan semanalmente. Mantente informado sobre qué farmacia está de
                  guardia en tu zona.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">Próximamente</h2>
                <p className="text-card-foreground">
                  Estamos trabajando para brindarte información actualizada sobre los turnos de farmacia en tiempo real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
