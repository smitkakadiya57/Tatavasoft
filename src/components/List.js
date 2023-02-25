import Title from "./Title"
const List = () => {

const array=[
    {id:1,title:"Title 1",desc:"Lorem ipsum dolor sit amet."},
    {id:2,title:"Title 2",desc:"Lorem ipsum dolor sit amet."},
    {id:3,title:"Title 3",desc:"Lorem ipsum dolor sit amet."},
    {id:4,title:"Title 4",desc:"Lorem ipsum dolor sit amet."},
    {id:5,title:"Title 5",desc:"Lorem ipsum dolor sit amet."},
]


  return (
    <>
    {array.map((ele)=>{
        return(
            <Title key={ele.title} id={ele.id} title={ele.title} desc={ele.desc} />
        )
    })}
    </>
  )
}

export default List