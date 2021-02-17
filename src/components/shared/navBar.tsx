import Link from "next/link";
import {
  Popover,
  Button,
  Menu,
  MenuItem,
  NavbarGroup,
  Navbar,
  NavbarDivider,
  Alignment,
  NavbarHeading,
  Position,
  Icon,
} from "@blueprintjs/core";

interface ILinkTypes {
  label: string;
  href: string;
  dataTestId: string;
}

const Header = ({ currentUser, t }: any) => {
  let links = [] as Array<ILinkTypes>;

  links = [
    !currentUser && {
      label: "Login",
      href: "/auth",
      dataTestId: "loginButton",
    },
    currentUser && {
      label: "Logout",
      href: "/auth/signout",
      dataTestId: "logoutButton",
    },
  ];
  const navItems = () => {
    return links
      .filter((linkConfig: ILinkTypes) => linkConfig)
      .map((item: ILinkTypes) => {
        return (
          <Link key={item.href} href={item.href}>
            <button
              data-testid={item.dataTestId}
              className="bp3-button bp3-minimal"
            >
              {item.label}
            </button>
          </Link>
        );
      });
  };

  const userMenu = (
    <Menu>
      <Link href={"/user"}>
        <MenuItem icon="graph" text="Profile" />
      </Link>
      <Link href={"/auth/signout"}>
        <MenuItem icon="log-out" text="signout" />
      </Link>
    </Menu>
  );

  return (
    <Navbar
      style={{
        height: "60px",
        padding: "5px 10px 0 10px",
      }}
      className="panel"
    >
      <NavbarGroup align={Alignment.LEFT}>
        <Link href={"/"}>
          <NavbarHeading>
            <Icon icon="tree" iconSize={24} />
          </NavbarHeading>
        </Link>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <div className="bp3-input-group .modifier">
          <span className="bp3-icon bp3-icon-search"></span>
          <input
            className="bp3-input"
            type="search"
            placeholder="Search input"
            dir="auto"
          />
        </div>
        {navItems()}
        {currentUser ? (
          <>
            <NavbarDivider />
            <Popover content={userMenu} position={Position.BOTTOM}>
              <Button rightIcon={"user"} minimal></Button>
            </Popover>
          </>
        ) : null}
      </NavbarGroup>
    </Navbar>
  );
};

export default Header;
