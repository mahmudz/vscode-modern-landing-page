import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-2 gap-8 py-16 text-center md:grid-cols-7 md:text-start">
        <div className="col-span-2 justify-self-center md:justify-self-start">
          <Logo />
        </div>

        <div>
          <h5 className="pb-4 md:pb-9">Company</h5>
          <div className="space-y-4">
            <a className="block text-xs text-white/60" href="#">
              About Us
            </a>
            <a className="block text-xs text-white/60" href="#">
              The Team
            </a>
            <a className="block text-xs text-white/60" href="#">
              RSS Feed
            </a>
            <a className="block text-xs text-white/60" href="#">
              FAQ
            </a>
            <a className="block text-xs text-white/60" href="#">
              Contact Us
            </a>
          </div>
        </div>
        <div>
          <h5 className="pb-4 md:pb-9">Media</h5>
          <div className="space-y-4">
            <a className="block text-xs text-white/60" href="#">
              Press Kit
            </a>
            <a className="block text-xs text-white/60" href="#">
              Podcast Appearances
            </a>
            <a className="block text-xs text-white/60" href="#">
              Newsreel
            </a>
          </div>
        </div>
        <div>
          <h5 className="pb-4 md:pb-9">Documentation</h5>
          <div className="space-y-4">
            <a className="block text-xs text-white/60" href="#">
              Documentation
            </a>
            <a className="block text-xs text-white/60" href="#">
              Forum
            </a>
            <a className="block text-xs text-white/60" href="#">
              API Library
            </a>
            <a className="block text-xs text-white/60" href="#">
              Extension Library
            </a>
          </div>
        </div>
        <div>
          <h5 className="pb-4 md:pb-9">Company</h5>
          <div className="space-y-4">
            <a className="block text-xs text-white/60" href="#">
              Windows
            </a>
            <a className="block text-xs text-white/60" href="#">
              Linux
            </a>
            <a className="block text-xs text-white/60" href="#">
              Mac OS
            </a>
          </div>
        </div>
        <div>
          <h5 className="pb-4 md:pb-9">Social</h5>
          <div className="space-y-4">
            <a className="block text-xs text-white/60" href="#">
              GitHub
            </a>
            <a className="block text-xs text-white/60" href="#">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="h-0.5 bg-gradient-to-l from-background via-slate-900 to-background"></div>

      <div className="flex flex-col items-center justify-between gap-4 py-10 md:flex-row">
        <p className="text-sm text-white/60">
          Copyright © 2024 Microsoft, All Rights Reserved
        </p>

        <div className="space-x-4">
          <a className="text-sm text-white/60" href="#">
            Terms & Conditions
          </a>
          <a className="text-sm text-white/60" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
