export default function Paragraph({ children , variant , className }) {

  const classNames = []
  if(variant === "footer"){
    classNames.push('typography-variant-8');
  }else if(variant = "lg"){
    classNames.push('typography-variant-9');
  }else if(variant = "xl"){
    classNames.push('typography-variant-8');
  }else{
    classNames.push('typography-variant-9');
  }

  if(className){
    classNames.push(className)
  }


  return (
    <p className={classNames.join(" ")}>{children}</p>
  );
}
