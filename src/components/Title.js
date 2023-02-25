import "./title.css";

const Title = ({title,desc,id}) => {
  return (
    <div className="title">
    <h3>ID:{id}</h3>
    <h3>Title:{title}</h3>
    <p>Description:{desc}</p>
    </div>
  )
}

export default Title