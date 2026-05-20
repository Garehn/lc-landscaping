// Locally hosted imagery in /public/images/{slot}.jpg.
const local = (slot: string) => `/images/${slot}.jpg`;

export const images = {
  hero: { src: local('hero'), alt: 'A freshly mowed Canberra lawn with crisp edges and trimmed hedges in afternoon light' },
  intro: { src: local('intro'), alt: 'A tidy garden bed with fresh mulch and native planting in a Canberra suburb' },

  service_design: { src: local('service_design'), alt: 'A neatly mowed lawn with sharp edges and a trimmed hedge border in Canberra' },
  service_hardscape: { src: local('service_hardscape'), alt: 'Precision hedge trimming along a Canberra property fence line' },
  service_planting: { src: local('service_planting'), alt: 'An overgrown Canberra garden before cleanup with weeds, long grass and debris' },
  service_irrigation: { src: local('service_irrigation'), alt: 'New garden beds with mulch and feature planting in a Canberra backyard' },
  service_outdoor: { src: local('service_outdoor'), alt: 'Native planting and mulch in a frost-tolerant Canberra garden bed' },
  service_maintain: { src: local('service_maintain'), alt: 'A well-maintained Canberra garden with clipped hedges and edged lawn' },

  process_visit: { src: local('process_visit'), alt: 'A clipboard with handwritten site notes and measuring tape on a garden path' },
  process_design: { src: local('process_design'), alt: 'A landscaper discussing a garden plan with a homeowner in their backyard' },
  process_build: { src: local('process_build'), alt: 'A garden makeover in progress with fresh mulch being spread' },
  process_handover: { src: local('process_handover'), alt: 'A completed Canberra garden with fresh turf, planting and mulch' },

  about: { src: local('about'), alt: 'A work ute with a trailer loaded with garden equipment parked in a Canberra street' },

  portfolio_1: { src: local('portfolio_1'), alt: 'A Belconnen garden makeover with new garden beds and native planting' },
  portfolio_2: { src: local('portfolio_2'), alt: 'A Gungahlin property with freshly trimmed hedges and mowed lawns' },
  portfolio_3: { src: local('portfolio_3'), alt: 'A Woden garden after a full cleanup with fresh mulch and pruned shrubs' },
  portfolio_4: { src: local('portfolio_4'), alt: 'A Tuggeranong backyard transformation with new turf and garden beds' },

  ba1_before: { src: local('ba1_before'), alt: 'An overgrown Canberra backyard before garden makeover' },
  ba1_after: { src: local('ba1_after'), alt: 'The same backyard after: new garden beds, mulch and tidy lawn' },
  ba2_before: { src: local('ba2_before'), alt: 'Overgrown hedges and long grass before maintenance' },
  ba2_after: { src: local('ba2_after'), alt: 'The same property after: trimmed hedges and mowed lawn' },
  ba3_before: { src: local('ba3_before'), alt: 'A tired front garden with weeds and bare soil' },
  ba3_after: { src: local('ba3_after'), alt: 'The same front garden after: fresh mulch and new planting' },

  slider_1: { src: local('slider_1'), alt: 'A freshly built garden bed with native plants and bark mulch' },
  slider_2: { src: local('slider_2'), alt: 'A neatly trimmed photinia hedge along a Canberra fence line' },
  slider_3: { src: local('slider_3'), alt: 'Native planting in a Canberra garden with grevillea and lomandra' },
  slider_4: { src: local('slider_4'), alt: 'A tidy courtyard garden with edged lawn and potted plants' },
  slider_5: { src: local('slider_5'), alt: 'Freshly mowed and edged lawn in a Canberra suburb' },
  slider_6: { src: local('slider_6'), alt: 'Mulched garden beds and pruned shrubs in a Canberra backyard' },
};

export type ImageRef = keyof typeof images;
