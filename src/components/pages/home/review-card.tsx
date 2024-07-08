export default function ReviewCard() {
  const randomId = Math.random() * (70 - 1) + 1;

  return (
    <div className="rounded-md bg-[#12161b] p-5">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
        laboriosam aperiam veniam, nis, adipisci nisi quia quibusdam dolorum
        cumque perspiciatis est?
      </p>

      <div className="flex items-center justify-between pt-5">
        <div>
          <a
            className="text-sky-800"
            href="https://github.com/mahmudz"
            target="_blank"
          >
            @mahmudz
          </a>
          <p className="text-white/60">Full Stack Developer</p>
        </div>
        <img
          src={`https://i.pravatar.cc/64?img=${randomId}`}
          className="size-10 rounded-full"
          alt=""
        />
      </div>
    </div>
  );
}
