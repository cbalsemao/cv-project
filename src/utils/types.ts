export type HomePageScrollSections = 'about' | 'contact';

export type SmallMenuProps = {
  handleDrawerToggle: () => void;
  drawerOpen: boolean;
  handleScroll: (sectionId: string) => void;
};
