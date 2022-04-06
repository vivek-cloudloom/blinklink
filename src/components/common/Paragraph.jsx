export default function Paragraph({ children , variant , className }) {

  const classNames = []
  if(variant === "footer"){
    classNames.push('typography-2-normal');
  }else if(variant = "lg"){
    classNames.push('typography-3-normal');
  }else if(variant = "xl"){
    classNames.push('typography-2-normal');
  }else{
    classNames.push('typography-3-normal');
  }

  if(className){
    classNames.push(className)
  }


  return (
    <p className={classNames.join(" ")}>{children}</p>
  );
}
