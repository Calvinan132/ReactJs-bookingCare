export const adminMenu = [
  {
    //Quản lý người dùng
    name: "menu.admin.manage-user",
    menus: [
      {
        name: "menu.admin.manage-admin",
        subMenus: [
          {
            name: "menu.admin.create-user",
            link: "/system/CreateUser",
          },
        ],
      },
      {
        name: "menu.admin.manage-doctor",
      },
    ],
  },
  {
    //Quản lý cơ sở y tế
    name: "menu.admin.hospital",
    menus: [
      {
        name: "menu.admin.manage-hospital",
      },
    ],
  },
  {
    //Quản lý chuyên khoa
    name: "menu.admin.specialty",
    menus: [
      {
        name: "menu.admin.manage-specialty",
      },
    ],
  },
  {
    //Quản lý cẩm nang
    name: "menu.admin.handbook",
    menus: [
      {
        name: "menu.admin.manage-handbook",
      },
    ],
  },
];
