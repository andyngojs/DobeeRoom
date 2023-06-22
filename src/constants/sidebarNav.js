import {
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

const sidebarNav = [
  {
    link: "/",
    icon: <HomeOutlined />,
    title: "Trang Chủ",
    section: "Trang Chủ",
  },
  {
    link: "/search",
    icon: <SearchOutlined />,
    title: "Tìm Kiếm",
    section: "Tìm Kiếm",
  },
  {
    link: "/user",
    icon: <UserOutlined />,
    title: "Cá Nhân",
    section: "Trang Cá Nhân",
  },
  {
    link: "/about",
    icon: <ContainerOutlined />,
    title: "Giới Thiệu",
    section: "Giới Thiệu",
  },
];

export default sidebarNav;
