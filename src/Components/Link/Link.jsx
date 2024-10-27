const Link = ({ route }) => {
  return (
    <li className="hover:bg-yellow-500 rounded-md px-2">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
