import React from "react";
import {
  PhoneIncoming,
  CalendarPlus,
  Check,
  SignalHigh,
  ArrowDownRight,
} from "lucide-react";

export default function BestAgency() {
  return (
    <section className="bg-gradient-to-br from-[var(--color-background)] via-black to-black md:py-20 py-10">
      {/* ===== TOP CONTENT ===== */}
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center lg:mb-24 mb-15">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-8 text-[var(--color-gradient)]">
              <span className="text-sm tracking-widest uppercase">
                About Company
              </span>
              <ArrowDownRight className="arrow-bounce" />
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Best Creative & Modern Agency
            </h1>

            <div className="border-l-4 border-[var(--color-gradient)] pl-8 mb-10">
              <p className="text-gray-300 text-lg leading-relaxed items-center">
                Customer loyalty comes from fair pricing, quality work,
                originality, and honest business practices. Every day, thousands
                of businesses and individuals trust FBS for their printing,
                signage, and marketing needs. We take pride in delivering
                reliable, high-quality solutions while always respecting our
                customers' time and money.
              </p>
            </div>

            <button className="group flex items-center gap-3 px-8 py-4 border-2 border-[var(--color-gradient)] text-[var(--color-gradient)] rounded-full">
              <span>See all projects</span>
              <ArrowDownRight className="arrow-bounce" />
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/images/about/HexaShap.png"
              alt="Creative Shape"
              className="w-130  object-contain"
            />
          </div>
        </div>
      </div>

      {/* ===== BOTTOM FEATURES ===== */}
      <div className="containers ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4 bg-[var(--color-graybg)] py-10 rounded-lg justify-center">
            <PhoneIncoming className="w-6 h-6 text-[var(--color-gradient)]" />
            <span className="text-white hover:text-[var(--color-gradient)] text-lg">
              Book a call
            </span>
          </div>

          <div className="flex items-center gap-4 bg-[var(--color-graybg)] p-10 rounded-lg justify-center">
            <CalendarPlus className="w-6 h-6 text-[var(--color-gradient)]" />
            <span className="text-white hover:text-[var(--color-gradient)] text-lg">
              Choose service
            </span>
          </div>

          <div className="flex items-center gap-4 bg-[var(--color-graybg)] p-10 rounded-lg justify-center">
            <Check className="w-6 h-6 text-[var(--color-gradient)]" />
            <span className="text-white hover:text-[var(--color-gradient)] text-lg">
              Confirm Service
            </span>
          </div>

          <div className="flex items-center gap-4 bg-[var(--color-graybg)] p-10 rounded-lg justify-center">
            <SignalHigh className="w-6 h-6 text-[var(--color-gradient)]" />
            <span className="text-white hover:text-[var(--color-gradient)] text-lg">
              Boost your Sales
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
