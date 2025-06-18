import commentIcon from "../../images/icons/comment.png";
import viewsIcon from "../../images/icons/eye.png";
import likesIcon from "../../images/icons/heart.png";
import savesIcon from "../../images/icons/bookmark-empty.png";

import { CardContainer, CardBody, CardFooter, Icon } from "./CardStyled";
import { OptionsButton } from "../Navbar/NavbarStyled";
import TextLimit from "../TextLimit/TextLimit";

const Card = (post) => {
    const title = post.title;
    const text = post.text;
    const banner = post.banner;
    const date = post.date;
    const author = post.userName;
    const comments = post.comments;
    const views = post.views;
    const likes = post.likes;
    const saves = post.saves;

    return (
        <>
            <CardContainer>
                <CardBody>
                    <img src={banner} alt="Banner" />
                    <h2>{title}</h2>
                    <TextLimit text={text} limit={150} />
                    <span>
                        {date} by {author}
                    </span>
                </CardBody>
                <CardFooter>
                    <div>
                        <Icon src={commentIcon} alt="Comments" />
                        <span>{comments}</span>
                    </div>
                    <div>
                        <Icon src={viewsIcon} alt="Views" />
                        <span>{views}</span>
                    </div>
                    <div>
                        <Icon src={likesIcon} alt="Likes" />
                        <span>{likes}</span>
                    </div>
                    <div>
                        <Icon src={savesIcon} alt="Saves" />
                        <span>{saves}</span>
                    </div>
                    <OptionsButton>...</OptionsButton>
                </CardFooter>
            </CardContainer>
        </>
    );
};

export default Card;
