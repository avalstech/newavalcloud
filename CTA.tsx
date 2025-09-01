export default function CTA() {
  return (
    <section id="demo" className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-3xl bg-white/5 ring-1 ring-white/10">
          <h3 className="text-2xl font-display">Founder QuickStart</h3>
          <p className="mt-2 text-white/75">
            Provision your workspace, connect sales channels, import SKUs, and go live with order routing in minutes.
          </p>
          <ul className="mt-4 space-y-2 text-white/75 list-disc list-inside">
            <li>Templates: B2B/B2C, distributor, 3PL, D2C</li>
            <li>Integrations: Shopify, Woo, Shippo, Sendy, DHL, Nigeria local couriers</li>
            <li>Payments: Stripe, Paystack, Flutterwave</li>
          </ul>
        </div>
        <div className="p-6 rounded-3xl bg-white/5 ring-1 ring-white/10">
          <h3 className="text-2xl font-display">AI Orchestration</h3>
          <p className="mt-2 text-white/75">
            Demand forecasts, smart reorder points, route suggestions, and anomaly detection powered by AWS.
          </p>
          <ul className="mt-4 space-y-2 text-white/75 list-disc list-inside">
            <li>Forecasting via Amazon Forecast / Bedrock agents</li>
            <li>Cost-aware picking/packing & route options</li>
            <li>Auto-escalations & SLA alerts with EventBridge</li>
          </ul>
        </div>
      </div>
    </section>
  )
}