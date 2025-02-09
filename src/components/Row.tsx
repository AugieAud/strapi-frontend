import { RowBlock } from "../types/api";

export function Row({ block }: { block: RowBlock }) {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {block.card.map((card, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow"
            >
              {card.Image?.data && (
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.Image.data.attributes.url}`}
                    alt={
                      card.Image.data.attributes.alternativeText || card.heading
                    }
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {card.heading} {/* Changed from title to heading */}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
