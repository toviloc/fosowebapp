import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Post } from '@/types/post';
import posts from '@/app/mockData/posts'
import { Card } from '../Card/Card';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [postData, setPostData] = useState<Post[] | []>([])

  const itemsPerSlide = 1;
  const totalSlides = Math.ceil(postData.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  console.log(currentIndex)

  useEffect(() => {
    const data = posts as Post[]
    setPostData(data)
  }, []);

  return (
    <div className="relative flex overflow-hidden gap-4">
      {
        postData.map((post, index) =>
          <motion.div
            key={index}
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Card className='w-[400px]' id={post.id} imgUrl={post.card.imgUrl} tag={post.card.tag} title={post.card.title} date={post.card.date} readingTime={post.card.readingTime} linkText={post.card.linkText} linkUrl={post.card.linkUrl} />
          </motion.div>
        )
      }
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-400 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-400 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        <ChevronRight size={24} />
      </button>

      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {postData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
          ></div>
        ))}
      </div> */}
    </div >
  )
}
