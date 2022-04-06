export default function Slider({ total, current }) {
  return (
    <div className="position-relative d-lg-block d-none">
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
