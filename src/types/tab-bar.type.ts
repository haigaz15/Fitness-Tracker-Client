export interface TapBarExerciseListProps {
  searchBar: React.ComponentType;
  tabValue: string;
  handleTabValueChange: (event: React.SyntheticEvent, newValue: string) => void;
}
