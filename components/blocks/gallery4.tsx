"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  role?: string; // added for team use case
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const Gallery4 = ({
  title = "Case Studies",
  description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
  items = [],
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 flex flex-col md:flex-row items-end justify-between md:mb-16 lg:mb-20 gap-8">
          <div className="flex flex-col gap-4">
            <div className="inline-block px-4 py-1 border border-accent-gold text-accent-gold font-semibold tracking-widest uppercase mb-2 text-sm w-fit">
              Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-dark">
              {title}
            </h2>
            <p className="max-w-xl text-lg text-muted font-light mt-4">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto border-border text-primary-dark hover:bg-primary-dark hover:text-white"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto border-border text-primary-dark hover:bg-primary-dark hover:text-white"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 md:ml-12 lg:ml-[max(8rem,calc(50vw-600px))] pr-[max(2rem,calc(50vw-600px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 md:pl-8 max-w-[85vw] sm:max-w-[340px] lg:max-w-[380px]"
              >
                <div className="group relative h-full min-h-[32rem] max-w-full overflow-hidden rounded-xl bg-cream-dark">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="absolute h-full w-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  {/* Elegant dark gradient overlay for text readability */}
                  <div className="absolute inset-0 h-full bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent mix-blend-multiply opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                  
                  {/* Decorative frame */}
                  <div className="absolute inset-0 border border-accent-gold/0 group-hover:border-accent-gold/50 transition-colors duration-500 m-4 rounded-lg pointer-events-none z-10"></div>
                  
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 md:p-8 text-white z-20">
                    <div className="text-xs font-semibold text-accent-gold uppercase tracking-widest mb-2">
                      {item.role}
                    </div>
                    <div className="mb-2 text-2xl font-playfair font-bold">
                      {item.title}
                    </div>
                    <div className="mb-6 font-light text-white/80 line-clamp-3 text-sm leading-relaxed">
                      {item.description}
                    </div>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-white hover:text-accent-gold transition-colors">
                      Contact via Email{" "}
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-12 flex justify-center gap-3">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-8 bg-accent-gold" : "w-2.5 bg-border hover:bg-muted"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
