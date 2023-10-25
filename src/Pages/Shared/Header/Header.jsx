import React from "react";
import Container from "../../../components/Container/Container";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div className="bg-blue-500 py-3">
      <Container>
        <nav className="flex justify-between">
          <div className="flex items-center gap-20">
            <h2 className="uppercase font-bold text-2xl text-white">Shiftlog.</h2>
            <div className="flex items-center">
              <div className="bg-white text-dark px-2 py-1 rounded-l-md">
                <AiOutlineSearch className="text-2xl" />
              </div>
              <input
                type="text"
                className="rounded-r-md text-dark placeholder-dark py-1 outline-none bg-white"
                placeholder="search..."
              />
            </div>
          </div>

          <div>
            <img
              src="https://avatars.githubusercontent.com/u/61281011?v=4"
              alt="profile"
              className="rounded-full w-10 h-10"
              />
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
