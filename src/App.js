import './App.css'
import Navbar from './Component/Navbar/Navbar';
import TopBar from './Component/TopBar/TopBar';
import Footer from './Component/Footer/Footer';
import AllProducts from './Component/AllProduct/AllProducts.jsx';
import RelatedProducts from './Component/RelatedProducts/RelatedProducts.jsx';
import SignUp from './Component/SignUp/SignUp.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />
      <TopBar />
      <AllProducts />
      <RelatedProducts />
      <SignUp/>
      <Footer />
    </div>
  );
}

export default App;
