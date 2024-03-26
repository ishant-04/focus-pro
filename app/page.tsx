
import { PrismaClient } from "@prisma/client";

import AddTodo from "@/components/shared/AddTodo";

import Todo from "@/components/shared/Todo";

import SplitPane, { Pane } from 'split-pane-react';

const prisma = new PrismaClient();
async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}
const Home = async () => {
  const data = await getData();
  return (

  <>
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-6xl font-extrabold uppercase text-orange-700 "> 
        Focus Pro
      </span>
      
    </div>

    
        
    <div className="flex justify-center flex-row items-center w-3/5 ">  
    <div className="flex justify-center flex-col items-center w-full ">
      <h1 className=" text-3xl font-extrabold mb-5">
        
        <span className="text-orange-700 ml-2">
        Todo List
        </span>
      </h1>
        <AddTodo />
        <div className=" flex flex-col gap-5 items-center justify-center mt-10 w-11/12">
          {data.map((todo, id) => (
            <div className="w-full" key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
    </div>

    
    </div>
    
    
  </>         
  );
};

export default Home;