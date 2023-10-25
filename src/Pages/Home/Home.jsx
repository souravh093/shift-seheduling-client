import React from "react";
import Container from "../../components/Container/Container";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Content from "./Content/Content";

const Home = () => {
  return (
    <div className="mt-10">
      <Container>
        <main>
          <div>
            <div className="flex justify-end">
              <div className="flex items-center gap-2 bg-blue-500 py-1 px-3 text-white rounded-full">
                <AiOutlinePlus />
                <Link to={"/shiftsCreate"}>Create new shift</Link>
              </div>
            </div>

            <Content />
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Home;
    