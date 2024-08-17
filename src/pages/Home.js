import Footer from '../component/Footer';
import Header from '../component/Header';
import Navbar from '../component/Navbar';

function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Header title={'AI APP MARKET'} description={'Tự động hóa quá trình đưa Agent vào doanh nghiệp của bạn'}></Header>
        <Footer></Footer>
    </div>
  );
}

export default Home;
