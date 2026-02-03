const ContainerComponent = (props) => {
  const { className } = props;

  return (
    <div className={`${className || ''}`} {...props}>
      {props.children}
    </div>
  );
};

export const Container = (props) => {
  const { children, className, ...rest } = props;

  return (
    <ContainerComponent className={`container ${className || ''}`} {...rest}>
      {children}
    </ContainerComponent>
  );
};