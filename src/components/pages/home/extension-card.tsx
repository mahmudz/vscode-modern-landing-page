export default function ExtentionCard({
  name,
  image,
  description,
  className,
}: {
  name: string;
  description?: string;
  image?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex cursor-pointer items-center justify-center rounded-xl border border-slate-800 bg-[#0e1318] p-4 hover:bg-[#192129] md:justify-between ${className}`}
    >
      <div className="rounded">
        <img
          className="aspect-square size-14 rounded-lg bg-[#171c22]"
          src={image ?? "https://picsum.photos/128"}
          alt=""
        />
      </div>
      <div className="hidden flex-1 pl-4 md:block">
        <h4 className="pb-1 text-sm font-bold">{name}</h4>
        <p className="text-sm leading-relaxed text-white/70">{description}</p>
      </div>
    </div>
  );
}
