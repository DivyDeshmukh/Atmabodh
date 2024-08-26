import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Carousel() {
  //   const [carouselItems, setCarouselItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselWrapperRef = useRef(null);

  const ads = [
    {
      id: "1",
      name: "T-Shirt",
      title: "Advertisement",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnzqUBX0r39croqzwzEBmg0Ipuz4Zp64qztg&s",
      price: "13$",
      rating: "3.4",
      reviews: "afafafafaf",
      category: "Clothing",
    },
    {
      id: "2",
      name: "Sweatshirt",
      title: "Advertisement",
      image:
        "https://st3.depositphotos.com/1177973/12669/i/450/depositphotos_126693854-stock-photo-set-of-body-care-products.jpg",
      price: "13$",
      rating: "3.4",
      reviews: "afafafafaf",
      category: "Earpads",
    },
    {
      id: "3",
      name: "Jeans",
      title: "Advertisement",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuzdq4rGJQzUZwAEXGULjKyhn77eI_oCeaw&s",
      price: "13$",
      rating: "3.4",
      reviews: "afafafafaf",
      category: "Headphones",
    },
    {
      id: "4",
      name: "Hat",
      title: "Advertisement",
      image:
        "https://thumbs.dreamstime.com/b/open-refrigerator-many-different-products-closeup-132766105.jpg",
      price: "13$",
      rating: "3.4",
      reviews: "afafafafaf",
      category: "Accessories",
    },
    {
      id: "5",
      name: "Shoes",
      title: "Advertisement",
      image:
        "https://st3.depositphotos.com/9880800/13987/i/450/depositphotos_139877122-stock-photo-woman-preparing-salad.jpg",
      price: "13$",
      rating: "3.4",
      reviews: "afafafafaf",
      category: "Electronics",
    },
    {
      id: "6",
      name: "Bag",
      title: "Advertisement",
      image:
        "https://t4.ftcdn.net/jpg/01/13/80/37/360_F_113803790_GA5ymemnlMH5x1K5lpPlssfAQdMwHvjN.jpg",
      price: "13$",
      rating: "3.4",
      reviews: "afafafafaf",
      category: "Stationary",
    },
  ];

  const products = [
    "https://www.youtube.com/embed/whRfBwwYoYE?si=Ece5jjyXLuow6h5Z",
    "https://www.youtube.com/embed/H5gTOyLDqvE",
    "https://www.youtube.com/embed/x2ETnPzDhDI",
    "https://www.youtube.com/embed/x2ETnPzDhDI",
    "https://www.youtube.com/embed/x2ETnPzDhDI",
    "https://www.youtube.com/embed/x2ETnPzDhDI",
    "https://www.youtube.com/embed/x2ETnPzDhDI",
  ];

  useEffect(() => {
    const items = [...products];
    let i = 0;
    for (let j = 0; j < products.length; j++) {
      if ((j + 1) % 4 === 0) {
        items.splice(j + 1, 0, ads[i]);
        i++;
      }
    }
    // setCarouselItems(items);
  }, [products]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     next();
  //   }, 2200);
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < products.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="relative max-w-3xl md:max-w-5xl mx-auto overflow-hidden h-[250px] md:h-[460px] mt-32">
      <div
        ref={carouselWrapperRef}
        className="flex transition-transform ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="flex h-full">
          {products.map((link, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex items-center justify-center h-full"
            >
              <iframe
                src={link}
                title={`iframe-${index}`}
                className="w-full h-full border-none"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-black bg-opacity-50 text-white text-2xl p-2 cursor-pointer z-10"
        onClick={prev}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-black bg-opacity-50 text-white text-2xl p-2 cursor-pointer z-10"
        onClick={next}
      >
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;
