const Button = ({ className, children, type }) => {
  return (
    <button  name="button" type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
