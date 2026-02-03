const RowComponent = (props) => {
  const { className } = props;

  return (
    <div className={`${className || ''}`} {...props}>
      {props.children}
    </div>
  );
};

export const Row = (props) => {
  const { children, className, ...rest } = props;

  return (
    <RowComponent className={`row ${className || ''}`} {...rest}>
        {children}
    </RowComponent>
  );
};