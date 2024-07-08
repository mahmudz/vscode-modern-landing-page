export default function FeatureCard({
  title,
  description,
  link,
  active,
}: {
  title: string;
  description: string;
  link: string;
  active?: boolean;
}) {
  return (
    <div
      className={`${
        active ? "border-white/10 bg-[#11151b]" : "border-white/0 bg-[#0a1116]"
      } cursor-pointer rounded-md border p-3 hover:border-white/10 hover:bg-[#11151b] xl:p-5`}
    >
      <h3 className="pb-2.5 font-semibold">{title}</h3>
      <p className="pb-5 text-white/60">{description}</p>
      <a className="text-accent" href={link}>
        Learn More
      </a>
    </div>
  );
}
