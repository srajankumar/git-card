const Background = () => {
  return (
    <div>
      <img
        className="fixed dark:visible invisible w-screen h-screen left-0 object-cover opacity-30"
        src="/assets/dark.svg"
        alt="background"
      />
      <img
        className="fixed w-screen dark:invisible visible h-screen left-0 object-cover opacity-30"
        src="/assets/light.svg"
        alt="background"
      />
    </div>
  );
};

export default Background;
