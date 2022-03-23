export default function Paragraph({ children , variant }) {

  const className = []
  if(variant === "footer"){
    className.push('typography-variant-8');
  }else if(variant = "lg"){
    className.push('typography-variant-9');
  }else if(variant = "xl"){
    className.push('typography-variant-8');
  }else{
    className.push('typography-variant-9');
  }
  return (
    <p className={className.join(" ")}>{children}</p>
  );
}
