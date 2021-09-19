import initHotjar from './hotjar';
import initGA from './GA';

export const initAnalytics = () => {
  initHotjar();
  initGA();
}

export default initAnalytics;
