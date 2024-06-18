import Link from "next/link";
import React from "react";
import courseData from "../data/music_courses.json"

export default function FeaturedCourses() {
          
  return (
    <div className="py-12 bg-gray-950">
      <div className="text-center">
        <h1 className="text-base text-teal-500 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h1>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            test
        </div>
        </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"} className="px-4 py-2 ">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              View All courses
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
