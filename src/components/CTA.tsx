import { CTABlock } from "../types/api";
import { useState } from "react";

export function CTA({ block }: { block: CTABlock }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted with email:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="bg-indigo-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {block.heading}
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-indigo-200">
              {block.description}
            </p>
          </div>

          {/* Form */}
          <div className="mt-8 lg:mt-0">
            <form className="sm:flex" onSubmit={handleSubmit}>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {block.form.submitLabel || "Submit"}
                </button>
              </div>
            </form>
            {submitted && (
              <div className="mt-3 text-sm text-white">
                Thank you for subscribing!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
