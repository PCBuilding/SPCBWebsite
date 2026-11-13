import Footer from "@/components/Footer";

const sponsors = [
  { name: "Company Name", description: "Short blurb here" },
];

export default function Sponsors() {
    return (
        <>
            <section className="relative min-h-screen bg-[#080d14]">
                <div className="mx-auto max-w-7xl px-4 pb-12 pt-28 text-white sm:pt-36 md:px-10">
                    <h1 className="text-3xl sm:text-4xl font-semibold">Sponsors</h1>
                    <h2 className="max-w-2xl sm:text-balance pt-4 text-xl sm:text-2xl text-gray-200">Partner with UF’s PC building community and reach future engineers.</h2>
                    <div className="rounded-lg border border-gray-700 bg-gray-900 p-6">
                    Company Name
                    <div className="h-24 w-48 bg-gray-800 rounded-md">
                        Company Logo
                    </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
