import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaClock, FaTag, FaCog } from 'react-icons/fa';

const Blog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const savedPosts = localStorage.getItem('goliath_blog_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {

      const demoPosts = [
        {
          id: '1',
          title: '5 Social Media Trends Every Kenyan Business Should Know in 2026',
          excerpt: 'Stay ahead of the curve with these emerging trends that are reshaping how businesses connect with customers in Kenya.',
          content: 'Full article content here...',
          category: 'Social Media',
          author: 'Goliath Marketing Team',
          date: '2026-03-15',
          image: null,
          featured: true
        },
        {
          id: '2',
          title: 'How to Create a Winning Brand Strategy for Your Local Business',
          excerpt: 'A step-by-step guide to building a brand that stands out in the Kenyan market.',
          content: 'Full article content here...',
          category: 'Branding',
          author: 'Goliath Marketing Team',
          date: '2026-03-10',
          image: null,
          featured: false
        },
        {
          id: '3',
          title: 'The ROI of Digital Marketing: What to Expect',
          excerpt: 'Real numbers and expectations for businesses investing in digital marketing in Kenya.',
          content: 'Full article content here...',
          category: 'Digital Marketing',
          author: 'Goliath Marketing Team',
          date: '2026-03-05',
          image: null,
          featured: false
        }
      ];
      localStorage.setItem('goliath_blog_posts', JSON.stringify(demoPosts));
      setPosts(demoPosts);
    }
  }, []);


  const categories = ['All', ...new Set(posts.map(post => post.category))];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

 
  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="bg-white">
      
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Marketing Insights
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Tips, strategies, and stories to help your business grow. Written by marketers who understand the Kenyan market.
            </p>
          </div>
        </div>
      </div>

      
      <div className="bg-slate-50 border-b border-slate-200  top-20 lg:top-28 z-40">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            <div className="w-full md:w-96 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Admin Link */}
            {/* <button
              onClick={() => navigate('/admin')}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all"
            >
              <FaCog />
              <span>Manage</span>
            </button> */}
          </div>
        </div>
      </div>

    
      {featuredPost && selectedCategory === 'All' && !searchTerm && (
        <div className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 gap-8">
           
                <div className="bg-slate-300 h-96 lg:h-auto flex items-center justify-center">
                  {featuredPost.image ? (
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-5xl font-black text-white">G</span>
                      </div>
                      <p className="text-slate-600 font-semibold">Featured Post Image</p>
                    </div>
                  )}
                </div>

           
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4 w-fit">
                    FEATURED
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-slate-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <FaClock />
                      <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaTag />
                      <span>{featuredPost.category}</span>
                    </div>
                  </div>
                  
                  <button className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold cursor-pointer hover:bg-orange-600 transition-all w-fit">
                    Read Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      <div className="py-16">
        <div className="container mx-auto px-6">
          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <article 
                  key={post.id}
                  className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:border-orange-500 hover:shadow-lg transition-all group"
                >
                  
                  <div className="bg-slate-300 h-48 flex items-center justify-center overflow-hidden">
                    {post.image ? (
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-3xl font-black text-white">G</span>
                        </div>
                      </div>
                    )}
                  </div>

                
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-xs text-orange-500 font-bold mb-3">
                      <FaTag />
                      <span>{post.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <div className="flex items-center space-x-2 text-sm text-slate-500">
                        <FaClock />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>

                      <button className="text-orange-500 font-semibold cursor-pointer hover:text-orange-600 transition-colors">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No articles found</h3>
              <p className="text-slate-600">
                {searchTerm || selectedCategory !== 'All' 
                  ? 'Try adjusting your search or filters'
                  : 'No blog posts available yet'
                }
              </p>
            </div>
          )}
        </div>
      </div>

     
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-black text-white mb-4">
              Never Miss an Update
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get marketing tips, insights, and strategies delivered straight to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-slate-800 border-2 border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold cursor-pointer hover:bg-orange-600 transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-slate-500 text-sm mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;