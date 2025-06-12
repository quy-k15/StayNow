import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import imgAppStore from "../assets/imgAppStore.png";
import imgGooglePlay from "../assets/imgGooglePlay.png"

const Footer = () => (
  <footer
    className="bg-[#F8F5F0]/50  "
  >
    <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Cột 1: Địa chỉ */}
      <div>
        <h3 className="font-lodestone text-lg mb-4">HotelX Hà Nội</h3>
        <p>12 Hàng Chiếu, phường Đồng Xuân, quận Hoàn Kiếm, Hà Nội</p>
        <p className="mt-2">043-158-8144</p>
      </div>

      {/* Cột 2: Về HotelX */}
      <div className="space-y-2">
        <h4 className="font-semibold mb-2">Về HotelX</h4>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">Về Chúng tôi</a></li>
          <li><a href="#" className="hover:underline">Câu chuyện thương hiệu</a></li>
          <li><a href="#" className="hover:underline">Tuyển dụng</a></li>
        </ul>
      </div>

      {/* Cột 3: Hỗ Trợ */}
      <div className="space-y-2">
        <h4 className="font-semibold mb-2">Hỗ Trợ</h4>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">Liên hệ</a></li>
          <li><a href="#" className="hover:underline">Điều khoản &amp; Điều kiện</a></li>
          <li><a href="#" className="hover:underline">Bảo mật thông tin</a></li>
        </ul>
      </div>

      {/* Cột 4: App Download */}
      <div>
        <h4 className="font-semibold mb-4">Tải HotelX APP</h4>
        <div className="space-y-4">
          <a href="#" >
            <img
              src={imgAppStore}
              alt="App Store"
              className="h-10 w-40"
            />
          </a>
          <a href="#" >
            <img
              src={imgGooglePlay}
              alt="Google Play"
              className="h-10 w-40 mt-4"
            />
          </a>
        </div>
      </div>
    </div>

    <hr className="border-gray-400 opacity-50" />

    <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
      <div className="mb-4 md:mb-0">
        HotelX &nbsp;|&nbsp; Copyright © 2019 sojo.com
      </div>
      <div className="flex space-x-4">
        <a href="#" aria-label="Facebook" className="hover:text-gray-900">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-gray-900">
          <FaTwitter />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-gray-900">
          <FaInstagram />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
