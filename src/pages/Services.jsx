import React, { useState } from 'react';
import { 
  FaInstagram, 
  FaBullhorn, 
  FaPencilAlt, 
  FaAd, 
  FaUserTie, 
  FaChartLine,
  FaChevronDown,
  FaChevronUp,
  FaCheck
} from 'react-icons/fa';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: FaInstagram,
      title: "Social Media Marketing",
      shortDesc: "Build your brand presence across all major platforms",
      features: [
        "Content strategy and planning",
        "Daily posting and management",
        "Community engagement",
        "Analytics and reporting",
        "Paid social advertising",
        "Influencer partnerships"
      ],
      platforms: ["Instagram", "Facebook", "Twitter", "LinkedIn", "TikTok"]
    },
    {
      id: 2,
      icon: FaBullhorn,
      title: "Brand Strategy",
      shortDesc: "Create a brand identity that stands tall in your market",
      features: [
        "Brand positioning and messaging",
        "Logo and visual identity",
        "Brand guidelines development",
        "Market research and analysis",
        "Competitor analysis",
        "Brand voice development"
      ],
      platforms: ["Complete brand packages", "Rebranding services"]
    },
    {
      id: 3,
      icon: FaPencilAlt,
      title: "Content Creation",
      shortDesc: "High-quality content that engages and converts",
      features: [
        "Professional photography",
        "Video production and editing",
        "Copywriting for all platforms",
        "Graphic design",
        "Blog posts and articles",
        "Email newsletters"
      ],
      platforms: ["Photo", "Video", "Graphics", "Written content"]
    },
    {
      id: 4,
      icon: FaAd,
      title: "Digital Advertising",
      shortDesc: "Targeted campaigns that deliver measurable results",
      features: [
        "Facebook and Instagram ads",
        "Google Ads management",
        "Campaign strategy and planning",
        "A/B testing and optimization",
        "Retargeting campaigns",
        "Performance tracking and reporting"
      ],
      platforms: ["Meta Ads", "Google Ads", "Display advertising"]
    },
    {
      id: 5,
      icon: FaUserTie,
      title: "Influencer Marketing",
      shortDesc: "Connect with the right voices to amplify your message",
      features: [
        "Influencer identification and vetting",
        "Campaign planning and management",
        "Contract negotiation",
        "Content approval process",
        "Performance tracking",
        "ROI analysis"
      ],
      platforms: ["Micro-influencers", "Local influencers", "National reach"]
    },
    {
      id: 6,
      icon: FaChartLine,
      title: "Business Growth Consulting",
      shortDesc: "Strategic guidance to scale your business",
      features: [
        "Growth strategy development",
        "Market expansion planning",
        "Sales funnel optimization",
        "Customer acquisition strategies",
        "Revenue growth planning",
        "Performance analytics"
      ],
      platforms: ["Startups", "SMEs", "Established businesses"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Custom",
      description: "Perfect for small businesses just getting started",
      features: [
        "Social media management (2 platforms)",
        "4 posts per week",
        "Basic graphics",
        "Monthly analytics report",
        "Email support"
      ]
    },
    {
      name: "Growth",
      price: "Custom",
      description: "For businesses ready to scale their marketing",
      features: [
        "Social media management (4 platforms)",
        "Daily posting",
        "Professional photography",
        "Paid advertising (budget not included)",
        "Weekly performance reports",
        "Phone and WhatsApp support",
        "Monthly strategy sessions"
      ],
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Complete marketing solutions for established brands",
      features: [
        "Full-service marketing",
        "Unlimited platforms",
        "Video production",
        "Influencer campaigns",
        "Dedicated account manager",
        "Real-time analytics dashboard",
        "24/7 priority support",
        "Quarterly business reviews"
      ]
    }
  ];

  const portfolioItems = [
    {
      client: "Bungoma Agrovet",
      result: "+450% Instagram followers in 6 months",
      service: "Social Media Marketing"
    },
    {
      client: "Mount Elgon Coffee",
      result: "+250% brand recognition in Western Kenya",
      service: "Brand Strategy"
    },
    {
      client: "Nzoia Tech Hub",
      result: "500+ new members through targeted campaigns",
      service: "Digital Advertising"
    },
    {
      client: "Webuye Hardware",
      result: "+220% revenue increase year-over-year",
      service: "Business Growth Consulting"
    },
    {
      client: "Kanduyi Fashion",
      result: "Grew from 15K to 45K followers",
      service: "Content Creation"
    },
    {
      client: "Business Academy Kenya",
      result: "+180% enrollment through influencer partnerships",
      service: "Influencer Marketing"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Everything you need to grow your business, from strategy to execution. We handle the marketing so you can focus on what you do best.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-slate-600">
              Click any service to see what's included
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:border-orange-500 transition-all"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="text-3xl text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6">
                    {service.shortDesc}
                  </p>

                  <button
                    onClick={() => setExpandedService(
                      expandedService === service.id ? null : service.id
                    )}
                    className="text-orange-500 font-semibold flex items-center space-x-2 hover:text-orange-600 transition-colors"
                  >
                    <span>{expandedService === service.id ? 'Show Less' : 'Learn More'}</span>
                    {expandedService === service.id ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                </div>

                {expandedService === service.id && (
                  <div className="border-t-2 border-slate-200 bg-slate-50 p-8">
                    <h4 className="font-bold text-slate-900 mb-4">What's Included:</h4>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <FaCheck className="text-orange-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-slate-200">
                      <p className="text-sm font-semibold text-slate-900 mb-2">Platforms/Options:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.platforms.map((platform, idx) => (
                          <span
                            key={idx}
                            className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-slate-600">
              Flexible packages designed for businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  plan.featured ? 'ring-4 ring-orange-500 transform scale-105' : ''
                }`}
              >
                {plan.featured && (
                  <div className="bg-orange-500 text-white text-center py-2 font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                    <span className="text-slate-600 ml-2">pricing</span>
                  </div>
                  
                  <p className="text-slate-600 mb-6">
                    {plan.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start space-x-3">
                        <FaCheck className="text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                    plan.featured
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}>
                    Contact Us
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              All prices are customized based on your specific needs and goals.
            </p>
            <p className="text-slate-900 font-semibold">
              Contact us for a free consultation and custom quote.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio/Results Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Real Results for Real Businesses
            </h2>
            <p className="text-xl text-slate-600">
              Here's what we've achieved for clients just like you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-8">
                <div className="text-orange-500 font-bold text-sm mb-2">
                  {item.service}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.client}
                </h3>
                <p className="text-2xl font-black text-slate-900">
                  {item.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className="text-orange-500">★</span>
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "Goliath doesn't just post content, they build brands. Our social media went from zero to hero in 3 months."
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-bold text-slate-900">Jane Wafula</p>
                <p className="text-sm text-slate-600">Bungoma Agrovet</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className="text-orange-500">★</span>
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "ROI was immediate and sustainable. Finally, marketing that actually works for Kenyan businesses."
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-bold text-slate-900">David Wekesa</p>
                <p className="text-sm text-slate-600">Mount Elgon Coffee</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className="text-orange-500">★</span>
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "We doubled our revenue in 6 months. Goliath's strategies actually work in the real world."
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-bold text-slate-900">John Simiyu</p>
                <p className="text-sm text-slate-600">Webuye Hardware</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;