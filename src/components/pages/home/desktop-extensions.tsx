import ExtentionCard from "./extension-card";

export default function DesktopExtentions() {
  return (
    <div className="relative flex flex-col gap-5 before:absolute before:left-0 before:h-full before:w-36 before:bg-gradient-to-r before:from-background before:to-background/10 after:absolute after:right-0 after:h-full after:w-48 after:bg-gradient-to-l after:from-background after:to-background/10">
      <div className="grid grid-cols-3 gap-5 pr-0 md:grid-cols-2 md:pr-12">
        <ExtentionCard
          name="Auto-Close Tag"
          description="Automatically add HTML/XML close tag."
          image="https://skillicons.dev/icons?i=html"
        />
        <ExtentionCard
          name="IntelliPHP"
          description="AI-assisted development for PHP."
          image="https://skillicons.dev/icons?i=php"
        />
      </div>
      <div className="grid grid-cols-3 gap-5 md:grid-cols-2 md:pl-8">
        <ExtentionCard
          name="Laravel Extra Intellisense"
          description="Better intellisense for laravel projects."
          image="https://skillicons.dev/icons?i=laravel"
        />
        <ExtentionCard
          name="Composer"
          description="PHP Composer for Visual Studio Code."
          image="https://ikappas.gallerycdn.vsassets.io/extensions/ikappas/composer/0.8.0/1649003021768/Microsoft.VisualStudio.Services.Icons.Default"
        />
      </div>
      <div className="grid grid-cols-3 gap-5 md:grid-cols-2">
        <ExtentionCard
          name="PHP Profiler"
          description="Support for PHP (Xdebug) profiling files and inspecting them."
          image="https://devsense.gallerycdn.vsassets.io/extensions/devsense/profiler-php-vscode/1.49.15728/1720430784237/Microsoft.VisualStudio.Services.Icons.Small"
        />
        <ExtentionCard
          name="Docker"
          description="Makes it easy to create, manage, and debug containerized applications."
          image="https://skillicons.dev/icons?i=docker"
        />
      </div>
      <div className="ml-8 grid-cols-3 gap-5 md:grid md:grid-cols-2">
        <ExtentionCard
          name="Dev Container"
          description="Open any folder or repository inside a Docker container."
          image="https://ms-vscode-remote.gallerycdn.vsassets.io/extensions/ms-vscode-remote/remote-containers/0.377.0/1720188784441/Microsoft.VisualStudio.Services.Icons.Default"
        />
        <ExtentionCard
          name="Git Lens"
          description="Supercharge Git within VS Code"
          image="https://skillicons.dev/icons?i=git"
        />
      </div>
    </div>
  );
}
