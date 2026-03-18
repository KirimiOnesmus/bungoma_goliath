import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: FaPhone,
      title: 'Phone',
      value: '0722555330',
      link: 'tel:0722555330',
      description: 'Call us during business hours'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '0722555330',
      link: 'https://wa.me/254722555330',
      description: 'Message us anytime, 24/7'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'info@goliathmarketing.co.ke',
      link: 'mailto:info@goliathmarketing.co.ke',
      description: 'We respond within 24 hours'
    },
        {
      icon: FaMapMarkerAlt,
      title: 'Office',
      value: 'Nairobi, Kenya',
      link: null,
      description: 'Visit us by appointment'
    }

  ];

  const services = [
    'Social Media Marketing',
    'Brand Strategy',
    'Content Creation',
    'Digital Advertising',
    'Influencer Marketing',
    'Business Growth Consulting',
    'Other'
  ];

  return (
    <div className="bg-white">

      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Let's Talk
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Ready to grow your business? Get in touch and let's discuss how we can help you reach new heights.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <method.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {method.title}
                </h3>
                {method.link ? (
                  <a 
                    href={method.link}
                    className="text-orange-500 font-semibold hover:text-orange-600 transition-colors block mb-2"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-slate-900 font-semibold mb-2">
                    {method.value}
                  </p>
                )}
                <p className="text-sm text-slate-600">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form and Info Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-slate-900 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-slate-900 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-slate-900 font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="0722555330"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-slate-900 font-semibold mb-2">
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      <option value="">Select a service...</option>
                      {services.map(service => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-slate-900 font-semibold mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors resize-none"
                      placeholder="Tell us about your business and how we can help..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">


              {/* Social Media */}
              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Follow Us
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://instagram.com/goliathwabungoma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:bg-orange-50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaInstagram className="text-xl text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Instagram</p>
                      <p className="text-sm text-slate-600">@goliathwabungoma</p>
                    </div>
                  </a>

                  <a 
                    href="https://facebook.com/goliathwabungoma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:bg-orange-50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaFacebookF className="text-xl text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Facebook</p>
                      <p className="text-sm text-slate-600">Goliath Wa Bungoma Marketing</p>
                    </div>
                  </a>

                  <a 
                    href="https://twitter.com/goliathwabungoma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:bg-orange-50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaTwitter className="text-xl text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Twitter</p>
                      <p className="text-sm text-slate-600">@goliathwabungoma</p>
                    </div>
                  </a>
                </div>
              </div>

        
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">
              Common Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  How quickly will you respond?
                </h3>
                <p className="text-slate-600">
                  We typically respond to all inquiries within 24 hours during business days. WhatsApp messages are usually answered within a few hours.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Do you offer free consultations?
                </h3>
                <p className="text-slate-600">
                  Yes! We offer a free initial consultation to understand your business and discuss how we can help you grow.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  What information should I include in my message?
                </h3>
                <p className="text-slate-600">
                  Tell us about your business, your goals, and any specific challenges you're facing. The more details you provide, the better we can help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;