import { useEffect, useState } from "react";
import { getAllPost, getUserDetails } from "../api/helper";
import DiariesItem from "./DiariesItem";

const Diaries = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    getAllPost()
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="flex flex-col justify-center items-center p-4 gap-y-8">
      {posts &&
        posts.map((item, index) => (
          <DiariesItem
            key={index}
            title={item.title}
            date={new Date(`${item.date}`).toLocaleDateString()}
            description={item.description}
            image={item.image}
            id={item._id}
            location={item.location}
            user={item.user._id}
            name={item.user.name}
          />
        ))}
    </section>
  );
};

export default Diaries;
