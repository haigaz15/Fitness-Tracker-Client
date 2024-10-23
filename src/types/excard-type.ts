export interface ExCardProps {
  cardStyle: { [key: string]: any };
  cardContentStyle: { [key: string]: any };
  cardMediaStyle: { [key: string]: any };
  cardContentLayout: () => React.ReactNode;
  cardEndLayout?: () => React.ReactNode;
}
