import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
  stagger
} from '@angular/animations';
export const slideInAnimation =
  trigger('routeAnimations', [
       transition('Lit => Home', [
            query(':enter, :leave', 
                 style({ position: 'absolute', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter', [
                    stagger(100, [
                         style({  transform: 'rotate(-15deg)', top: '-100vh' }),
                         animate('1s ease-in-out', 
                         style({ transform: 'rotate(0deg)', top: '0'}))
                    ])
                 ], { optional: true }),
                 query(':leave',[
                    stagger(100, [
                         style({  transform: 'rotate(0deg)', top: '0vh' }),
                        animate('1s ease-in-out', 
                        style({ transform: 'rotate(15deg)', top: '100vh' }))
                    ])
                 ], { optional: true }),
            ])
       ]),
       transition('Reebok => Lit', [
            query(':enter, :leave', 
                 style({ position: 'absolute', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter', [
                    stagger(100, [
                         style({  transform: 'rotate(-15deg)', top: '-100vh' }),
                         animate('1s ease-in-out', 
                         style({ transform: 'rotate(0deg)', top: '0'}))
                    ])
                 ], { optional: true }),
                 query(':leave',[
                    stagger(100, [
                         style({  transform: 'rotate(0deg)', top: '0vh' }),
                        animate('1s ease-in-out', 
                        style({ transform: 'rotate(15deg)', top: '100vh' }))
                    ])
                 ], { optional: true }),
            ])
       ]),
       transition('Senna => Reebok', [
            query(':enter, :leave', 
                 style({ position: 'absolute', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter', [
                    stagger(100, [
                         style({  transform: 'rotate(-15deg)', top: '-100vh' }),
                         animate('1s ease-in-out', 
                         style({ transform: 'rotate(0deg)', top: '0'}))
                    ])
                 ], { optional: true }),
                 query(':leave',[
                    stagger(100, [
                         style({  transform: 'rotate(0deg)', top: '0vh' }),
                        animate('1s ease-in-out', 
                        style({ transform: 'rotate(15deg)', top: '100vh' }))
                    ])
                 ], { optional: true }),
            ])
       ]),
       transition('Palmeiras => Senna', [
            query(':enter, :leave', 
                 style({ position: 'absolute', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter', [
                    stagger(100, [
                         style({  transform: 'rotate(-15deg)', top: '-100vh' }),
                         animate('1s ease-in-out', 
                         style({ transform: 'rotate(0deg)', top: '0'}))
                    ])
                 ], { optional: true }),
                 query(':leave',[
                    stagger(100, [
                         style({  transform: 'rotate(0deg)', top: '0vh' }),
                        animate('1s ease-in-out', 
                        style({ transform: 'rotate(15deg)', top: '100vh' }))
                    ])
                 ], { optional: true }),
            ])
       ]),
       transition('* => *', [
            query(':enter, :leave', 
                 style({ position: 'absolute', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                    stagger(100, [
                         style({ transform: 'rotate(15deg)', top: '100vh' }),
                         animate('1s ease-in-out', 
                         style({  transform: 'rotate(0deg)', top: '0vh' }))
                    ])
                 ], { optional: true }),
                 query(':leave', [
                    stagger(100, [
                         style({ transform: 'rotate(0deg)', top: '0'}),
                         animate('1s ease-in-out', 
                         style({  transform: 'rotate(-15deg)', top: '-100vh' }))
                    ])
                 ], { optional: true }),
            ])
       ]),
]);
