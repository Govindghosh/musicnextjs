"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function TestimonialCard() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  )
}

const testimonials =[
    {
        "quote": "Music can change the world because it can change people.",
        "name": "Bono",
        "title": "Lead Vocalist of U2"
    },
    {
        "quote": "Without music, life would be a mistake.",
        "name": "Friedrich Nietzsche",
        "title": "Philosopher"
    },
    {
        "quote": "Music is the universal language of mankind.",
        "name": "Henry Wadsworth Longfellow",
        "title": "Poet"
    },
    {
        "quote": "One good thing about music, when it hits you, you feel no pain.",
        "name": "Bob Marley",
        "title": "Musician"
    }
]
