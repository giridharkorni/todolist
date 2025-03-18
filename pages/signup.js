import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/Login_Signup.module.css";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [countdown, setCountdown] = useState(null);

  const router = useRouter();

  const validatePassword = (password) => {
    return (
      password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)
    );
  };

  const signupHandler = async (event) => {
    event.preventDefault();

    if (!validatePassword(password)) {
      setResponseMessage(
        "Password must be at least 8 characters long, include an uppercase letter and a number."
      );
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setResponseMessage("Enter a valid 10-digit mobile number.");
      return;
    }

    const signUpData = {
      fullName: fullName,
      email: email,
      mobile: mobile,
      password: password,
    };

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpData),
    });

    const data = await res.json();
    setResponseMessage(data.message);
    if (res.status === 201) {
      setFullName("");
      setEmail("");
      setMobile("");
      setPassword("");
      setCountdown(3);
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(interval);
        router.push("/login");
      }, 3000);
    }
  };

  return (
    <div
      className={`${styles.container} ${styles.page} ${geistSans.variable} ${geistMono.variable}`}
    >
      <nav className={styles.nav}>
        <h1 className={styles.title}>TODO APP</h1>
      </nav>
      <form className={styles.form} onSubmit={signupHandler}>
        <h2 className={styles.title}>Signup</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="fname" className={styles.label}>
            Full Name
          </label>
          <input
            type="text"
            id="fname"
            className={styles.input}
            required
            value={fullName}
            placeholder="John Doe"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            required
            placeholder="johndoe@nextjs.com"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="mobile" className={styles.label}>
            Mobile
          </label>
          <input
            type="number"
            id="mobile"
            className={styles.input}
            required
            placeholder="9897675422"
            value={mobile}
            onChange={(e) => setMobile(e.target.value.trim())}
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
            placeholder="xxxxxxxxx"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
          />
        </div>
        <button type="submit" className={styles.button}>
          Signup
        </button>
        {responseMessage && (
          <p className={styles.responseMessage}>{responseMessage}</p>
        )}
        {countdown !== null && (
          <p className={styles.countdown}>Redirecting in {countdown}...</p>
        )}
        {(!responseMessage || countdown === null) && (
          <p className={styles.links}>
            Already a User ?{" "}
            <Link className={styles.link} href="/login">
              Login
            </Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default Signup;
