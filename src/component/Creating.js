import '../assets/css/nucleo-svg.css'
import '../assets/css/nucleo-icons.css'
import '../assets/css/material-kit.css'
import '../assets/css/material-icon.css'
import {BrowserRouter, Route, Switch, Link, Routes} from 'react-router-dom'
import CreatTool from '../pages/CreateTool'

const Creating = () => {
    return (
    <div className="creating">
        <section className='my-5 py-5'>
            <div class="container">
            <div class="row">
                    <div class="col-lg-4">
                        <div class="info-horizontal bg-gradient-primary border-radius-xl d-block d-md-flex p-4">
                            <i class="material-icons text-white text-3xl">flag</i>
                            <div class="ps-0 ps-md-3 mt-3 mt-md-0">
                            <h5 class="text-white">Tạo tool</h5>
                            <p class="text-white">Tạo tool mới của riêng bạn</p>
                            <Link  class="text-white icon-move-right" to="/tool/create_tool">
                                Let's start
                                <i class="fas fa-arrow-right text-sm ms-1"></i>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-lg-0 mt-4">
                        <div class="info-horizontal bg-gray-100 border-radius-xl d-block d-md-flex p-4">
                            <i class="material-icons text-gradient text-primary text-3xl">receipt_long</i>
                            <div class="ps-0 ps-md-3 mt-3 mt-md-0">
                            <h5>Tài liệu</h5>
                            <p>Các tính năng nền tảng hỗ trợ.</p>
                            <a class="text-primary icon-move-right">
                                Read more
                                <i class="fas fa-arrow-right text-sm ms-1"></i>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default Creating;