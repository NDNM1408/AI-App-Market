import Creating from '../component/Creating';
import Footer from '../component/Footer';
import Group from '../component/Group';
import Header from '../component/Header';
import Navbar from '../component/Navbar';
import React, { useState, useEffect } from 'react';
import jsonData from './test_data.json';


function Tool() {
  const data = jsonData;

  return (
      <body class="presentation-page bg-gray-200">
        <Navbar></Navbar>
        <Header title={'Tool'} description={'Tự động tạo công cụ của riêng bạn'}></Header>
        <Creating ></Creating>
        <section class="my-5 py-5">
          <div class="container mt-sm-5 mt-3">
           <Group items={data} title={"Your Tool"}></Group>
          </div>
        </section>
        <Footer></Footer>
      </body>
  );
}

export default Tool;
