import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";
import React from "react";
import { Button } from "./ui/button";
import { HoverBorderGradient } from "./ui/hover-border";

export default function ProductImage() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <div className="flex-col sm:h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center "
              >
                <Image src="/logo.svg" alt="logo" width={30} height={30} />
                <span className="text-sm">Avlaible in Beta</span>
              </HoverBorderGradient>
              {/* Radial gradient for the container to give a faded look */}
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
              <p className="text-4xl text-center sm:text-5xl md:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                Report, Review, Plan <br /> and Share.
              </p>
              <h1 className="font-semibold text-xs sm:text-md md:text-xl text-center mt-[-10px] sm:mt-2">
                Permitech is the collaborative workspace for safer, compliant
                and efficient industrial operations.
              </h1>
              <Button className="bg-blue-500 text-white sm:mt-8 mb-5 sm:text-lg sm:p-5 mt-3">
                Get Started
              </Button>
            </div>
          </>
        }
      >
        <Image
          src="/something.webp"
          alt="hero"
          height={820}
          width={1400}
          className="mx-auto object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
