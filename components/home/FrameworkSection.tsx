import Tag from "../ui/Tag";

type Service = {
  slug: string;
  stage: string | null;
  title: string;
  description: string;
};

export default function FrameworkSection({ services }: { services: Service[] }) {
  return (
    <section className="px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="max-w-2xl font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
          The foundation of every transformation
        </h2>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-navy-900/50">
          Each service is powerful on its own. Together, they create irreversible
          transformation.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-[28px] border border-navy-900/[0.06] bg-white p-8 transition-shadow hover:shadow-[0_20px_50px_rgba(3,17,38,0.08)]"
            >
              <div className="flex items-center justify-between">
                <Tag>{service.stage}</Tag>
                <span className="text-xl text-navy-900/30 transition-transform group-hover:translate-x-1 group-hover:text-navy-900">
                  →
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-navy-900">{service.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-navy-900/55">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
