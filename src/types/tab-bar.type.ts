export interface TapBarExerciseListProps {
  renderSearchBar: () => React.ReactNode;
  tabValue: string;
  handleTabValueChange: (event: React.SyntheticEvent, newValue: string) => void;
}
