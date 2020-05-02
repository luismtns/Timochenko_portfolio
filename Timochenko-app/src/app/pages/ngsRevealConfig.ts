import { NgsRevealConfig } from 'ngx-scrollreveal';
// https://tinesoft.github.io/ngx-scrollreveal/doc/injectables/NgsRevealConfig.html
export const myNgsRevealConfig: NgsRevealConfig = {
  'origin': 'bottom',
  'scale': 1,
  'easing': 'cubic-bezier(.35,0,.28,1)',
  'distance': '3em',
  'duration': 800,
  'cleanup': true,
  'viewFactor': 0
}