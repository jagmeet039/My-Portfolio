import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Edureka! - Trainee",
      title: "June 2020 - Sept 2020",
      img:
        "https://cdn.lovesavingsgroup.com/logos/edureka.png",
      desc:
        "Worked on developing a fully fledge food service website like Zomato using MERN stack ",
    },
    {
      id: 2,
      name: "Addskill.io - Trainee",
      title: "April 2021 - Present",
      img:
        "https://i.pinimg.com/favicons/2a4a7c02192bc17bc51e74889c1f68891dc0e333eaf75676ef7dc726.png?ea01b5516cd7c4a1b3a232345f2d30dd",
      icon: "assets/youtube.png",
      desc:
        "Learned MERN Stack development and worked on Projects like Spelling Check, News Clone, Nutrify etc ",
      featured: true,
    },
    {
      id: 3,
      name: "Telligent - Support",
      title: "May 2018 - Present",
      img:
        "https://t4.ftcdn.net/jpg/03/11/02/51/360_F_311025111_l0FUIgGzkHsQoMdcf17UgNyjat2M2qkd.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Providing Technical Support to the games developed by Niantic Inc. (PokemonGo)",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Experience</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
