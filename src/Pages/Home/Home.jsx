import React from "react";
import Container from "../../components/Container/Container";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-10">
      <Container>
        <main>
          <div>
            <div className="flex justify-end">
              <div className="flex items-center gap-2 bg-primary py-1 px-3 text-light rounded-full">
                <AiOutlinePlus />
                <Link to={"/shiftsCreate"}>Create new shift</Link>
              </div>
            </div>

            
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Home;
