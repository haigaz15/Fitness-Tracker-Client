export interface ExerciseListType {
  name: string;
  type: string;
  description: string;
}
export interface ExerciseCardProps {
  imageUrl?: string;
  name: string;
  description: string;
}

export interface ExerciseModalProps {
  open: boolean;
  handleClose: () => void;
  renderModalContent: () => React.ReactElement;
}
