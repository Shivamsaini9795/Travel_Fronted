import { useEffect } from "react";

export default function DashboardLayout() {
  useEffect(() => {
    const body = document.querySelector("body");
    const modeToggle = document.querySelector(".mode-toggle");
    const sidebar = document.querySelector("nav");
    const sidebarToggle = document.querySelector(".sidebar-toggle");

    // ---- Load Saved Mode ----
    let getMode = localStorage.getItem("mode");
    if (getMode === "dark") {
      body.classList.add("dark");
    }

    // ---- Load Sidebar Status ----
    let getStatus = localStorage.getItem("status");
    if (getStatus === "close") {
      sidebar.classList.add("close");
    }

    // ---- Mode Toggle ----
    if (modeToggle) {
      modeToggle.addEventListener("click", () => {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
          localStorage.setItem("mode", "dark");
        } else {
          localStorage.setItem("mode", "light");
        }
      });
    }

    // ---- Sidebar Toggle ----
    if (sidebarToggle) {
      sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");

        if (sidebar.classList.contains("close")) {
          localStorage.setItem("status", "close");
        } else {
          localStorage.setItem("status", "open");
        }
      });
    }
  }, []);

  return (
    <>
      {/* Yaha aapka HTML/JSX Layout ayega */}
    </>
  );
}
