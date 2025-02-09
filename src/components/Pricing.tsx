import { PricingBlock } from "../types/api";

export function Pricing({ block }: { block: PricingBlock }) {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {block.name}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-600">
            {block.description}
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {block.plan?.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-3xl ${
                plan.isFeatured
                  ? "ring-2 ring-indigo-600 bg-white shadow-xl"
                  : "ring-1 ring-gray-200 bg-white/60 hover:bg-white hover:shadow-lg"
              } transition-all duration-200`}
            >
              {/* Plan Header */}
              <div
                className={`p-8 ${plan.isFeatured ? "bg-indigo-50/50" : ""}`}
              >
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  {plan.planType}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {plan.planPrice}
                  </span>
                  <span className="ml-1 text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                </div>
                {plan.isFeatured && (
                  <p className="mt-2 inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-600">
                    Most popular
                  </p>
                )}
              </div>

              {/* Features List */}
              <div className="flex flex-1 flex-col p-8">
                <div className="flex-1">
                  <ul role="list" className="space-y-4">
                    {plan.services?.data?.map((service) => (
                      <li key={service.id} className="flex items-start">
                        <svg
                          className={`h-6 w-6 flex-shrink-0 ${
                            plan.isFeatured
                              ? "text-indigo-600"
                              : "text-gray-400"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="ml-3 text-sm leading-6 text-gray-600">
                          {service.attributes.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  className={`mt-8 w-full rounded-full px-4 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm transition-colors ${
                    plan.isFeatured
                      ? "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
                      : "bg-gray-900 hover:bg-gray-800 focus-visible:outline-gray-900"
                  }`}
                >
                  Get started today
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
