import ExtentionCard from "./extension-card";

export default function PhoneExtentions() {
  return (
    <div className="relative grid grid-cols-3 gap-5 pr-0 before:absolute before:left-0 before:h-full before:w-20 before:bg-gradient-to-r before:from-background before:to-background/10 after:absolute after:right-0 after:h-full after:w-20 after:bg-gradient-to-l after:from-background after:to-background/10">
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
      <ExtentionCard
        className="md:hidden"
        name="Laravel Extra Intellisense"
        description="Better intellisense for laravel projects."
        image="https://skillicons.dev/icons?i=laravel"
      />

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
      <ExtentionCard
        className="md:hidden"
        name="PHP Profiler"
        description="Support for PHP (Xdebug) profiling files and inspecting them."
        image="https://devsense.gallerycdn.vsassets.io/extensions/devsense/profiler-php-vscode/1.49.15728/1720430784237/Microsoft.VisualStudio.Services.Icons.Small"
      />

      <ExtentionCard
        name="PHP Profiler"
        description="Support for PHP (Xdebug) profiling files and inspecting them."
        image="https://devsense.gallerycdn.vsassets.io/extensions/devsense/profiler-php-vscode/1.49.15728/1720430784237/Microsoft.VisualStudio.Services.Icons.Small"
      />
      <ExtentionCard
        className="md:hidden"
        name="Docker"
        description="Makes it easy to create, manage, and debug containerized applications."
        image="https://skillicons.dev/icons?i=docker"
      />
      <ExtentionCard
        name="Dev Container"
        description="Open any folder or repository inside a Docker container."
        image="https://ms-vscode-remote.gallerycdn.vsassets.io/extensions/ms-vscode-remote/remote-containers/0.377.0/1720188784441/Microsoft.VisualStudio.Services.Icons.Default"
      />

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
      <ExtentionCard
        name="Git Lens"
        description="Jupyter notebook support, interactive programming"
        image="https://ms-toolsai.gallerycdn.vsassets.io/extensions/ms-toolsai/jupyter/2024.6.2024062802/1719599562212/Microsoft.VisualStudio.Services.Icons.Default"
      />
    </div>
  );
}
