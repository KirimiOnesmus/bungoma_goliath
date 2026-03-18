import React from 'react';
import { FaAward, FaBullseye, FaUsers, FaChartLine, FaHeart, FaBolt, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Meet Goliath
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Not just a marketing agency. A partner dedicated to your business growth in Bungoma and across Kenya.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="bg-slate-200 rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                <div className="w-full h-full flex items-center justify-center bg-slate-300">
                  <div className="text-center p-8">
                   
                    <p className="text-2xl font-bold text-white mb-2">Bungoma's Premier Marketing Agency(Photo to added)</p>
                  </div>
                </div>
              </div>
            </div>

        
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-black text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
                <p>
                  Goliath Wa Bungoma Marketing started with a simple belief: every business deserves to grow, regardless of size or budget.
                </p>
                <p>
                  Founded in Bungoma, we've helped over 500 businesses across Kenya build their brands, reach new customers, and increase sales. From local shops to regional enterprises, we understand what it takes to succeed in the Kenyan market.
                </p>
                <p>
                  We're not corporate consultants speaking in buzzwords. We're your neighbors who happen to know marketing inside out. When you work with us, you get straight talk, proven strategies, and real results.
                </p>
              </div>

           
              <div className="mt-8 border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-xl">
                <h3 className="font-bold text-slate-900 mb-2">Our Mission</h3>
                <p className="text-slate-700">
                  To make professional marketing accessible to every business in Kenya, delivering results that actually matter: more customers, more sales, more growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-slate-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                <FaChartLine className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Results-Driven
              </h3>
              <p className="text-slate-600">
                We measure success by your growth. If you're not growing, we're not doing our job.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                <FaHeart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Client-First
              </h3>
              <p className="text-slate-600">
                Your success is our success. We treat your business like it's our own.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                <FaBolt className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Innovation
              </h3>
              <p className="text-slate-600">
                Marketing changes fast. We stay ahead so you don't fall behind.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                <FaShieldAlt className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Excellence
              </h3>
              <p className="text-slate-600">
                Good enough isn't good enough. We deliver work we're proud to put our name on.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              By The Numbers
            </h2>
            <p className="text-xl text-slate-600">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl font-black text-orange-500 mb-3">50+</div>
              <div className="text-xl font-bold text-slate-900 mb-2">Businesses Served</div>
              <p className="text-slate-600">
                From Bungoma to Nairobi and beyond
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl font-black text-orange-500 mb-3">2+</div>
              <div className="text-xl font-bold text-slate-900 mb-2">Years Experience</div>
              <p className="text-slate-600">
                Deep knowledge of the Kenyan market
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl font-black text-orange-500 mb-3">100%</div>
              <div className="text-xl font-bold text-slate-900 mb-2">Satisfaction Rate</div>
              <p className="text-slate-600">
                Our clients stick with us for a reason
              </p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Simple, straightforward process. No confusing jargon or hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-xl mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Discovery
                </h3>
                <p className="text-slate-600">
                  We learn about your business, goals, and challenges. No sales pitch, just listening.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-xl mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Strategy
                </h3>
                <p className="text-slate-600">
                  We create a custom plan based on what actually works for businesses like yours.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-xl mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Execute
                </h3>
                <p className="text-slate-600">
                  We get to work while keeping you in the loop every step of the way.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-xl mb-6">
                  4
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Optimize
                </h3>
                <p className="text-slate-600">
                  We track results and adjust until we hit your goals. Then we raise the bar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

 
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">
              Why Work With Us?
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">We Know The Local Market</h3>
                  <p className="text-slate-600">
                    Strategies that work in New York don't always work in Bungoma. We understand the Kenyan consumer and how to reach them.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaCheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Affordable Pricing</h3>
                  <p className="text-slate-600">
                    Professional marketing shouldn't cost a fortune. We offer packages for every budget, from startups to established businesses.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaCheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Real People, Real Support</h3>
                  <p className="text-slate-600">
                    No robots, no call centers. When you call, you talk to us. We're available when you need us.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaCheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Proven Track Record</h3>
                  <p className="text-slate-600">
                    50+ businesses trust us with their marketing. Check our testimonials and see what they say.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;