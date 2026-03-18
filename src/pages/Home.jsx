import React from 'react';
import { FaArrowRight, FaUser, FaAward    } from "react-icons/fa";
import { MdOutlineTrendingUp, MdOutlineStar, MdOutlineBarChart   } from "react-icons/md";
import { FaMessage } from "react-icons/fa6"
import { TbTargetArrow } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
// import HomeHero from "../assets/Homepage.jpg";

const Home = () => {
  const navigate = useNavigate();
  const stats = [
    { number: "50+", label: "Clients Served", icon: FaUser  },
    { number: "2+", label: "Years Experience", icon: FaAward  },
    { number: "100%", label: "Results Driven", icon: MdOutlineTrendingUp  },
    { number: "24/7", label: "Support", icon: FaMessage }
  ];

  const services = [
    {
      icon: FaMessage,
      title: "Social Media Marketing",
      description: "Grow your brand presence across all major platforms"
    },
    {
      icon: TbTargetArrow,
      title: "Brand Strategy",
      description: "Build a powerful brand that stands tall in your market"
    },
    {
      icon: MdOutlineBarChart ,
      title: "Digital Marketing",
      description: "Data-driven campaigns that deliver real ROI"
    }
  ];

  return (
    <div className="bg-white">
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a5f7a] via-[#2d5a6e] to-[#0d3b4f]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
            }}></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-6">
            
            <div className=" text-white">
              <h1 className="text-3xl md:text-5xl font-black leading-tight">
                REACH NEW HEIGHTS WITH
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
                  GOLIATH MARKETING
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light">
                Your Partner for Business Growth in Bungoma & Beyond
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                onClick={()=>navigate("/contact")}
                className="group bg-orange-500 text-white px-10 py-4 rounded-lg font-bold text-lg cursor-pointer hover:shadow-2xl hover:shadow-orange-500/50 transition-all flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                onClick={()=>navigate("/services")}
                className="group bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-lg cursor-pointer font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all flex items-center justify-center space-x-2">
                  <span>View Services</span>
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

         
              <div className="flex items-center space-x-6 pt-6">
                {/* <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full bg-orange-400 border-2 border-white flex items-center justify-center text-white font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div> */}
                <div>
                  <div className="flex items-center space-x-1 mb-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <MdOutlineStar  key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
                    ))}
                  </div>
                  <p className="text-sm text-blue-100 font-medium">Trusted by 50+ businesses</p>
                </div>
              </div>
            </div>

           
            <div className="relative">
             
              <div className="relative">

                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="aspect-[3/4] bg-gradient-to-br from-slate-600 to-slate-600 flex items-center justify-center">
                    
                    <div className="text-center px-12 py-4">
                     
                   {/* <img src={HomeHero} alt=" bungoma goliath"/> */}
                      <p className="text-2xl font-bold text-white mb-2">Bungoma's Premier Marketing Agency</p>
                    
                  </div>
                  </div>
             
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/30 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-500/30 to-transparent rounded-tr-full"></div>
                </div>

               
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <MdOutlineTrendingUp  className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-black text-slate-900">50+</p>
                      <p className="text-sm text-slate-600 font-semibold">Happy Clients</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </div>

   
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl mb-4 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:scale-110 transition-all shadow-lg">
                  <stat.icon className="w-10 h-10 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-5xl font-black text-slate-900 mb-2">{stat.number}</p>
                <p className="text-slate-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-bold mb-4 uppercase tracking-wider">Why Choose Goliath</p>
            <h2 className="text-5xl font-black text-slate-900 mb-6">
              Standing Tall in Marketing Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We don't just market – we build empires that last
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaAward  className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Proven Track Record</h3>
              <p className="text-slate-600 leading-relaxed">
                2+ years of delivering results for 50+ businesses across Kenya and East Africa.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TbTargetArrow className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Results-Driven</h3>
              <p className="text-slate-600 leading-relaxed">
                We measure success by your growth. Every strategy is backed by data and delivers ROI.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaUser  className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Client-First Approach</h3>
              <p className="text-slate-600 leading-relaxed">
                Your success is our success. We're partners, not just vendors.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-slate-900 via-[#1a5f7a] to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-400 font-bold mb-4 uppercase tracking-wider">What We Do</p>
            <h2 className="text-5xl font-black text-white mb-6">Our Services</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Comprehensive marketing solutions designed to elevate your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">{service.description}</p>
                <button className="text-orange-400 font-semibold group-hover:text-orange-300 transition-colors flex items-center space-x-2">
                  <span>Learn More</span>
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
            onClick={()=>navigate("/services")}
             className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
              View All Services
            </button>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-bold mb-4 uppercase tracking-wider">Client Testimonials</p>
            <h2 className="text-5xl font-black text-slate-900 mb-6">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Goliath transformed our social media presence. We went from invisible to industry leaders!",
                author: "Jane Wafula",
                company: "Bungoma Agrovet",
                rating: 5
              },
              {
                quote: "Professional, results-driven, and always available. ROI was immediate and sustainable.",
                author: "David Wekesa",
                company: "Mount Elgon Coffee",
                rating: 5
              },
              {
                quote: "We doubled our revenue in 6 months. Goliath's strategies actually work!",
                author: "John Simiyu",
                company: "Webuye Hardware",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <MdOutlineStar  key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed text-lg italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    

    </div>
  );
};

export default Home;