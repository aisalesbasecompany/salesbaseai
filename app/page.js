export default function Home() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">AI Sales Base</h1>
        <nav className="space-x-8 text-gray-700 font-medium">
          <a href="#pricing" className="hover:text-blue-500">Pricing</a>
          <a href="#how" className="hover:text-blue-500">How It Works</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Dashboard
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-6">
        <h2 className="text-5xl font-extrabold mb-4">
          AI Sales Calls <span className="text-blue-600">That Just Work</span>
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          No wasted time. No hidden fees. Every call tracked, every sale counted, every month profitable.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700">
            Start Free Now →
          </button>
          <button className="border border-gray-300 py-3 px-6 rounded-lg text-gray-700 hover:bg-gray-100">
            ☎ Call Me Now (Live AI Demo)
          </button>
        </div>
      </section>

      {/* ROI Calculator Section (Placeholder for now) */}
      <section id="pricing" className="bg-gray-50 py-24 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">ROI + Pricing Calculator</h3>
        <p className="text-gray-600 mb-10">
          See exactly how much profit you'll make with AI Sales Base. Adjust the sliders for your industry.
        </p>

        <div className="bg-white shadow-md rounded-xl p-10 max-w-4xl mx-auto">
          <p className="text-gray-400 mb-4">✨ Calculator UI coming next step</p>
        </div>
      </section>

      {/* Why It Works */}
      <section id="how" className="py-24 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold mb-8">Why AI Sales Base Works</h3>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Complete transparency, full control, and measurable results. Here’s what makes us different.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">✅ Transparent Call Logging</h4>
            <p className="text-gray-500">See every call, script, outcome, and cost with full visibility.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">✅ Custom AI Scripts & Recommendations</h4>
            <p className="text-gray-500">AI learns from successful calls to improve every conversation.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">✅ Cancel Anytime / No Hidden Fees</h4>
            <p className="text-gray-500">Only pay for what you use, cancel anytime, no hidden costs.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">✅ Real-Time ROI Tracking</h4>
            <p className="text-gray-500">Know your exact ROI with real-time dashboards and analytics.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500 border-t">
        © {new Date().getFullYear()} AI Sales Base — Built for results.
      </footer>
    </main>
  );
}
