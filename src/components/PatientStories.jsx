const stories = [
  {
    name: "Sarah Jenkins",
    condition: "Living with RA for 5 years",
    image: "/images/patient-sarah.jpg",
    quote: "The biologic treatment plan the team here developed has been life-changing. I'm back to gardening and playing with my grandkids without constant fatigue and pain.",
  },
  {
    name: "Mark Thompson",
    condition: "Recovered Gout Patient",
    image: "/images/patient-mark.jpg",
    quote: "Finally, specialists who listened. The diet and medication guide they provided helped me manage my gout flares after years of frustration with general care.",
  },
]

function PatientStories() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Patient Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div key={story.name} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex gap-4 items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img className="w-full h-full object-cover" alt={story.name} src={story.image} />
                </div>
                <div>
                  <h4 className="font-bold">{story.name}</h4>
                  <p className="text-sm text-slate-500">{story.condition}</p>
                </div>
                <div className="ml-auto text-primary">
                  <span className="material-symbols-outlined">format_quote</span>
                </div>
              </div>
              <p className="text-lg italic text-slate-700">&ldquo;{story.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PatientStories
