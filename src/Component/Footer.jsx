function Footer() {
  return (
    <div>
      
      <section className="bg-[#0f2238] text-gray-300 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Blogs</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">Cookie Policy</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Boiler Installation</li>
              <li className="hover:text-white cursor-pointer">Boiler Repair</li>
              <li className="hover:text-white cursor-pointer">System Conversion</li>
              <li className="hover:text-white cursor-pointer">Boiler Servicing</li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1e3a63] flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
                F
              </div>
              <div className="w-9 h-9 rounded-full bg-[#1e3a63] flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
                I
              </div>
              <div className="w-9 h-9 rounded-full bg-[#1e3a63] flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
                X
              </div>
            </div>
          </div>

        </div>
      </section>

    
      <div className="bg-[#0c1a2b] text-gray-400 text-sm text-center py-6  border-t border-[#1e3a63]">
        <span className="text-red-800 pr-8">HPS</span>  2025 | All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
