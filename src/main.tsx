
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializePerformanceOptimizations } from './utils/preloadResources'
import { initOptimizations } from './utils/optimizePageLoad'

// Initialize performance optimizations before rendering
initializePerformanceOptimizations()
initOptimizations()

createRoot(document.getElementById("root")!).render(<App />);
