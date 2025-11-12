export default function ProvenSection() {
  return (
    <section className="bg-novothor-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-light uppercase mb-8">
            <span className="text-blue-400">Proven.<br/>Effective.</span>
          </h2>
          <p className="text-2xl max-w-3xl mx-auto">NovoTHOR is the only light bed with independently researched and published clinical results</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
          <div>
            <h3 className="text-2xl font-light mb-4">Independent Evidence</h3>
            <p className="opacity-80">It can be hard to know who to trust, which is why we don't need to say "trust us", instead we say "trust the evidence"</p>
          </div>
          <div>
            <h3 className="text-2xl font-light mb-4">Reliable Results</h3>
            <p className="opacity-80">5 independent clinical studies came to the same conclusion about the effectiveness of the NovoTHOR</p>
          </div>
          <div>
            <h3 className="text-2xl font-light mb-4">Intensely Effective</h3>
            <p className="opacity-80">Higher quality LEDs powered by bespoke drivers deliver the proven effective light intensity over the whole body</p>
          </div>
          <div>
            <h3 className="text-2xl font-light mb-4">Red Light Therapy Dose</h3>
            <p className="opacity-80">NovoTHOR's focus is on delivering the best dose over the entire treatment area for reliable outcomes</p>
          </div>
        </div>

        <div className="text-center">
          <a href="/#contact" className="inline-block bg-novothor-red px-8 py-4 rounded hover:bg-red-700 transition">Red Light Therapy Bed for Sale</a>
        </div>
      </div>
    </section>
  )
}
