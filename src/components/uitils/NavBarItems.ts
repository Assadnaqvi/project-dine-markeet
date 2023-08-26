export interface NavBarItemsType {
  label: string;
  href: string;
  isDropDown: boolean;
  dropDownData?: Array<NavBarItemsType>;
}
export const NavbarArray: Array<NavBarItemsType> = [
  {
    label: "Home",
    href: "/",
    isDropDown: false,
  },
  {
    label: "Female",
    href: "/female",
    isDropDown: false,
    dropDownData: [
      {
        label: "Dresses",
        href: "/female/dresses",
        isDropDown: false,
      },
      {
        label: "Shirts",
        href: "/female/shirts",
        isDropDown: false,
      },
      {
        label: "Pent",
        href: "/female/pent",
        isDropDown: false,
      },
      {
        label: "Jackets",
        href: "/female/jackets",
        isDropDown: false,
      },
    ],
  },
  {
    label: "Male",
    href: "/male",
    isDropDown: false,
    dropDownData: [
      {
        label: "Dresses",
        href: "/male/dresses",
        isDropDown: false,
      },
      {
        label: "Shirts",
        href: "/male/shirts",
        isDropDown: false,
      },
      {
        label: "Pent",
        href: "/male/pent",
        isDropDown: false,
      },
      {
        label: "Jackets",
        href: "/male/jackets",
        isDropDown: false,
      },
    ],
  },
  {
    label: "Kids",
    href: "/kids",
    isDropDown: false,
    dropDownData: [
      {
        label: "Dresses",
        href: "/kids/dresses",
        isDropDown: false,
      },
      {
        label: "Shirts",
        href: "/kids/shirts",
        isDropDown: false,
      },
      {
        label: "Pent",
        href: "/kids/pent",
        isDropDown: false,
      },
      {
        label: "Jackets",
        href: "/kids/jackets",
        isDropDown: false,
      },
    ],
  },
  {
    label: "All Products",
    href: "/product",
    isDropDown: false,
    dropDownData: [
      {
        label: "Dresses",
        href: "/products/dresses",
        isDropDown: false,
      },
      {
        label: "Shirts",
        href: "/products/shirts",
        isDropDown: false,
      },
      {
        label: "Pent",
        href: "/products/pent",
        isDropDown: false,
      },
      {
        label: "Jackets",
        href: "/products/jackets",
        isDropDown: false,
      },
    ],
  },
];
