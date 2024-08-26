import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { useSelector } from "react-redux";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);

  const handleClick = () => {
    setShowMenu((prev) => !prev);
  };

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Community",
      slug: "https://social-sparrow.netlify.app",
      active: authStatus,
    },
    {
      name: "Quiz",
      slug: "",
      active: authStatus,
    },
    {
      name: "Podcasts",
      slug: "/podcasts",
      active: authStatus,
    },
    {
      name: "Blog",
      slug: "/blog",
      active: authStatus,
    },
    {
      name: "Pricing",
      slug: "/pricing",
      active: authStatus,
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      const header = document.querySelector("header");

      if (scrollPosition >= 72) {
        header.style.backgroundColor = "#1B181F";
        document.querySelectorAll("#nav-links .nav-link").forEach((val) => {
          val.style.backgroundColor = "#FFE0C3";
          val.style.color = "black";

          val.addEventListener("mouseenter", () => {
            val.style.backgroundColor = "#1B181F";
            val.style.border = "2px solid #FFE0C3";
            val.style.color = "#FFE0C3";
          });
          val.addEventListener("mouseleave", () => {
            val.style.backgroundColor = "#FFE0C3";
            val.style.border = "2px solid #1B181F";
            val.style.color = "#1B181F";
          });
        });
      } else {
        header.style.backgroundColor = "#FFE0C3";
        document.querySelectorAll("#nav-links .nav-link").forEach((val) => {
          val.style.backgroundColor = "black";
          val.style.color = "#FFE0C3";
          val.addEventListener("mouseenter", () => {
            val.style.backgroundColor = "#FFE0C3";
            val.style.border = "2px solid black";
            val.style.color = "black";
          });
          val.addEventListener("mouseleave", () => {
            val.style.backgroundColor = "black";
            val.style.border = "2px solid black";
            val.style.color = "#FFE0C3";
          });
        });
      }
    });
  }, []);

  useEffect(() => {
    // console.log(authStatus);
  }, [authStatus]);

  return (
    <header className="flex justify-between h-20 items-center w-full py-1 px-10 fixed top-0 left-0 z-[100] transition-all duration-200 bg-[#FFE0C3]">
      <div className="div flex gap-1 items-center">
        <Logo />
      </div>
      <div className="div flex gap-2 md:gap-8 h-full items-center justify-center">
        <div id="nav-links" className="flex gap-2 items-center justify-center">
          {navItems.map(
            (item) =>
              item.active && (
                <Link
                  to={`${item.slug}`}
                  className="text-[#FFE0C3] bg-black rounded-full px-6 py-3 text-[10px] sm:[12px] md:text-[12px] lg:text-[12px] font-semibold hover:bg-[#FFE0C3] hover:border-2 hover:border-black hover:text-black nav-link"
                  key={item.name}
                  id={`${item.id}`}
                >
                  {item.name}
                </Link>
              )
          )}
        </div>

        {authStatus && (
          <div
            id="buttons"
            className="flex gap-2 justify-center items-center font-semibold"
          >
            <button
              id="logout"
              to="/logout"
              className="text-[#FFE0C3] bg-black rounded-full px-6 py-3 hover:border-2 hover:border-black hover:bg-[#ffe0c3] text-[10px] sm:[12px] md:text-[12px] lg:text-[12px] hover:text-black text-center -translate-x-6 border-2 border-[#FFE0C3]"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
