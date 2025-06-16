import logoIcon from "../../images/logoIcon.png";
import homeIcon from "../../images/icons/home.png";
import profileIcon from "../../images/icons/person-outline.png";
import postsIcon from "../../images/icons/folders.png";
import savedIcon from "../../images/icons/bookmark-empty.png";
import topIcon from "../../images/icons/trending.png";
import followersIcon from "../../images/icons/users.png";
import userIcon from "../../images/icons/user-icon.png";

import {
    Nav,
    Logo,
    ImageLogo,
    Brand,
    Separator,
    Menu,
    MenuItem,
    MenuButton,
    PostButton,
    UserSection,
    Avatar,
    UserInfo,
    OptionsButton,
} from "./NavbarStyled";

const Navbar = () => {
    return (
        <Nav>
            <Logo>
                <ImageLogo src={logoIcon} alt="Honey Hive logo" />
                <Brand>Honey Hive</Brand>
            </Logo>

            <Separator />

            <Menu>
                <MenuItem>
                    <MenuButton>
                        <img src={homeIcon} alt="Home" />
                        <span>Main</span>
                    </MenuButton>
                </MenuItem>
                <MenuItem>
                    <MenuButton>
                        <img src={profileIcon} alt="Profile" />
                        <span>Profile</span>
                    </MenuButton>
                </MenuItem>
                <MenuItem>
                    <MenuButton>
                        <img src={postsIcon} alt="Your posts" />
                        <span>Your posts</span>
                    </MenuButton>
                </MenuItem>
                <MenuItem>
                    <MenuButton>
                        <img src={savedIcon} alt="Saved posts" />
                        <span>Saved posts</span>
                    </MenuButton>
                </MenuItem>
                <MenuItem>
                    <MenuButton>
                        <img src={topIcon} alt="Top posts" />
                        <span>Top posts</span>
                    </MenuButton>
                </MenuItem>
                <MenuItem>
                    <MenuButton>
                        <img src={followersIcon} alt="Followers" />
                        <span>Followers</span>
                    </MenuButton>
                </MenuItem>
            </Menu>

            <PostButton>Create Post</PostButton>

            <UserSection>
                <Avatar src={userIcon} />
                <UserInfo>
                    <strong>Eduardo Lima</strong>
                    <span>@du</span>
                </UserInfo>
                <OptionsButton>⋯</OptionsButton>
            </UserSection>
        </Nav>
    );
};

export default Navbar;
