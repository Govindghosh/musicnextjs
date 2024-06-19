"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolVContent = [
  {
    title: "Unleash Your Musical Potential",
    description:
      "Join our music school to explore and enhance your musical abilities. We offer a variety of classes for all ages and skill levels, from beginner to advanced.",       
    },
  {
    title: "Master the Art of Music",
    description:
      "Our experienced instructors provide personalized lessons to help you master your chosen instrument. Whether you're interested in piano, guitar, or violin, we have the expertise to guide you.",
      musicSchoolVContent: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Master the Art of Music
        </div>
      ),
    },
  {
    title: "Discover the Joy of Music",
    description:
      "Experience the joy of creating music at our school. We offer engaging and interactive classes designed to foster a love for music in a supportive and inspiring environment.",
  },
  {
    title: "Your Journey to Musical Excellence",
    description:
      "Start your journey to musical excellence with us. Our comprehensive programs cover theory, practice, and performance, ensuring a well-rounded musical education.",
  },
];

export default function WhyChooeseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolVContent} />
    </div>
  );
}
