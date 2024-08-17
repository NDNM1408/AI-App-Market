import Footer from '../component/Footer';
import Header from '../component/Header';
import Navbar from '../component/Navbar';

function Agent() {
  return (
    <div className="Tool">
        <div className='NavBar'>
         <Navbar></Navbar>
      </div>
      <div className='Header'>
          <Header title={'Agent'} description={'Tự động tạo agent của riêng bạn'}></Header>
      </div>
      <div className='Footer'>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default Agent;
