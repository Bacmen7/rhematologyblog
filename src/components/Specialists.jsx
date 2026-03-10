const specialists = [
  {
    name: "Dr. Elena Rodriguez",
    role: "Chief of Rheumatology",
    description: "Specializing in autoimmune connectivity diseases and innovative lupus therapies.",
    image: "/images/dr-elena.jpg",
  },
  {
    name: "Dr. James Chen",
    role: "Interventional Specialist",
    description: "Expert in musculoskeletal ultrasound and precision joint injection techniques.",
    image: "/images/dr-james.jpg",
  },
  {
    name: "Dr. Sarah Miller",
    role: "Clinical Researcher",
    description: "Lead investigator for phase-III clinical trials in biologic treatment for RA.",
    image: "/images/dr-sarah-miller.jpg",
  },
]

function Specialists() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">World-Class Specialists</h2>
          <p className="text-slate-600">Our board-certified rheumatologists are leaders in their fields.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {specialists.map((doc) => (
            <div key={doc.name} className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                <img className="w-full h-full object-cover" alt={doc.name} src={doc.image} />
              </div>
              <h4 className="text-xl font-bold">{doc.name}</h4>
              <p className="text-primary font-medium">{doc.role}</p>
              <p className="text-sm text-slate-500 mt-2 px-8">{doc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialists
