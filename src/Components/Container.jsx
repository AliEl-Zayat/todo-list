const Container = ({ className, children }) => {
  return <div className={`my-container ${className}`}>{children}</div>;
};
export default Container;
