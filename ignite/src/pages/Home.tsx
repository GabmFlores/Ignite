import Button from "../components/Button";

const Home = () => {
  return (
    <div className="flex gap-[clamp(1rem,2vw,2rem)] flex-col items-center my-[clamp(2rem,4vw,4rem)] mx-auto px-4 text-center">
      <h1 className="text-primary text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-tight">
        Ateneo's Exclusive Dating App
      </h1>
      <h2 className="text-secondary2 text-[clamp(1.5rem,4vw,2.5rem)] font-Lora leading-snug">
        Find Real Connections
      </h2>
      <Button
        variant="solid"
        className="text-[clamp(1.25rem,3vw,2rem)] px-[clamp(1rem,2.5vw,1.5rem)] py-[clamp(0.4rem,1.2vw,0.6rem)]"
      >
        Date Now
      </Button>
    </div>
  );
};

export default Home;
