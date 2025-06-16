import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
// import data from "../../Data";
import { getAllPosts } from "../../services/postsServices";
import { MainBody, PostsBody, Title } from "./MainStyled";

const Main = () => {
    const [posts, setPosts] = useState([]);

    const findAllPosts = async () => {
        const response = await getAllPosts();
        setPosts(response.data.results);
    };

    useEffect(() => {
        findAllPosts();
    }, []);

    return (
        <>
            <MainBody>
                <Title>Posts</Title>
                <hr />
                <PostsBody>
                    {posts.map((post) => {
                        console.log(post);
                        return (
                            <Card
                                key={post.id}
                                title={post.title}
                                text={post.text}
                                banner={post.banner}
                                likes={post.likes}
                                views={post.views}
                                saves={post.saves}
                                comments={post.comments}
                                userName={post.userName}
                                date={post.date}
                            />
                        );
                    })}
                </PostsBody>
            </MainBody>
        </>
    );
};

export default Main;
