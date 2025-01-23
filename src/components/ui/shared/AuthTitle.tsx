const AuthTitle = ({title, desc}) => {
  return (
    <div className="text-center">
      <h2 className="text-xl md:text-3xl font-bold text-primary mb-4">
        {title}
      </h2>
      <p className="text-sm md:text-lg text-secondaryGray mb-6">
        {desc}
      </p>
      <div className="divider"></div>
    </div>
  );
};

export default AuthTitle;
