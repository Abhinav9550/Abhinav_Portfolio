export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <>
      <div className="proj-imgbx">
        <h2>{title}</h2>
        <p
          style={{
            marginLeft: '4%',
          }}
        >
          {description}
        </p>
        <img
          style={{
            marginLeft: '4%',
            marginBottom: '5%',
            width: '80%',
            borderRadius: '10px',
          }}
          src={imgUrl}
        />
      </div>
    </>
  )
}
