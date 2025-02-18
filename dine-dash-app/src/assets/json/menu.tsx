type MenuList = {
    id: number;
    name: string;
    route: string;
};
  
export const menu: MenuList[] = [
    { id: 1, name: "Home", route: "/"},
    { id: 2, name: "Restaurants", route: "/restaurants"},
    { id: 3, name: "Reserve a table", route: "/reserve"},
  ];