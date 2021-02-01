import { ThemeProvider } from 'styled-components';
import db from '../../db.json';
import QuizScreen from '../../src/screens/Quiz';

export default function Quiz() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen
        db={db}
      />
    </ThemeProvider>
  );
}
