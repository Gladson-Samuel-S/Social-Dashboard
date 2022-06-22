import { Overlay, SideDrawer } from "./SideBarStyled";

const SideBar = ({ children, width, setSideBarOpen }) => {
  return (
    <aside>
      <SideDrawer w={width}>{children}</SideDrawer>
      <Overlay onClick={() => setSideBarOpen(false)} />
    </aside>
  );
};

export default SideBar;
