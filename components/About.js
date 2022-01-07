function About({ data }) {
  return (
    <div id="about" className="h-[60%] mb-[150px]">
      <h3 className="subtitle">{data.subtitle}</h3>
      <h3 className="title">{data.title}</h3>
      <p className="desc">{data.content}</p>
    </div>
  );
}

export default About;
