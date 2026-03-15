"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Task {
  id: number;
  title: string;
}

export default function Home() {
  
  const API = process.env.NEXT_PUBLIC_API_URL + "/tasks";

  const [tasks, setTasks] = useState<Task[]>([]); 
  const [title, setTitle] = useState("");

  // obtener tareas
  const fetchTasks = async () => {
    try {
      const res = await axios.get(API);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // crear tarea
  const createTask = async () => {
    if (!title.trim()) return; 

    try {
      await axios.post(API, { title });
      setTitle(""); 
      fetchTasks(); 
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  // eliminar tarea
  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`${API}/${id}`); 
      fetchTasks(); 
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans text-gray-900">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        
        {}
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8 border-b pb-4">
          Lista de tareas
        </h1>

        {}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 bg-gray-100 p-6 rounded-lg border border-gray-200">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-lg"
          />
          <button
            onClick={createTask}
            className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-150 shadow-sm text-lg flex-shrink-0"
          >
            Add Task
          </button>
        </div>

        {}
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-500 text-lg py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              No tasks yet. Add your first task above!
            </p>
          ) : (
            tasks.map((task: Task) => (
              <div
                key={task.id}
                className="flex items-center justify-between bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm hover:border-gray-300 transition duration-150"
              >
                {}
                <span className="text-lg text-gray-800 break-words flex-grow mr-4">
                  {task.title}
                </span>

                {}
                <button
                  onClick={() => deleteTask(task.id)}
                  className="px-4 py-1.5 bg-red-100 text-red-700 font-medium rounded-md hover:bg-red-200 transition duration-150 text-sm flex-shrink-0"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {}
        {tasks.length > 0 && (
          <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-600">
            Total tasks: <span className="font-semibold text-blue-700">{tasks.length}</span>
          </div>
        )}

      </div>
    </div>
  );
}