
import config from '../../../config';

export const init = () => {

  if (config.env === 'production') {
    var script= document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-D38SE6YZFT";
    document.head.appendChild(script);
    
    if (typeof window == 'undefined') {
      return;
    }
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
  
    gtag('config', 'G-D38SE6YZFT');
  }
}
export default init;


