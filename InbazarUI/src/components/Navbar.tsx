import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen); // Toggle isOpen state on click
  };
  return (
    <div className="flex flex-row justify-start">
      <nav className="flex flex-col h-screen bg-white max-w-80 w-80 text-gray-600 relative">
        <NavLink
          to={"https://github.com/KhamidulloKhudaykulov"}
          className="h-16 w-full flex items-center p-9 pl-4 sticky top-0 bg-white"
        >
          <img
            src="https://stage-g2g.test.dmed.uz/assets/logo-dmed.b2a2c3d6.svg"
            alt="#"
          />
        </NavLink>
        <div className="flex flex-col overflow-y-scroll flex-grow">
          <NavLink
            to={"/"}
            className="p-4 hover:bg-blue-50 pl-6 ease-out duration-100 text flex gap-2"
          >
            <img
              width={24}
              className="opacity-80"
              src="https://img.icons8.com/laces/64/clinic.png"
              alt=""
            />
            <NavLink to="/">Приемный покой</NavLink>
          </NavLink>
          <NavLink
            to={"/"}
            className="p-4 hover:bg-blue-50 pl-6 ease-out duration-100 text-base flex gap-2"
          >
            <img
              width={24}
              className="opacity-80"
              src="https://img.icons8.com/external-creatype-glyph-colourcreatype/64/external-app-web-application-v1-creatype-glyph-colourcreatype-33.png"
              alt=""
            />
            <NavLink to="#">Аналитика</NavLink>
            <button className="ml-auto">
              <img
                width={14}
                src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png"
                alt="expand-arrow--v1"
              />
            </button>
          </NavLink>
          <NavLink
            to={"/"}
            className="p-4 hover:bg-blue-50 pl-6 ease-out duration-100 text-base flex gap-2"
          >
            <img
              width={24}
              className="opacity-80"
              src="https://img.icons8.com/dotty/80/edit-property.png"
              alt="edit-property"
            />
            <a href="#">Пациеты</a>
          </NavLink>
          <NavLink
            to={"/"}
            className="p-4 hover:bg-blue-50 pl-6 ease-out duration-100 text-base flex gap-2"
          >
            <img
              width={24}
              className="opacity-80"
              src="https://img.icons8.com/ios/50/hospital-wagon-without-a-siren.png"
              alt="hospital-wagon-without-a-siren"
            />
            <a href="#">Госпитализация</a>
          </NavLink>
          <NavLink
            to={"/"}
            className="p-4 hover:bg-blue-50 pl-6 ease-out duration-100 text-base flex gap-2"
          >
            <img
              width={24}
              src="https://img.icons8.com/pastel-glyph/50/money--v3.png"
              alt="#"
            />
            <a href="#">Касса</a>
            <button className="ml-auto">
              <img
                className="opacity-80"
                width={14}
                src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png"
                alt="expand-arrow--v1"
              />
            </button>
          </NavLink>
          <NavLink
            to={"/"}
            className="p-4 hover:bg-blue-50 pl-6 ease-out duration-100 text-base flex gap-2"
          >
            <img
              className="opacity-80"
              width={24}
              src="https://img.icons8.com/fluency-systems-regular/50/empty-bed.png"
              alt=""
            />
            <a href="#">Стационар</a>
          </NavLink>
          <NavLink
            to={"/"}
            className="p-4 hover:bg-blue-50 pl-6 ease-out duration-100 text-base flex gap-2"
          >
            <img
              className="opacity-80"
              width={24}
              src="https://img.icons8.com/parakeet-line/48/user-group-man-woman.png"
              alt=""
            />
            <a href="#">Пользователи</a>
            <button className="ml-auto">
              <img
                className="opacity-80"
                width={14}
                src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png"
                alt="expand-arrow--v1"
              />
            </button>
          </NavLink>
          <NavLink
            to={"/"}
            className="p-4 hover:bg-blue-50 pl-6 ease-out duration-100 text-base flex gap-2 relative"
          >
            <NavLink to="#" className="flex flex-row w-full">
              <img
                className="opacity-80"
                width={24}
                src="https://img.icons8.com/forma-thin/24/spiral-bound-booklet.png"
                alt=""
              />
              <p>Приемы</p>
              <button className="flex-grow self-end items-end flex justify-end" onClick={handleClick}>
                <img
                  width={14}
                  src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png"
                  alt="expand-arrow--v1"
                />
              </button>
            </NavLink>
          </NavLink>
          <NavLink
            to={"/"}
            className="p-4 hover:bg-blue-50 pl-6 ease-out duration-100 text-base flex gap-2"
          >
            <img
              className="opacity-80"
              width={24}
              src="https://img.icons8.com/forma-thin/24/syringe.png"
              alt=""
            />
            <a href="#">Заказы</a>
          </NavLink>
          <NavLink
            to={"/"}
            className="p-4 hover:bg-blue-50 pl-6 ease-out duration-100 text-base flex gap-2"
          >
            <img
              className="opacity-80"
              width={24}
              src="https://img.icons8.com/forma-thin/24/briefcase.png"
              alt=""
            />
            <a href="#">Бухгалтерия</a>
            <button className="ml-auto">
              <img
                width={14}
                src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png"
                alt="expand-arrow--v1"
              />
            </button>
          </NavLink>
          <NavLink
            to={"/"}
            className="p-4 hover:bg-blue-50 pl-6 ease-out duration-100 text-base flex gap-2"
          >
            <img
              className="opacity-80"
              width="24"
              height="18"
              src="https://img.icons8.com/forma-thin/24/warehouse-1.png"
              alt="warehouse-1"
            />
            <a href="#">Склад</a>
            <button className="ml-auto">
              <img
                width={14}
                src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png"
                alt="expand-arrow--v1"
              />
            </button>
          </NavLink>
          <NavLink
            to={"/"}
            className="p-4 hover:bg-blue-50 pl-6 ease-out duration-100 text-base flex gap-2"
          >
            <img
              width={24}
              src="https://img.icons8.com/ios-glyphs/30/pills.png"
              alt=""
            />
            <a href="#">Реимбурсация</a>
            <button className="ml-auto">
              <img
                className="opacity-80"
                width={14}
                src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png"
                alt="expand-arrow--v1"
              />
            </button>
          </NavLink>
        </div>
        <NavLink
          to={"/"}
          className="p-12 h-24 pt-1 flex justify-center hover:bg-blue-50 w-full bg-white"
        >
          <img
            src="https://stage-g2g.test.dmed.uz/assets/logo-uzinfocom.1a723945.svg"
            alt="#"
          />
        </NavLink>
      </nav>
      <nav className="h-16 bg-white m-5 w-full rounded-lg gap-4 shadow-sm flex flex-row items-center pl-6 pt-2 pb-2">
        <div className="bg-white text-lg p-4 border-gray-200 border-2 h-10 w-52 rounded-xl flex justify-center items-center">
          <p className="text-gray-300 max-w-full truncate">
            Введите ФИО пациента
          </p>
        </div>
        <div className="bg-blue-50 text-lg p-4 border-blue-200 border-2 h-10 w-auto rounded-xl flex justify-center items-center hover:cursor-pointer hover:bg-blue-500">
          <p className="font-normal p-4 text-blue-500 hover:text-white">
            Med ID сканер
          </p>
        </div>
        <div className="h-10 w-42 rounded-xl flex justify-center items-center flex flex-col">
          <p className="font-medium text-lg h-6 text-gray-500">
            +998 93 253-38-03
          </p>
          <p className="font-normal text-xs text-gray-500">Служба поддержки</p>
        </div>
        <div className="text-lg p-4 border-gray-200 border-2 h-8 w-12 rounded-2xl flex justify-center items-center"></div>
        <div className="text-lg p-4 border-gray-200 border-2 h-8 w-auto rounded-2xl flex justify-center items-center">
          <p className="p-2 font-medium text-gray-500">Обучение</p>
        </div>
        <div className="p-4 border-gray-200 border-2 h-8 w-auto rounded-2xl flex justify-center items-center">
          <p className="text-sm p-2 font-normal text-gray-500">Русский</p>
        </div>
        <div className="border-gray-200 border-r p-1 h-6 flex justify-center items-center"></div>
        <div className="p-4 border-gray-200 flex-grow flex flex-row justify-end gap-2 items-center">
          <div className="flex flex-col items-end max-w-32">
            <p className="h-6 font-bold text-md text-gray-600 truncate max-w-full">
              Bobur Doctor
            </p>
            <p className="text-md text-gray-400 truncate font-medium whitespace-nowrap max-w-full truncate">
              TEST CLINIC
            </p>
          </div>
          <a
            href="#"
            className="bg-blue-50 w-10 h-10 rounded-full border-blue-200 border-2 items-center flex justify-center"
          >
            O
          </a>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;
