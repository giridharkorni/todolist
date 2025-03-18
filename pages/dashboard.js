import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import formStyles from "@/styles/Login_Signup.module.css";
import Modal from "./components/Modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({ id: null, task: "" });

  useEffect(() => {
    async function check() {
      try {
        const res = await fetch("/api/protected");
        const data = await res.json();
        if (res.status === 200) {
          console.log(data.message);
          setUser(data.user);
        } else {
          console.log("Not Authorised User, Please Log in");
          router.push("/login");
        }
      } catch (err) {
        console.log("An Error Occured", err);
      }
    }
    check();
  }, []);

  useEffect(() => {
    if (user?.email) {
      fetchTasks();
    }
  }, [user]);

  async function logoutHandler() {
    try {
      const res = await fetch("/api/logout");
      const data = await res.json();
      console.log(data.message);
      router.push("/login");
    } catch (err) {
      console.log("An Error Occured", err.message);
    }
  }

  async function fetchTasks() {
    if (!user?.email) {
      console.log("User email is not set yet.");
      return;
    }
    try {
      const res = await fetch("/api/getTodos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_email: user.email }),
      });
      const data = await res.json();

      if (res.status === 200) {
        setTodos(data.rows || []);
        console.log("Tasks fetched successfully", data.rows);
      } else console.log("Failed to fetch tasks", data.message);
    } catch (err) {
      console.log("Error fetching tasks:", err);
    }
  }

  async function addTask(event) {
    event.preventDefault();
    const taskData = { task: task, user_email: user.email };
    try {
      const res = await fetch("/api/addTodo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskData),
      });

      if (res.status === 201) {
        setTask("");
        fetchTasks();
      }
    } catch (err) {
      console.log("Error Adding task..", err);
    }
  }

  async function deleteTask(id) {
    try {
      const res = await fetch(`/api/deleteTodo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.status === 200) {
        fetchTasks();
      }
    } catch (err) {
      console.log("Error deleting task:", err);
    }
  }

  async function toggleTaskCompletion(id, isCompleted) {
    try {
      await fetch(`/api/updateTodo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, is_completed: !isCompleted }),
      });
      fetchTasks();
    } catch (err) {
      console.log("Error updating task:", err);
    }
  }

  function openEditModal(id, task) {
    setCurrentTask({ id, task });
    setIsModalOpen(true);
  }

  async function handleSave(updatedTask) {
    if (!updatedTask.trim()) return;
    try {
      await fetch(`/api/updateTodo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: currentTask.id, task: updatedTask }),
      });
      fetchTasks();
      setIsModalOpen(false);
    } catch (err) {
      console.log("Error updating task:", err);
    }
  }

  // async function updateTask(id, updatedTask) {
  //   try {
  //     await fetch(`/api/updateTodo`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ id, task: updatedTask }),
  //     });
  //     fetchTasks();
  //   } catch (err) {
  //     console.log("Error updating task:", err);
  //   }
  // }

  return (
    <div
      className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
    >
      <div className={styles.authButtons}>
        <button
          className={`${styles.button} ${formStyles.logout}`}
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
      <main className={styles.main}>
        <header className={styles.header}>
          <p className={`${styles.description} ${styles.info} `}>
            Welcome <span className={styles.name}>{user.email}</span>
          </p>
          <h1 className={styles.title}>Todo, Whats on your Mind?</h1>
          <form className={styles.form} onSubmit={addTask}>
            <div style={{ width: "75%" }} className={formStyles.inputGroup}>
              <input
                type="text"
                placeholder="Whats on your mind?"
                value={task}
                required
                style={{ width: "100%" }}
                className={formStyles.input}
                autoFocus
                onChange={(e) => {
                  setTask(e.target.value);
                }}
              />
            </div>
            <div style={{ width: "25%" }} className={formStyles.inputGroup}>
              <button className={styles.button} type="submit">
                Add Task
              </button>
            </div>
          </form>
          <div className={styles.todoList}>
            {todos.length > 0 ? (
              todos.map((todo) => (
                <div key={todo.id} className={styles.todoItem}>
                  <p
                    className={`${styles.taskText} ${
                      todo.is_completed ? styles.completed : ""
                    }`}
                    onClick={() =>
                      toggleTaskCompletion(todo.id, todo.is_completed)
                    }
                  >
                    {todo.task}
                  </p>
                  <button
                    onClick={() => openEditModal(todo.id, todo.task)}
                    className={styles.edit}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.delete}
                    onClick={() => deleteTask(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p className={styles.description}>No Todos Yet, Add Some?</p>
            )}

            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSave={handleSave}
              initialValue={currentTask.task}
            />
          </div>
        </header>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
