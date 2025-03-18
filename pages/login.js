import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/Login_Signup.module.css";

import { Geist, Geist_Mono } from "next/font/google";
import Homestyles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function check() {
      try {
        const res = await fetch("/api/protected");
        const data = await res.json();
        if (res.status === 200) {
          console.log(data.message);
          router.push("/dashboard");
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

  const loginHandler = async (event) => {
    event.preventDefault();

    const loginData = { email: email, password: password };
    const res = await fetch("api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    setResponseMessage(data.message);
    if (res.status === 200 && data.token) {
      router.push("/dashboard");
    } else {
      console.error("Login Failed: ", data.message);
    }
  };

  return (
    <div
      className={`${styles.container} ${styles.page} ${geistSans.variable} ${geistMono.variable}`}
    >
      <nav className={styles.nav}>
        <h1 className={styles.title}>TODO APP</h1>
      </nav>
      <form className={styles.form} onSubmit={loginHandler}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            required
            value={email}
            placeholder="username@example.com"
            onChange={(e) => setEmail(e.target.value.trim())}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.input}
            required
            value={password}
            placeholder="xxxxxxxxx"
            onChange={(e) => setPassword(e.target.value.trim())}
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
        {responseMessage && (
          <p className={styles.responseMessage}>{responseMessage}</p>
        )}
        <p className={styles.links}>
          New here?{" "}
          <Link className={styles.link} href="/signup">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
