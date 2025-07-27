import LoginForm from "../components/LoginForm";
const LoginPage = () => {
  return (
    <div className="flex relative">
      <div className="p-5 md:w-3/5 flex justify-center h-screen">
        <LoginForm />
      </div>
      <div className="w-2/5 bg-[#6F6F4B]/50 relative hidden md:block">
        <h3 className="font-lodestone text-3xl sm:text-2xl text-white absolute left-1/2 top-1/3 -translate-x-1/2 text-center px-2 max-w-[90%] truncate">
          - Staynow Tại Huế -
        </h3>
      </div>

      <img
        src="../src/assets/imgSlideHomePage.png"
        className="absolute bottom-0 right-0 w-[80%] md:w-[70%] lg:w-[60%] z-0 "
      />
    </div>
  );
};
export default LoginPage;
