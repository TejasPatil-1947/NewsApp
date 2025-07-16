import image from '../assets/news.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block mx-3 px-2 py-2"
      style={{
        width: "345px",
        height: "500px", // fixed height for equal-sized cards
        overflow: "hidden"
      }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt="news"
      />
      <div className="card-body">
        <h5 className="card-title" style={{ height: "60px", overflow: "hidden" }}>
          {title.slice(0, 50)}
        </h5>
        <p
          className="card-text"
          style={{
            height: "100px",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          {description
            ? description.slice(0, 150)
            : "US President Donald Trump’s tariffs on South Africa could cause around 100 000 job losses, with the agriculture and automotive sectors hardest-hit, central bank governor Lesetja Kganyago said on Wednesday."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
