import React from "react";
import Container from "../../components/Container/Container";
import { AiOutlinePlus } from "react-icons/ai";

const Home = () => {
  return (
    <div className="mt-10">
      <Container>
        <main>
          <div>
            <div className="flex justify-end">
              <div className="flex items-center gap-2 bg-primary py-1 px-3 text-light rounded-full">
                <AiOutlinePlus />
                <h2>Create new shift</h2>
              </div>
            </div>

            
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Home;
