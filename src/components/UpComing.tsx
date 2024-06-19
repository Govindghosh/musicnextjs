"use client"
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link';


export default function UpComing() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={projects.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export const projects= [{
    "title": "Virtual Music Recital",
    "description": "Join us for a virtual music recital featuring performances by our talented students. Enjoy a diverse range of musical pieces from the comfort of your home.",
    "link": "<Link href='https://example.com/virtual-recital' target='_blank'>Learn More</Link>"
},
{
    "title": "Summer Music Camp",
    "description": "Enroll in our summer music camp where students can immerse themselves in intensive music training, workshops, and fun activities. Perfect for young musicians looking to enhance their skills.",
    "link": "<Link href='https://example.com/summer-camp' target='_blank'>Register Now</Link>"
},
{
    "title": "Masterclass Series",
    "description": "Don't miss our exclusive masterclass series with renowned musicians and educators. Gain valuable insights and techniques to elevate your musical abilities.",
    "link": "<Link href='https://example.com/masterclass' target='_blank'>Sign Up</Link>"
},
{
    "title": "New Course: Music Production",
    "description": "We are excited to announce a new course in music production. Learn the art of creating and recording music using the latest technology and software.",
    "link": "<Link href='https://example.com/music-production' target='_blank'>Discover More</Link>"
},
{
    "title": "Masterclass Series",
    "description": "Don't miss our exclusive masterclass series with renowned musicians and educators. Gain valuable insights and techniques to elevate your musical abilities.",
    "link": "<Link href='https://example.com/masterclass' target='_blank'>Sign Up</Link>"
},
{
    "title": "New Course: Music Production",
    "description": "We are excited to announce a new course in music production. Learn the art of creating and recording music using the latest technology and software.",
    "link": "<Link href='https://example.com/music-production' target='_blank'>Discover More</Link>"
}
]