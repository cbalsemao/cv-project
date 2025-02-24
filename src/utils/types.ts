export type HomePageScrollSections = 'about' | 'contact';

export const PROJECTS_INITIAL = 0;

export type SmallMenuProps = {
  handleDrawerToggle: () => void;
  drawerOpen: boolean;
  handleScroll: (sectionId: string) => void;
};
