/* eslint-disable @next/next/no-img-element */
import Logo from "@/components/logo";
import DesktopExtentions from "@/components/pages/home/desktop-extensions";
import DownloadButton from "@/components/pages/home/download-button";
import FeatureCard from "@/components/pages/home/feature-card";
import Footer from "@/components/pages/home/footer";
import PhoneExtentions from "@/components/pages/home/phone-extentions";
import ReviewCard from "@/components/pages/home/review-card";
import {
  BarChart2Icon,
  CornerRightUpIcon,
  DownloadIcon,
  SearchIcon,
  SlidersVerticalIcon,
} from "lucide-react";

export default function Home() {
  return (
    <main className="text-white scrollbar">
      <div className="relative">
        <div className="absolute left-0 top-0 z-10 hidden h-full w-full bg-[url('/images/plus.svg')] opacity-50 md:block">
          <svg
            className="h-full w-full"
            viewBox="0 0 1728 683"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="1728"
              height="770"
              transform="translate(0 -43)"
              fill="url(#paint0_radial_21179_17721)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_21179_17721"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(289.374 192) rotate(27.9911) scale(662.641 817.276)"
              >
                <stop stop-color="#010A12" stop-opacity="0" />
                <stop offset="1" stop-color="#010A12" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="container relative z-50">
          <header className="flex items-center justify-between py-5">
            <div className="flex items-center justify-center gap-8">
              <Logo />

              <div className="hidden items-center justify-between rounded bg-white/5 px-4 xl:flex">
                <SearchIcon className="size-5" />
                <input
                  type="text"
                  placeholder="Search docs"
                  className="w-48 bg-transparent py-3 pl-3 focus:outline-none focus:ring-0"
                />
                <kbd className="rounded-md border-2 border-white/10 px-2 py-0.5 text-xs font-medium text-neutral-400">
                  CTRL + K
                </kbd>
              </div>
            </div>

            <div className="flex">
              <div className="mr-8 hidden items-center justify-between gap-5 md:flex">
                <a href="#">Docs</a>
                <a href="#">Updates</a>
                <a href="#">Blog</a>
                <a href="#">Extentions</a>
                <a href="#">FAQ</a>
              </div>
              <a
                href=""
                className="flex h-10 items-center justify-center gap-4 rounded bg-accent px-5"
              >
                <DownloadIcon className="size-5" />
                Download
              </a>
            </div>
          </header>

          {/* Hero */}
          <section className="grid grid-cols-12 items-center md:pb-16 md:pt-12 xl:pb-24 xl:pt-16">
            <div className="relative col-span-full from-zinc-500 via-blue-300 to-blue-100 pb-6 pt-4 shadow md:col-span-3 md:hidden">
              <img src="/images/hero-editor-flat.png" alt="" />
            </div>

            <div className="col-span-full md:col-span-6">
              <h1 className="text-4xl font-bold leading-tight 2xl:text-6xl">
                The most-used code editor on the planet.
              </h1>

              <p className="pt-5 text-xl text-white/60">
                Free. Built on open source. Runs everywhere.
              </p>

              <div className="pt-5 xl:pt-10">
                <DownloadButton />
                <p className="pt-4 text-white opacity-60">
                  By using VS Code, you agree to its{"  "}
                  <a className="text-accent" href="#">
                    license and privacy statement
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="relative col-span-6 hidden from-zinc-500 via-blue-300 to-blue-100 md:block md:pl-6">
              <img src="/images/hero-editor.png" alt="" />
              <img
                className="absolute -bottom-10 right-0"
                src="/images/hero-copilot.png"
                alt=""
              />
            </div>
          </section>
        </div>
      </div>
      <div className="container">
        {/* Copilot */}
        <section className="my-6 grid grid-cols-1 rounded bg-[#0d1218] p-4 md:my-8 md:grid-cols-2 md:rounded-[30px] md:p-10 xl:my-12">
          <div className="md:max-w-[430px]">
            <div className="flex w-fit items-center gap-2 rounded-[30px] bg-[#161b21] px-4 py-1">
              <div className="size-1.5 rounded-full bg-accent"></div>
              <span className="text-xs uppercase md:text-sm">New</span>
            </div>

            <h2 className="font-semibomd pt-2.5 text-xl 2xl:text-4xl">
              GitHub Copilot ships with code
            </h2>
            <p className="pb-5 pt-5 text-white/80 md:pb-11">
              Debug code right from the editor. Launch or attach to your running
              apps and debug with break points, call stacks, and an interactive
              console.
            </p>

            <button className="rounded bg-[#20252a] px-5 py-2.5">
              Learn More
            </button>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute left-32 top-6 z-10 w-60 rounded-md bg-[#152441] p-2.5 text-xs/4">
              How do I build a container that separates child items by exactly
              20px in CSS?
            </div>

            <div className="absolute left-24 top-24 z-10 mr-4 pt-4">
              <div className="pb-1.5 text-xs text-white/60">Copilot</div>
              <div className="w-64 rounded-md bg-[#252d35] p-2.5">
                <p className="pb-4">
                  You can use Flexbox for this! Here’s the code:
                </p>
                <div>Code Editor</div>
              </div>
              <div className="pt-1.5 text-xs text-white/40">
                Copilot is typing...
              </div>
            </div>

            <img
              className="absolute -top-24 right-0"
              src="/images/copilot-ships.png"
              alt=""
            />
          </div>
        </section>

        {/* Maximize */}
        <section className="my-6 grid grid-cols-1 items-center gap-4 md:my-8 md:grid-cols-2 md:rounded-[30px] xl:my-12">
          <div className="col-span-1 hidden lg:block">
            <img src="/images/maximize-productivity.png" alt="" />
          </div>

          <div className="col-span-full lg:col-span-1">
            <div className="inline-block rounded-md bg-[#1b2025] p-2.5">
              <BarChart2Icon className="size-7" />
            </div>
            <h2 className="pt-2.5 text-xl font-semibold 2xl:text-4xl">
              Maximize productivity
            </h2>
            <p className="pt-5 text-white/60">
              Debug code right from the editor. Launch or attach to your running
              apps and debug with break points, call stacks, and an interactive
              console.
            </p>

            <div className="relative block before:absolute before:top-0 before:h-12 before:w-full before:bg-background/5 before:backdrop-blur-sm after:absolute after:bottom-0 after:h-32 after:w-full after:bg-background/5 after:backdrop-blur-sm lg:hidden">
              <img src="/images/maximize-flat.png" alt="" />
            </div>

            <div className="space-y-2.5 pt-6">
              <FeatureCard
                title="Meet IntelliSense"
                description="From deployments to tasks, work with your team every step of the way."
                link="#"
                active
              />
              <FeatureCard
                title="Embedded debugging"
                description="Debug code right from the editor. Launch or attach to your
                running apps and debug with break points, call stacks, and an
                interactive console."
                link="#"
              />
            </div>
          </div>
        </section>

        {/* Deployment */}
        <section className="my-6 grid grid-cols-1 items-center gap-4 md:my-8 md:grid-cols-2 md:rounded-[30px] xl:my-12">
          <div className="col-span-full lg:col-span-1">
            <div className="inline-block rounded-md bg-[#1b2025] p-2.5">
              <CornerRightUpIcon className="size-7" />
            </div>

            <h2 className="pt-2.5 text-xl font-semibold 2xl:text-4xl">
              Deployment is easy
            </h2>
            <p className="pt-5 text-white/60">
              Debug code right from the editor. Launch or attach to your running
              apps and debug with break points, call stacks, and an interactive
              console.
            </p>

            <img
              className="lg:hidden"
              src="/images/deployment-flat.png"
              alt=""
            />

            <div className="space-y-2.5 pt-6">
              <FeatureCard
                title="Meet IntelliSense"
                description="From deployments to tasks, work with your team every step of the way."
                link="#"
              />
              <FeatureCard
                title="Embedded debugging"
                description="Debug code right from the editor. Launch or attach to your
                running apps and debug with break points, call stacks, and an
                interactive console."
                link="#"
              />
            </div>
          </div>
          <div className="col-span-1 hidden lg:block">
            <img src="/images/easy-deployment.png" alt="" />
          </div>
        </section>

        {/* Customize */}
        <section className="grid grid-cols-1 items-center justify-center py-6 md:gap-16 xl:grid-cols-12 xl:py-12">
          <div className="hidden md:block xl:col-span-7">
            <DesktopExtentions />
          </div>

          <div className="xl:col-span-5">
            <div className="inline-block rounded-md bg-[#111213] p-2.5">
              <SlidersVerticalIcon className="size-7" />
            </div>

            <h2 className="pt-2.5 text-xl font-semibold 2xl:text-4xl">
              Customize all you want
            </h2>
            <p className="pt-5 text-white/60">
              Debug code right from the editor. Launch or attach to your running
              apps and debug with break points, call stacks, and an interactive
              console.
            </p>

            <div className="block w-full pt-6 md:hidden">
              <PhoneExtentions />
            </div>

            <div className="space-y-2.5 pt-6">
              <FeatureCard
                title="Over 7,000,000+ extensions"
                description="Working with Git and other SCM providers has never been easier. ."
                link="#"
              />
              <FeatureCard
                title="Choose your own theme"
                description="With Microsoft Azure you can deploy and host your React, Angular, Vue, Node, Python (and more!) sites."
                link="#"
              />
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16">
          <div className="text-center">
            <h1 className="text-xl font-semibold 2xl:text-4xl">
              Loved by developers of all shapes and sizes
            </h1>
            <p className="pt-5 text-white/60">(Yes, even Java developers)</p>
          </div>

          <div className="pt-16">
            <div className="relative grid grid-cols-1 gap-4 before:absolute before:h-28 before:w-full before:bg-gradient-to-t before:from-transparent before:to-background after:absolute after:bottom-0 after:h-28 after:w-full after:bg-gradient-to-b after:from-transparent after:to-background xl:grid-cols-3 xl:gap-7">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>
        </section>

        <section className="py-6 pb-24 text-center xl:py-12">
          <p className="text-xl font-semibold 2xl:text-4xl">
            Today could be the best day of your (developer) life.
          </p>

          <div className="flex justify-center pt-12">
            <DownloadButton />
          </div>
          <p className="pt-5 text-xs">
            By using VS Code, you agree to its{" "}
            <a className="text-accent" href="">
              license and privacy statement.
            </a>
          </p>
        </section>

        <Footer />
      </div>
    </main>
  );
}
