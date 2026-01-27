import Image from "next/image";

export default function PostNatalPackage() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT – DATA */}
          <div className="space-y-10">

            {/* TITLE */}
            <h2 className="text-green-600 text-2xl font-semibold">
              Post-Natal Package
            </h2>

            <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm text-center">
            <thead className="bg-green-200 font-semibold">
              <tr>
                <th className="p-3 text-bold text-left">Flat / Room Type</th>
                <th className="p-3 text-bold">15 Days</th>
                <th className="p-3 text-bold">21 Days</th>
                <th className="p-3 text-bold">31 Days</th>
                <th className="p-3 text-bold">41 Days</th>
              </tr>
            </thead>

            <tbody>
              {/* Luxury Room – 2BHK */}
              <tr className="border-t bg-orange-100">
                <td className="p-3 text-left font-medium">
                  Luxury Room <br />
                  <span className="text-black text-xs">12% – 2BHK</span>
                </td>
                <td className="p-3">
                  <span className="text-black font-semibold">39,600</span>
                </td>
                <td className="p-3">
                  <span className="text-black font-semibold">53,592</span>
                </td>
                <td className="p-3">
                  <span className="text-black font-semibold">77,748</span>
                </td>
                <td className="p-3">
                  <span className="text-black font-semibold">1,01,024</span>
                </td>
              </tr>

              {/* Luxury Room – 1BHK */}
              <tr className="border-t bg-green-100">
                <td className="p-3 text-left font-medium">
                  Luxury Room <br />
                  <span className="text-black text-xs">12% – 1BHK</span>
                </td>
                <td className="p-3">
                  <span className="text-black font-semibold">36,960</span>
                </td>
                <td className="p-3">
                  <span className="text-black font-semibold">50,820</span>
                </td>
                <td className="p-3">
                  <span className="text-black font-semibold">73,656</span>
                </td>
                <td className="p-3">
                  <span className="text-black font-semibold">95,612</span>
                </td>
              </tr>

              {/* Standard Room */}
              <tr className="border-t bg-orange-100">
                <td className="p-3 text-left font-medium">
                  Standard Room <br />
                  <span className="text-black text-xs">10%</span>
                </td>
                <td className="p-3">
                  <span className="text-black font-semibold">33,750</span>
                </td>
                <td className="p-3">
                  <span className="text-black font-semibold">45,360</span>
                </td>
                <td className="p-3">
                  <span className="text-black font-semibold">64,170</span>
                </td>
                <td className="p-3">
                  <span className="text-black font-semibold">77,400</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* AC Note */}
        <div className="mt-4 text-left text-2xl text-red-600 font-semibold">
          <span className="text-black">AC Per Day: </span>₹200 /-
        </div>
            {/* PACKAGE DETAILS */}
            <div>
              <h3 className="text-green-600 text-xl font-semibold mb-4">
                Package Details
              </h3>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h4 className="font-semibold">AC / Non-AC 2BHK Flat</h4>
                  <p>
                    Exclusive two AC/Non-AC rooms with one double and one single
                    cot, both attached rooms with hot water connection, cup
                    boards, tables, living area with sitting and TV, dining area,
                    Wi-Fi, kitchen with cooking gas supply and refrigerator.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">AC / Non-AC 1BHK Flat</h4>
                  <p>
                    Exclusive AC/Non-AC room with one double and one single cot,
                    attached bathroom with hot water connection, cup boards,
                    living area with TV, dining space, Wi-Fi, kitchen with
                    cooking gas supply and refrigerator.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT – IMAGE */}
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/facilities/package.jpeg"
              alt="Post-natal package accommodation"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
