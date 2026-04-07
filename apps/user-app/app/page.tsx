


import Navbar from "../component/Navbar";

export default async function Page() {
 
  //  const user = await prisma.user.findMany();
  return <>
  {/* <div >{user[0]?.name  ?? "No user added yet"}</div>; */}
  {/* <BalanceClient /> */}
 {/* <LandingPage onNavigate={(path):any => router.push(path)}/> */}

    <Navbar/>

      {/* Hero Section */}
      <main className="px-4 bg-[#F5F5F5] pb-20 md:px-12">
        <div 
          
          className="relative overflow-hidden rounded-[40px] bg-[#D1E8FF] p-8 md:p-16 lg:flex lg:items-center lg:justify-between lg:gap-12"
        >
          {/* Left Content */}
          <div className="max-w-xl lg:w-1/2">
            <h1 
            
              className="text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl"
            >
              Fast, safe social payments
            </h1>
            <p 
              
              className="mt-8 text-lg font-medium leading-relaxed text-[#4A4A4A] md:text-xl"
            >
              Pay, get paid, grow a business, and more. Join the tens of millions of people on monexo.
            </p>
            <div 
             
              className="mt-10"
            >
              <button className="group relative flex items-center gap-2 rounded-full bg-[#008CFF] px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95">
                <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-white text-[12px] text-[#008CFF]">
                  M
                </span>
                Get monexo
                <div className="absolute -bottom-1 -right-1 -z-10 h-full w-full rounded-full bg-[#8A5CF5] opacity-30 blur-md group-hover:opacity-50 transition-opacity" />
              </button>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <div
          
              className="relative aspect-square w-full overflow-hidden rounded-[40px] shadow-2xl md:aspect-[4/3]"
            >
              <img 
                src="https://picsum.photos/seed/monexo-friends/1200/900" 
                alt="Friends hanging out" 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Notification Overlay */}
              <div 
                
                className="absolute bottom-10 right-10 flex items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-sm"
              >
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <img 
                    src="https://picsum.photos/seed/avatar1/100/100" 
                    alt="User" 
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500">You paid Trish A</p>
                  <p className="text-sm font-bold">Picnic in the park 🥪</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer / Extra Section (Optional but good for completeness) */}
      <section className="mt-12 bg-[#F5F5F5] px-6 md:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {["Personal", "Business", "Charity", "Security"].map((item) => (
            <div key={item} className="group cursor-pointer">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#008CFF] transition-colors">
                {item}
              </h3>
              <div className="mt-2 h-1 w-0 bg-[#008CFF] transition-all group-hover:w-full" />
            </div>
          ))}
        </div>
      </section>
    
  </>
  
}
