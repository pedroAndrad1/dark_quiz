import CircleLoader from 'react-spinners/CircleLoader';
import { motion } from 'framer-motion';
import Widget from '../../components/Widget';
import db from '../../../db.json';

export default function LoadingWidget() {
  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0, duration: 0.5 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        Viajando entre realidades...
      </Widget.Header>
      <Widget.Content>
        <CircleLoader size={100} color={db.theme.colors.secondary} />
      </Widget.Content>
    </Widget>
  );
}
