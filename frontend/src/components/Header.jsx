import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import logoStayNow from "../assets/Logo_StayNow.png";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";
// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline'
// import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: "Hà Nội", href: "#" },
  { name: "Hồ Chí Minh", href: "#" },
  { name: "Đà Nẵng", href: "#" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {isLoggedIn}= useContext(AuthContext);
  const navigate = useNavigate();
  const handleUserClick =()=>{
    if(isLoggedIn){
      navigate("/profilePage");
    }else{
      navigate("/loginPage");
    }
      

  }
  return (
    <header className="bg-[#F2B03F] fixed top-0 left-0 w-full z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src={logoStayNow} className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            {/* <Bars3Icon aria-hidden="true" className="size-6" /> */}
            <IoMdMenu />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center justify-between">
          <a href="/homePage" className="text-sm/6 font-semibold text-gray-900">
            Trang Chủ
          </a>
          <a
            href="/listHotelsPage"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Khách Sạn
          </a>
          <a
            href="/uploadHotelPage"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Các Loại Gói
          </a>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold  px-4 py-1 text-gray-400 border-2 rounded-sm border-black bg-white">
              Hà Nội
              <RiArrowDropDownLine className="size-5 flex-none text-gray-400 ml-10" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-[#F2B03F]"
                  >
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Dịch Vụ
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Tin Tức_Ưu Đãi
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Liên Hệ
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end cursor-pointer">
          <a
            href="/bookingHotel"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Đặt Phòng
          </a>
        </div>
       <button
        onClick={handleUserClick}
        className="text-sm/6 font-semibold text-gray-900"
      >
        <FaUserCircle />
      </button>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>

              <FaDeleteLeft />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/homePage"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Trang Chủ
                </a>
                <a
                  href="/listHotelsPage"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Khách Sạn
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Các Loại Gói
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Hà Nội
                    {/* <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" /> */}
                  </DisclosureButton>
                </Disclosure>

                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Dịch Vụ
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Tin Tức_Ưu Đãi
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Liên Hệ
                </a>
              </div>
              <a
                href="/bookingHotel"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Đặt Phòng
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
