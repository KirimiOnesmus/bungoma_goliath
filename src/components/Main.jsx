import React, {useState} from 'react'
import {Header,Footer} from '../components'
import{Home, About,Services, Contact} from '../pages'

const Main = () => {
    const [currentPage, setCurrentPage] = useState('home');
      const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const renderMainContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home/>;
      case 'about':
        return <About/>;
      case 'services':
        return <Services/>;
      case 'contact':
        return <Contact/>;
    //   case 'blog':
    //     return <BlogPage onGoToAdmin={() => setCurrentPage('admin')} />;
    //   case 'admin':
    //     // Admin dashboard doesn't need header/footer
    //     return <AdminDashboard onBackToBlog={() => setCurrentPage('blog')} />;
      default:
        return <Home/>;
    }
    };
//       if (currentPage === 'admin') {
//     return (
//       <div className="min-h-screen">
//         <AdminDashboard onBackToBlog={() => setCurrentPage('blog')} />
//       </div>
//     );
//   }
  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
 
      <main className="flex-grow">
        {renderMainContent()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default Main