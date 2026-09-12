type HeaderProps = {
  title: string
}

function Header({ title }: HeaderProps) {
  return (
    <div className="text-center">
      <p className="text-sm text-white/60 mb-2">وضعیت فعلی هوا</p>
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
    </div>
  );
}

export default Header;
