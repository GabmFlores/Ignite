type FeatureCardProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
};

const FeatureCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center max-w-xs text-center">
      <div className="relative mb-4 flex justify-center">
        <div className="absolute bottom-0 h-2 w-20 bg-black/20 blur-md rounded-full" />
        <img
          src={imgSrc}
          alt={imgAlt}
          className="relative z-10 h-[clamp(5rem,10vw,8rem)] w-auto rounded-xl shadow-xl scale-105 -translate-y-2"
        />
      </div>

      <h3 className="text-lg sm:text-xl font-semibold text-primary2 mb-2">
        {title}
      </h3>
      <p className="font-Lora text-xs sm:text-sm text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
