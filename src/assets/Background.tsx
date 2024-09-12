"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { Button } from "@material-tailwind/react";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 mt-6" // Added mt-6 for spacing above the image
      >
        {/* Image with Border */}
        <img
          src="/aaryanPhoto.jpg" // Path to your image
          alt="Aaryan Joharapurkar"
          className="h-60 w-60 rounded-xl border-4 border-white mb-4" // Larger size, rounded, and a border
        />

        <div className="flex flex-wrap items-baseline gap-2 text-center whitespace-nowrap">
          {" "}
          <div className="text-3xl md:text-7xl sm: text-2xl font-bold dark:text-white">
            Aaryan Joharapurkar
          </div>
          <div className="text-sm md:text-lg font-light dark:text-neutral-400">
            (he/him)
          </div>
        </div>

        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Student Interested as Technical PM at Bell
        </div>
        <div className="bg-black dark:bg-gray-300 rounded-lg w-fit text-white dark:text-black px-4 py-2">
          Software Engineering with Ivey A.E.O
        </div>

        {/*Mail Icon with Text */}
        <a
          href="mailto:aaryanj@outlook.com"
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2"
        >
          <svg
            className="h-9 w-9 text-black dark:text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
          <span className="text-lg dark:text-white">aaryanj@outlook.com</span>
        </a>

        {/*Telephone Icon with Text */}
        <a
          href="tel:+16479161230"
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2"
        >
          <svg
            className="h-9 w-9 text-black dark:text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
          <span className="text-lg dark:text-white">+1 647-916-1230</span>
        </a>

        {/*LinkedIn Icon with Text */}
        <a
          href="https://linkedin.com/in/aaryanj"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2"
        >
          <svg
            className="h-9 w-9 text-black dark:text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <span className="text-lg dark:text-white">
            linkedin.com/in/aaryanj
          </span>
        </a>

        <a
          href="/aaryanCard.vcf"
          download="AaryanJoharapurkar.vcf"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Save Contact!
        </a>
      </motion.div>
    </AuroraBackground>
  );
}
