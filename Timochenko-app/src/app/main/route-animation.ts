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
       transition('Home => Palmeiras', [
            query(':enter, :leave', 
                 style({ position: 'absolute', width: '100%', top: '50%' }), 
                 { optional: true }),        
            group([
                 query(':enter', [
                    stagger(100, [
                         style({  transform: 'rotate(-30deg)', top: '-300%' }),
                         animate('1s cubic-bezier(.35,0,.28,1)', 
                         style({ transform: 'rotate(0deg)', top: '0'}))
                    ])
                 ], { optional: true }),
                 query(':leave',[
                    stagger(100, [
                         style({  transform: 'rotate(0deg)', top: '0vh' }),
                        animate('1s cubic-bezier(.35,0,.28,1)', 
                        style({ transform: 'rotate(30deg)', top: '300%' }))
                    ])
                 ], { optional: true }),
            ])
       ]),
       transition('Lit => Home', [
            query(':enter, :leave', 
                 style({ position: 'absolute', width: '100%', top: '50%' }), 
                 { optional: true }),        
            group([
                 query(':enter', [
                    stagger(100, [
                         style({  transform: 'rotate(-30deg)', top: '-300%' }),
                         animate('1s cubic-bezier(.35,0,.28,1)', 
                         style({ transform: 'rotate(0deg)', top: '0'}))
                    ])
                 ], { optional: true }),
                 query(':leave',[
                    stagger(100, [
                         style({  transform: 'rotate(0deg)', top: '0vh' }),
                        animate('1s cubic-bezier(.35,0,.28,1)', 
                        style({ transform: 'rotate(30deg)', top: '300%' }))
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
                         style({  transform: 'rotate(-30deg)', top: '-300%' }),
                         animate('1s cubic-bezier(.35,0,.28,1)', 
                         style({ transform: 'rotate(0deg)', top: '0'}))
                    ])
                 ], { optional: true }),
                 query(':leave',[
                    stagger(100, [
                         style({  transform: 'rotate(0deg)', top: '0vh' }),
                        animate('1s cubic-bezier(.35,0,.28,1)', 
                        style({ transform: 'rotate(30deg)', top: '300%' }))
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
                         style({  transform: 'rotate(-30deg)', top: '-300%' }),
                         animate('1s cubic-bezier(.35,0,.28,1)', 
                         style({ transform: 'rotate(0deg)', top: '0'}))
                    ])
                 ], { optional: true }),
                 query(':leave',[
                    stagger(100, [
                         style({  transform: 'rotate(0deg)', top: '0vh' }),
                        animate('1s cubic-bezier(.35,0,.28,1)', 
                        style({ transform: 'rotate(30deg)', top: '300%' }))
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
                         style({  transform: 'rotate(-30deg)', top: '-300%' }),
                         animate('1s cubic-bezier(.35,0,.28,1)', 
                         style({ transform: 'rotate(0deg)', top: '0'}))
                    ])
                 ], { optional: true }),
                 query(':leave',[
                    stagger(100, [
                         style({  transform: 'rotate(0deg)', top: '0vh' }),
                        animate('1s cubic-bezier(.35,0,.28,1)', 
                        style({ transform: 'rotate(30deg)', top: '300%' }))
                    ])
                 ], { optional: true }),
            ])
       ]),
       transition('Home => Lit', [
            query(':enter, :leave', 
                 style({ position: 'absolute', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                    stagger(100, [
                         style({ transform: 'rotate(30deg)', top: '300%' }),
                         animate('1s cubic-bezier(.35,0,.28,1)', 
                         style({  transform: 'rotate(0deg)', top: '0vh' }))
                    ])
                 ], { optional: true }),
                 query(':leave', [
                    stagger(100, [
                         style({ transform: 'rotate(0deg)', top: '0'}),
                         animate('1s cubic-bezier(.35,0,.28,1)', 
                         style({  transform: 'rotate(-30deg)', top: '-300%' }))
                    ])
                 ], { optional: true }),
            ])
       ]),
       transition('Lit => Reebok', [
            query(':enter, :leave', 
                 style({ position: 'absolute', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                    stagger(100, [
                         style({ transform: 'rotate(30deg)', top: '300%' }),
                         animate('1s cubic-bezier(.35,0,.28,1)', 
                         style({  transform: 'rotate(0deg)', top: '0vh' }))
                    ])
                 ], { optional: true }),
                 query(':leave', [
                    stagger(100, [
                         style({ transform: 'rotate(0deg)', top: '0'}),
                         animate('1s cubic-bezier(.35,0,.28,1)', 
                         style({  transform: 'rotate(-30deg)', top: '-300%' }))
                    ])
                 ], { optional: true }),
            ])
       ]),
       transition('Reebok => Senna', [
            query(':enter, :leave', 
                 style({ position: 'absolute', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                    stagger(100, [
                         style({ transform: 'rotate(30deg)', top: '300%' }),
                         animate('1s cubic-bezier(.35,0,.28,1)', 
                         style({  transform: 'rotate(0deg)', top: '0vh' }))
                    ])
                 ], { optional: true }),
                 query(':leave', [
                    stagger(100, [
                         style({ transform: 'rotate(0deg)', top: '0'}),
                         animate('1s cubic-bezier(.35,0,.28,1)', 
                         style({  transform: 'rotate(-30deg)', top: '-300%' }))
                    ])
                 ], { optional: true }),
            ])
       ]),
       transition('Senna => Palmeiras', [
            query(':enter, :leave', 
                 style({ position: 'absolute', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                    stagger(100, [
                         style({ transform: 'rotate(30deg)', top: '300%' }),
                         animate('1s cubic-bezier(.35,0,.28,1)', 
                         style({  transform: 'rotate(0deg)', top: '0vh' }))
                    ])
                 ], { optional: true }),
                 query(':leave', [
                    stagger(100, [
                         style({ transform: 'rotate(0deg)', top: '0'}),
                         animate('1s cubic-bezier(.35,0,.28,1)', 
                         style({  transform: 'rotate(-30deg)', top: '-300%' }))
                    ])
                 ], { optional: true }),
            ])
       ]),
       transition('Palmeiras => Home', [
            query(':enter, :leave', 
                 style({ position: 'absolute', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                    stagger(100, [
                         style({ transform: 'rotate(30deg)', top: '300%' }),
                         animate('1s cubic-bezier(.35,0,.28,1)', 
                         style({  transform: 'rotate(0deg)', top: '0vh' }))
                    ])
                 ], { optional: true }),
                 query(':leave', [
                    stagger(100, [
                         style({ transform: 'rotate(0deg)', top: '0'}),
                         animate('1s cubic-bezier(.35,0,.28,1)', 
                         style({  transform: 'rotate(-30deg)', top: '-300%' }))
                    ])
                 ], { optional: true }),
            ])
       ]),
]);
