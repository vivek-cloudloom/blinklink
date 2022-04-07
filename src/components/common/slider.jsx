export default function Slider({ total, current, type }) {
  return (
    <div className={`position-relative container d-lg-block d-none scroll-indicator ${type}`} style={{top:"2px"}}>
      <div className="selectors">
        {total.map((item, index) => {
          return (
            <a
              key={item.title}
              className={`selector ${index === current ? "active" : ""}`}
              href={`#${item.title.replace(/[^a-z0-9]/gi, "")}`}
            ></a>
          );
        })}
      </div>
    </div>
  );
}
