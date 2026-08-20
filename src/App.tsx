import { MotionConfig } from 'framer-motion';
import AppRoutes from './routes/AppRouter';
function App() {
  return (
    <MotionConfig reducedMotion="user">
      <AppRoutes />
    </MotionConfig>
  );
}

export default App;
