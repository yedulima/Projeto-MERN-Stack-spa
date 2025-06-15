import Card from "../../components/Card/Card";
import data from "../../Data";
import { MainBody, PostsBody, Title } from "./MainStyled";

const Main = () => {
    return (
        <>
            <MainBody>
                <Title>Posts</Title>
                <hr />
                <PostsBody>
                    {data.map((post, index) => {
                        return <Card key={index} post={post} />;
                    })}
                </PostsBody>
            </MainBody>
        </>
    );
};

export default Main;
