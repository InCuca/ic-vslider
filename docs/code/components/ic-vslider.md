---
title: ic-vslider
---
# ic-vslider 

## slots 

- `default` 

- `legend-number` 

- `legend-text` 

## props 

- `options` ***Object*** (*optional*) `default: [object Object]` 

## data 

- `slides` 

**initial value:** `[object Object]` 

- `hoveredCtrl` 

**initial value:** `null` 

## computed properties 

- `swiper` 

   **dependencies:** `$refs` 

- `swiperOptions` 

   **dependencies:** `options` 

- `visibleSlide` 

   **dependencies:** `slides` 

- `totalSlides` 

   **dependencies:** `slides` 

- `icvStyle` 

   **dependencies:** `colors` 

- `controlStyle` 

   **dependencies:** `hoveredCtrl`, `colors`, `colors` 

- `legendNumberStyle` 

   **dependencies:** `colors`, `colors` 


## methods 

- `getNumberPad(number)` 

- `onControlClick()` 

