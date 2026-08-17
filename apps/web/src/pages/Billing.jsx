import { useQuery } from "@tanstack/react-query";

export default function Billing() {
  const { data } = useQuery({
    queryKey: ["billing"]
  });

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">
        Billing
      </h1>

      <div className="grid grid-cols-4 gap-4">
        <BillingCard
          title="Current Usage"
          value={`$${data?.usage || 0}`}
        />

        <BillingCard
          title="Forecast"
          value={`$${data?.forecast || 0}`}
        />

        <BillingCard
          title="LLM Spend"
          value={`$${data?.llmSpend || 0}`}
        />

        <BillingCard
          title="Infrastructure"
          value={`$${data?.infra || 0}`}
        />
      </div>
    </div>
  );
}

function BillingCard({ title, value }) {
  return (
    <div className="border rounded-lg p-4">
      <div>{title}</div>
      <div className="text-2xl font-bold mt-2">
        {value}
      </div>
    </div>
  );
}