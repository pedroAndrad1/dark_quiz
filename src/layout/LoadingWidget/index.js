import CircleLoader from 'react-spinners/CircleLoader';
import Widget from '../../components/Widget';
import db from '../../../db.json';

export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Viajando no tempo...
      </Widget.Header>
      <Widget.Content>
        <CircleLoader size={100} color={db.theme.colors.secondary} />
      </Widget.Content>
    </Widget>
  );
}
