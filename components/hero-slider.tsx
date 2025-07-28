"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface SlideData {
  id: number
  image: string
  title: string
  subtitle: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton: {
    text: string
    href: string
  }
  badge: string
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/images/slide-1.webp",
    title: "Discover the yield before the brick.",
    subtitle: "PROFESSIONAL, RELIABLE, AND BUILT TO LAST",
    description:
      "Unlocking the potential of real estate through precision and expertise. Our quantity surveying services empower you with accurate cost assessments and project evaluations. Experience the confidence of informed decisions in the dynamic world of real estate development.",
    primaryButton: {
      text: "Schedule Consultation",
      href: "/contact",
    },
    secondaryButton: {
      text: "View Portfolio",
      href: "/portfolio",
    },
    badge: "PROFESSIONAL, RELIABLE, AND BUILT TO LAST",
  },
  {
    id: 2,
    image: "/images/slide-2.webp",
    title: "Quantify before committing",
    subtitle: "PRECISION IN EVERY PROJECT",
    description:
      "Our comprehensive analysis and evaluation services provide you with the vital data to make informed decisions. Unlock the power of precise quantification, ensuring successful outcomes for your projects. Embrace confidence in every commitment.",
    primaryButton: {
      text: "Get Cost Estimate",
      href: "/services",
    },
    secondaryButton: {
      text: "Learn More",
      href: "/services",
    },
    badge: "CERTIFIED QUANTITY SURVEYORS",
  },
  {
    id: 3,
    image: "/images/slide-3.webp",
    title: "Connecting people and places",
    subtitle: "DATA-DRIVEN INSIGHTS FOR SUCCESS",
    description:
      "Our comprehensive analysis and evaluation services provide you with the vital data to make informed decisions. Unlock the power of precise quantification, ensuring successful outcomes for your projects. Embrace confidence in every commitment.",
    primaryButton: {
      text: "View Research",
      href: "/store",
    },
    secondaryButton: {
      text: "Contact Analysis",
      href: "/contact",
    },
    badge: "MARKET RESEARCH EXPERTS",
  }
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [currentSlide, isPlaying])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div
              className={`bg-white/0 transition-all duration-500 ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <div className="flex flex-row gap-2 mb-2">
                <span className="w-1 h-1 bg-brand-primary/30 flex my-auto"></span>
                <p className="text-white/80 font-semibold text-xs uppercase my-auto tracking-widest">{currentSlideData.badge}</p>
              </div>
              <h1 className="text-4xl md:text-7xl capitalize font-bold text-brand-primary mb-4 leading-[1.1]">
                {currentSlideData.title}
              </h1>
              <p className="text-white text-base mb-4">{currentSlideData.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={currentSlideData.primaryButton.href}>
                  <Button variant={"default"}>
                    {currentSlideData.primaryButton.text}
                  </Button>
                </Link>
                <Link href={currentSlideData.secondaryButton.href}>
                  <Button
                    variant="outline"
                  >
                    {currentSlideData.secondaryButton.text}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-6 bg-white/90 backdrop-blur-sm rounded-full px-6 py-4 shadow-lg">
          {/* Previous Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            disabled={isTransitioning}
            className="h-10 w-10 rounded-full bg-white/80 hover:bg-white shadow-md disabled:opacity-50"
          >
            <ChevronLeft className="h-5 w-5 text-contrast-dark" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-brand-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
                } disabled:opacity-50`}
              />
            ))}
          </div>

          {/* Next Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            disabled={isTransitioning}
            className="h-10 w-10 rounded-full bg-white/80 hover:bg-white shadow-md disabled:opacity-50"
          >
            <ChevronRight className="h-5 w-5 text-contrast-dark" />
          </Button>

          {/* Play/Pause Button */}
          <div className="w-px h-6 bg-gray-300 mx-2"></div>
          <Button
            variant="ghost"
            size="sm"
            onClick={togglePlayPause}
            className="h-10 w-10 rounded-full bg-white/80 hover:bg-white shadow-md"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 text-contrast-dark" />
            ) : (
              <Play className="h-4 w-4 text-contrast-dark" />
            )}
          </Button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          <span className="text-sm font-medium text-contrast-dark">
            {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="h-1 bg-white/30">
          <div
            className="h-full bg-brand-primary transition-all duration-300"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}
