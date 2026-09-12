type RainProps = {
  rain: number;
};

function Rain({ rain }: RainProps) {
  return (
    <div
      className="
          rounded-2xl
          bg-white/10
          border border-white/10
          p-4
          text-center
        "
    >
      <div className="text-2xl mb-2">🌧️</div>

      <p className="text-2xl font-bold">{rain} mm</p>

      <p className="text-sm text-white/60 mt-1">میزان بارش</p>
    </div>
  );
}

export default Rain;
