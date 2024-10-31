

const Link = ({route}) => {
    console.log(route);
  return (
   
        <li className="text-black font-bold px-5">
            <a className="mr-20" href={route.path}>{route.name}</a>
        </li>
  )
}

export default Link;