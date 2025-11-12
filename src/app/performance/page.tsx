import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { client } from '@/lib/sanity'

async function getPerformancePage() {
  return client.fetch(`*[_type == "page" && slug.current == "performance"][0]{ title, content }`)
}

export default async function Performance() {
  const page = await getPerformancePage()
  
  return (
    <main>
      <Navbar />
      <section className="min-h-screen pt-32 bg-novothor-dark text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-light mb-8">{page?.title || 'Performance'}</h1>
          <div className="text-xl opacity-80 prose prose-invert max-w-none">
            {page?.content ? (
              page.content.map((block: any, i: number) => (
                <p key={i}>{block.children?.[0]?.text}</p>
              ))
            ) : (
              <p>Edit this page in the CMS at /studio</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
