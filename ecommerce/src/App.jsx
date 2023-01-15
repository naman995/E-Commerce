import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Home from "@/pages/Home";
import Payment from "@/pages/Payment";

function App() {
  return (
    <div className="App bg-gray-50">
      <Navbar />
      {/* <Home /> */}
      <Payment/>
      <Footer />
    </div>
  );
}

export default App;
