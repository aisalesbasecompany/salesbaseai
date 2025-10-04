export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6">
      {/* HEADER */}
      <header className="absolute top-6 left-0 w-full flex justify-between items-center px-10">
        <h1 className="text-2xl font-bold text-blue-600">AI Sales Base</h1>
        <nav className="space-x-6 font-medium">
          <a href="#pricing" className="hover:text-blue-500 transition">Pricing</a>
          <a href="#how" className="hover:text-blue-500 transition">How It Works</a>
          <a href="#dashboard" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition">Dashboard</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="text-center mt-32">
        <h2 className="text-5xl font-extrabold mb-6 leading-tight">
          AI Sales Calls <span className="text-blue-600">That Just Work</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          No wasted time. No hidden fees. Every call tracked, every sale counted, every month profitable.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="#get-started"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            Start Free Now →
          </a>
          <a
            href="#demo"
            className="border border-gray-300 hover:border-blue-500 hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition"
          >
            📞 Call Me Now (Live AI Demo)
          </a>
        </div>
      </section>

      {/* ROI SECTION */}
      <section id="pricing" className="mt-28 w-full max-w-5xl text-center">
        <h3 className="text-3xl font-bold mb-4">ROI + Pricing Calculator</h3>
        <p className="text-gray-500 mb-10">
          See exactly how much profit you&apos;ll make with AI Sales Base. Adjust the sliders for your industry.
        </p>
        <div className="bg-gray-50 rounded-xl shadow-md p-10 border border-gray-200">
          <p className="text-gray-400 italic">
            (Interactive pricing calculator coming soon)
          </p>
        </div>
      </section>

      {/* WHY SECTION */}
      <section id="how" className="mt-28 w-full max-w-5xl text-center">
        <h3 className="text-3xl font-bold mb-4">Why AI Sales Base Works</h3>
        <p className="text-gray-500 mb-10">
          Complete transparency, full control, and measurable results. Here&apos;s what makes us different.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-sm rounded-lg border">
            <h4 className="text-xl font-semibold mb-2">✅ Transparent Call Logging</h4>
            <p className="text-gray-600">
              See every call, script, and outcome in real time. No surprises or hidden costs.
            </p>
          </div>
          <div className="p-6 bg-white shadow-sm rounded-lg border">
            <h4 className="text-xl font-semibold mb-2">✅ Custom AI Scripts & Recommendations</h4>
            <p className="text-gray-600">
              Upload your scripts or let AI optimize them. Every improvement is data-backed.
            </p>
          </div>
          <div className="p-6 bg-white shadow-sm rounded-lg border">
            <h4 className="text-xl font-semibold mb-2">✅ Cancel Anytime / No Hidden Fees</h4>
            <p className="text-gray-600">
              Pay only for what you use. No contracts, commitments, or surprises.
            </p>
          </div>
          <div className="p-6 bg-white shadow-sm rounded-lg border">
            <h4 className="text-xl font-semibold mb-2">✅ Real-Time ROI Tracking</h4>
            <p className="text-gray-600">
              Track calls, conversions, and profits directly from your dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-24 mb-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} AI Sales Base — All rights reserved.
      </footer>
    </main>
  );
}
