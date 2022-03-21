type ContainerProps = {
  styles: React.CSSProperties;
  children: React.ReactNode;
};

const Container = ({ styles, children }: ContainerProps) => {
  return <div style={styles}>{children}</div>;
};

export default Container;
