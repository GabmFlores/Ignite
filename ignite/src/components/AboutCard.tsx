interface AboutCardProps {
  imageSrc: string;
  name: string;
}

export default function AboutCard({ imageSrc, name }: AboutCardProps) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imageSrc}
        alt={name}
        className="w-40 h-40 object-cover rounded-lg border-4 border-white shadow-md"
      />
      <p className="mt-2 text-secondary font-medium">{name}</p>
    </div>
  );
}
