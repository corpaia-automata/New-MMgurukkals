export function StatsSection() {
  const stats = [
    { value: "100", symbol: "%", description: ["Natural", "Products"] },
    { value: "4000", symbol: "+", description: ["Happy", "Customers"] },
    { value: "7", symbol: "+", description: ["Years of", "Experience"] },
  ]

  return (
    <section className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Small screens: Grid with 3 columns */}
        <div className="grid grid-cols-3 md:hidden items-center justify-center gap-2">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center px-1"
            >
              {/* Number + Symbol */}
              <div className="flex items-baseline justify-center gap-0.5 mb-1">
                <span className="text-xl font-semibold text-gray-900">
                  {stat.value}
                </span>
                <span className="text-base font-semibold text-green-500 -mt-1">
                  {stat.symbol}
                </span>
              </div>

              {/* Description */}
              <div className="text-gray-900 text-xs">
                {stat.description.map((line, i) => (
                  <div key={i} className="leading-tight">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Medium and Large screens: Flex row - horizontal layout */}
        <div className="hidden md:flex flex-row items-center justify-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-1 relative"
            >
              {/* Statistic content — horizontal layout */}
              <div className="flex items-center justify-center gap-3 lg:gap-2 px-4 lg:px-8">
                {/* Number + Symbol */}
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl lg:text-xl xl:text-3xl font-semibold text-gray-900">
                    {stat.value}
                  </span>
                  <span className="text-xl lg:text-xl xl:text-3xl font-semibold text-green-500 -mt-1">
                    {stat.symbol}
                  </span>
                </div>

                {/* Description */}
                <div className="text-base lg:text-lg xl:text-xl text-gray-900 font-normal">
                  {stat.description.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < stat.description.length - 1 && " "}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              {index < stats.length - 1 && (
                <div className="w-px h-12 lg:h-16 bg-gray-300 mx-4 lg:mx-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
