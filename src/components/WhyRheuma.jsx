
const blobs = [
  <svg key="b1" width="70" height="74" viewBox="0 0 70 74" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M69.771 38.7915C71.9749 58.1348 57.8644 67.3099 44.9364 71.8246C32.8282 76.0613 18.2876 75.0816 8.90745 60.0545C-1.17152 43.9153 -2.87822 21.6461 4.7146 7.40019C11.2861 -4.91274 25.316 0.568504 37.5048 6.44693C50.93 12.9212 67.6746 20.2559 69.771 38.7915Z" fill="#ffffff" /></svg>,
  <svg key="b2" width="72" height="74" viewBox="0 0 72 74" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M55.1256 5.62319C69.5284 18.4233 75.3527 39.7894 70.0964 55.9976C65.1006 71.3957 49.3485 76.6043 33.3275 72.8197C18.4814 69.3135 4.89883 56.0577 0.773067 39.6249C-2.87611 25.0844 7.0102 15.5753 17.3399 9.11354C28.7557 1.97144 42.7234 -5.39849 55.1256 5.62319Z" fill="#ffffff" /></svg>,
  <svg key="b3" width="68" height="74" viewBox="0 0 68 74" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M61.2722 61.651C48.113 74.675 28.0401 77.5078 13.8247 69.6181C0.313371 62.1241 -2.78863 44.9948 2.32593 28.9416C7.06625 14.0642 20.5554 1.95861 35.9545 0.146643C49.5794 -1.45508 57.2138 10.23 62.0234 21.9179C67.3404 34.8367 72.6018 50.4362 61.2694 61.6482L61.2722 61.651Z" fill="#ffffff" /></svg>,
  <svg key="b4" width="72" height="74" viewBox="0 0 72 74" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M6.18816 64.3795C-3.39958 48.4772 -1.49202 26.3721 9.46198 11.9611C19.8727 -1.73098 37.2185 -2.93384 51.6141 4.63228C64.9551 11.6447 73.574 27.7867 71.7584 44.7011C70.1524 59.6658 57.0392 66.4641 44.5771 70.2053C30.8047 74.3397 14.4416 78.0716 6.18816 64.3795Z" fill="#ffffff" /></svg>,
  <svg key="b5" width="74" height="74" viewBox="0 0 74 74" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M73.3102 21.5931C76.7302 40.5231 67.1102 60.6731 51.6902 69.8631C37.0302 78.6031 20.2602 72.7031 9.36024 59.7131C-0.739762 47.6731 -3.15976 28.9031 4.53024 13.6331C11.3402 0.123064 26.1102 -0.996936 39.1802 0.513064C53.6302 2.18306 70.3702 5.28306 73.3102 21.5831V21.5931Z" fill="#ffffff" /></svg>,
]

const conditions = [
  // {
  //   name: "Rheumatoid Arthritis",
  //   icon: "https://oshihealth.com/wp-content/uploads/2024/11/Acid-Reflux-GERD.svg",
  // },
  // {
  //   name: "Psoriatic Arthritis",
  //   icon: "https://oshihealth.com/wp-content/uploads/2024/11/Irritable-Bowel-Syndrome.svg",
  // },
  {
    name: "Lupus",
    icon: "https://oshihealth.com/wp-content/uploads/2024/11/Icon-Bloating.svg",
  },
  {
    name: "Joint Pain",
    icon: "https://oshihealth.com/wp-content/uploads/2024/11/Abdominal-Pain.svg",
  },
  {
    name: "Gout",
    icon: "https://oshihealth.com/wp-content/uploads/2024/11/Crohns-Disease.svg",
  },
  {
    name: "Spondylitis",
    icon: "https://oshihealth.com/wp-content/uploads/2024/11/Icon-Ulcerative-Colitis.svg",
  },
  {
    name: "Vasculitis",
    icon: "https://oshihealth.com/wp-content/uploads/2024/11/Icon-Small-Intestinal-Bacterial-Overgrowth.svg",
  },
  {
    name: "Undiagnosed",
    icon: "https://oshihealth.com/wp-content/uploads/2024/11/Icon-Undiagnosed-GI-Symptoms.svg",
  },
]

function WhyRheuma() {
  return (
    <section className="custom-approach-section relative bg-[#a0e2e4] pt-[100px] pb-[130px] md:pt-[120px] md:pb-[150px] text-[#0f616e] overflow-hidden">


      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h2 style={{ color: "#0f616e", marginBottom: "20px" }}>
            Expert care for all rheumatic
            <br />
            symptoms and conditions
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.67, letterSpacing: "0.4px", color: "#2a5a5e" }}>
            From joint pain to complex autoimmune disorders, we diagnose and treat{" "}
            <strong className="font-semibold" style={{ color: "#0f616e", background: "#fa885a", padding: "2px 6px", borderRadius: "3px" }}>hundreds of rheumatic conditions</strong>.
          </p>
        </div>

        {/* Conditions - mobile grid 3col, desktop flex row */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-8 md:flex md:gap-8">
          {conditions.map((c, i) => (
            <div key={c.name} className="group cursor-pointer md:flex-1 md:min-w-0 flex flex-col items-center text-center md:items-start md:text-left">
              <div className="relative w-[56px] h-[60px] md:w-[70px] md:h-[74px] mb-5 md:mb-5">
                <div className="absolute inset-0">{blobs[i % blobs.length]}</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={c.icon} alt={c.name} className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]" />
                </div>
              </div>
              <h3 style={{ fontFamily: "var(--font-base)", fontWeight: 600, lineHeight: 1.3, letterSpacing: "0.4px", color: "#0f616e" }} className="text-[12px] md:text-[18px]">
                {c.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave — blends into next section */}
      <svg className="absolute -bottom-px left-0 w-full block" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
        <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#F5F5F5" />
      </svg>
    </section>
  )
}

export default WhyRheuma
