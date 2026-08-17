import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    "Autonomous Product Generation",
    "Multi-Agent Coordination",
    "Enterprise Governance",
    "AI Runtime Orchestration",
    "Production Deployment Automation"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="container mx-auto px-8 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold max-w-4xl"
        >
          Autonomous Software Product Development Platform
        </motion.h1>

        <p className="mt-8 max-w-2xl text-slate-300 text-xl">
          Build, deploy, govern, monitor, and evolve software using
          coordinated AI engineering agents.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            to="/dashboard"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-medium"
          >
            Launch Platform
          </Link>

          <Link
            to="/builder"
            className="rounded-lg border border-slate-700 px-6 py-3"
          >
            Open Builder
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-xl border border-slate-800 p-6"
            >
              <h3 className="font-semibold">{feature}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}