export default function Stats() {
  const stats = [
    { number: "3+", title: "Projects" },
    { number: "10+", title: "Technologies" },
    { number: "1+", title: "Experience" },
    { number: "100%", title: "Passion" },
  ];

  return (
    <section className="py-24 bg-[#040816]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-3">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
