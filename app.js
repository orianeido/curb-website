const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const curbCoverage = {
  // Supported countries
  ISR: { code: 'IL', name: 'Israel', status: 'Supported now', statusClass: 'supported', details: 'Curb currently supports parking rules across Israel.' },
  GBR: { code: 'GB', name: 'United Kingdom', status: 'Supported now', statusClass: 'supported', details: 'Curb supports parking rules across the United Kingdom.' },
  USA: { code: 'US', name: 'United States', status: 'Supported now', statusClass: 'supported', details: 'Curb supports parking rules across the United States.' },
  FRA: { code: 'FR', name: 'France', status: 'Supported now', statusClass: 'supported', details: 'Curb supports parking rules across France.' },
  DEU: { code: 'DE', name: 'Germany', status: 'Supported now', statusClass: 'supported', details: 'Curb supports parking rules across Germany.' },
  ITA: { code: 'IT', name: 'Italy', status: 'Supported now', statusClass: 'supported', details: 'Curb supports parking rules across Italy.' },
  ESP: { code: 'ES', name: 'Spain', status: 'Supported now', statusClass: 'supported', details: 'Curb supports parking rules across Spain.' },
  AUT: { code: 'AT', name: 'Austria', status: 'Supported now', statusClass: 'supported', details: 'Curb supports parking rules across Austria.' },
  HUN: { code: 'HU', name: 'Hungary', status: 'Supported now', statusClass: 'supported', details: 'Curb supports parking rules across Hungary.' },
  NLD: { code: 'NL', name: 'Netherlands', status: 'Supported now', statusClass: 'supported', details: 'Curb supports parking rules across the Netherlands.' },
  PRT: { code: 'PT', name: 'Portugal', status: 'Supported now', statusClass: 'supported', details: 'Curb supports parking rules across Portugal.' },

  // Coming soon countries
  CAN: { code: 'CA', name: 'Canada', status: 'Coming soon', statusClass: 'coming-soon', details: 'Curb support for Canada is coming soon.' },
  CHE: { code: 'CH', name: 'Switzerland', status: 'Coming soon', statusClass: 'coming-soon', details: 'Curb support for Switzerland is coming soon.' },
  BEL: { code: 'BE', name: 'Belgium', status: 'Coming soon', statusClass: 'coming-soon', details: 'Curb support for Belgium is coming soon.' },
  LUX: { code: 'LU', name: 'Luxembourg', status: 'Coming soon', statusClass: 'coming-soon', details: 'Curb support for Luxembourg is coming soon.' },
  BGR: { code: 'BG', name: 'Bulgaria', status: 'Coming soon', statusClass: 'coming-soon', details: 'Curb support for Bulgaria is coming soon.' },
  MNE: { code: 'ME', name: 'Montenegro', status: 'Coming soon', statusClass: 'coming-soon', details: 'Curb support for Montenegro is coming soon.' },
  GRC: { code: 'GR', name: 'Greece', status: 'Coming soon', statusClass: 'coming-soon', details: 'Curb support for Greece is coming soon.' },
  ARE: { code: 'AE', name: 'United Arab Emirates', status: 'Coming soon', statusClass: 'coming-soon', details: 'Curb support for the UAE is coming soon.' },
  JPN: { code: 'JP', name: 'Japan', status: 'Coming soon', statusClass: 'coming-soon', details: 'Curb support for Japan is coming soon.' },
  AUS: { code: 'AU', name: 'Australia', status: 'Coming soon', statusClass: 'coming-soon', details: 'Curb support for Australia is coming soon.' },
  NZL: { code: 'NZ', name: 'New Zealand', status: 'Coming soon', statusClass: 'coming-soon', details: 'Curb support for New Zealand is coming soon.' },
  SWE: { code: 'SE', name: 'Sweden', status: 'Coming soon', statusClass: 'coming-soon', details: 'Curb support for Sweden is coming soon.' },
  SVK: { code: 'SK', name: 'Slovakia', status: 'Coming soon', statusClass: 'coming-soon', details: 'Curb support for Slovakia is coming soon.' },
  POL: { code: 'PL', name: 'Poland', status: 'Coming soon', statusClass: 'coming-soon', details: 'Curb support for Poland is coming soon.' },
  NOR: { code: 'NO', name: 'Norway', status: 'Coming soon', statusClass: 'coming-soon', details: 'Curb support for Norway is coming soon.' },
  FIN: { code: 'FI', name: 'Finland', status: 'Coming soon', statusClass: 'coming-soon', details: 'Curb support for Finland is coming soon.' },
  ZAF: { code: 'ZA', name: 'South Africa', status: 'Coming soon', statusClass: 'coming-soon', details: 'Curb support for South Africa is coming soon.' },

  // Numeric ISO fallback for the old TopoJSON source.
  '376': null, '826': null, '840': null, '250': null, '276': null, '380': null, '040': null, '724': null, '348': null, '528': null, '620': null,
  '124': null, '756': null, '056': null, '442': null, '100': null, '499': null, '300': null, '784': null, '392': null, '036': null, '554': null,
  '752': null, '703': null, '616': null, '578': null, '246': null, '710': null,
};

// Map numeric ISO codes to their entries
curbCoverage['376'] = curbCoverage.ISR;  // Israel
curbCoverage['826'] = curbCoverage.GBR;  // UK
curbCoverage['840'] = curbCoverage.USA;  // USA
curbCoverage['250'] = curbCoverage.FRA;  // France
curbCoverage['276'] = curbCoverage.DEU;  // Germany
curbCoverage['380'] = curbCoverage.ITA;  // Italy
curbCoverage['040'] = curbCoverage.AUT;  // Austria
curbCoverage['724'] = curbCoverage.ESP;  // Spain
curbCoverage['348'] = curbCoverage.HUN;  // Hungary
curbCoverage['528'] = curbCoverage.NLD;  // Netherlands
curbCoverage['620'] = curbCoverage.PRT;  // Portugal
curbCoverage['124'] = curbCoverage.CAN;  // Canada
curbCoverage['756'] = curbCoverage.CHE;  // Switzerland
curbCoverage['056'] = curbCoverage.BEL;  // Belgium
curbCoverage['442'] = curbCoverage.LUX;  // Luxembourg
curbCoverage['100'] = curbCoverage.BGR;  // Bulgaria
curbCoverage['499'] = curbCoverage.MNE;  // Montenegro
curbCoverage['300'] = curbCoverage.GRC;  // Greece
curbCoverage['784'] = curbCoverage.ARE;  // UAE
curbCoverage['392'] = curbCoverage.JPN;  // Japan
curbCoverage['036'] = curbCoverage.AUS;  // Australia
curbCoverage['554'] = curbCoverage.NZL;  // New Zealand
curbCoverage['752'] = curbCoverage.SWE;  // Sweden
curbCoverage['703'] = curbCoverage.SVK;  // Slovakia
curbCoverage['616'] = curbCoverage.POL;  // Poland
curbCoverage['578'] = curbCoverage.NOR;  // Norway
curbCoverage['246'] = curbCoverage.FIN;  // Finland
curbCoverage['710'] = curbCoverage.ZAF;  // South Africa

const COUNTRY_COLORS = {
  supported: '#35D85D',
  'coming-soon': '#FF9F1C',
  unavailable: '#24436b',
};

const COUNTRY_HOVER_COLORS = {
  supported: '#5BFF7B',
  'coming-soon': '#FFC04D',
  unavailable: '#3a5c88',
};

function getCountryKeys(feature) {
  const props = feature.properties || {};
  return [
    feature.id,
    props.iso_a3,
    props.ISO_A3,
    props.ISO3,
    props.adm0_a3,
    props.ADM0_A3,
    props.id,
  ]
    .filter(Boolean)
    .map((value) => String(value).toUpperCase())
    .flatMap((value) => [value, value.padStart(3, '0')]);
}

function getCountryName(feature) {
  const props = feature.properties || {};
  return props.name || props.NAME || props.ADMIN || props.admin || 'Not available yet';
}

function getCoverage(feature) {
  const coverageKey = getCountryKeys(feature).find((key) => curbCoverage[key]);
  const coverage = coverageKey ? curbCoverage[coverageKey] : null;
  if (coverage) return coverage;

  return {
    name: getCountryName(feature),
    status: 'Not available yet',
    statusClass: 'unavailable',
    details: 'Curb is not available in this country yet. We are working on expanding coverage.',
  };
}

function countryStyle(feature) {
  const coverage = getCoverage(feature);
  const isAvailable = coverage.statusClass !== 'unavailable';

  return {
    fillColor: COUNTRY_COLORS[coverage.statusClass] || COUNTRY_COLORS.unavailable,
    weight: isAvailable ? 0.85 : 0.55,
    opacity: 1,
    color: isAvailable ? 'rgba(255,255,255,.70)' : 'rgba(255,255,255,.18)',
    fillOpacity: isAvailable ? 0.86 : 0.58,
  };
}

function countryHoverStyle(feature) {
  const coverage = getCoverage(feature);
  const isAvailable = coverage.statusClass !== 'unavailable';

  return {
    fillColor: COUNTRY_HOVER_COLORS[coverage.statusClass] || COUNTRY_HOVER_COLORS.unavailable,
    weight: isAvailable ? 1.5 : 1.0,
    color: isAvailable ? 'rgba(255,255,255,.95)' : 'rgba(255,255,255,.40)',
    fillOpacity: 1,
  };
}

function popupMarkup(coverage) {
  const badgeLabel = coverage.statusClass === 'supported' ? 'Supported now' : coverage.status;

  return `
    <div class="coverage-popup-inner">
      <div class="coverage-popup-title-row">
        <span class="coverage-popup-dot ${coverage.statusClass}"></span>
        <h3>${coverage.name}</h3>
      </div>
      <span class="coverage-status ${coverage.statusClass}">${badgeLabel}</span>
      <p>${coverage.details}</p>
    </div>
  `;
}

async function initCoverageMap() {
  const mapElement = document.getElementById('curbWorldMap');
  const mapWrap = document.querySelector('.coverage-map-wrap');
  if (!mapElement || typeof L === 'undefined' || typeof topojson === 'undefined') return;

  const map = L.map(mapElement, {
    zoomControl: false,
    attributionControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: true,
    dragging: true,
    worldCopyJump: false,
    zoomSnap: 0.25,
    minZoom: 1.35,
    maxZoom: 7,
    maxBounds: [[-85, -190], [85, 190]],
    maxBoundsViscosity: 0.85,
  });

  L.control.zoom({ position: 'topleft' }).addTo(map);
  map.setView([28, 16], 2.05);

  try {
    // Use a GeoJSON source instead of world-atlas TopoJSON.
    // The previous TopoJSON source produced long antimeridian seam lines across Russia
    // in Leaflet. This dataset avoids those visual artifacts.
    const response = await fetch('https://cdn.jsdelivr.net/gh/johan/world.geo.json@master/countries.geo.json');
    if (!response.ok) throw new Error('World map data failed to load');
    const countries = await response.json();

    const countryLayer = L.geoJSON(countries, {
      style: countryStyle,
      onEachFeature(feature, layer) {
        const coverage = getCoverage(feature);


        layer.on({
          mouseover() {
            layer.setStyle(countryHoverStyle(feature));
            layer.bringToFront();
          },
          mouseout() {
            countryLayer.resetStyle(layer);
          },
          click(event) {
            if (coverage.statusClass === 'unavailable') return;
            L.popup({
              className: 'coverage-leaflet-popup',
              closeButton: true,
              autoPan: true,
              maxWidth: 300,
              offset: [0, -4],
            })
              .setLatLng(event.latlng)
              .setContent(popupMarkup(coverage))
              .openOn(map);
          },
        });
      },
    }).addTo(map);

    map.fitBounds(countryLayer.getBounds(), { padding: [18, 18] });
    map.setZoom(2.05);
  } catch (error) {
    mapElement.innerHTML = '<div class="coverage-map-error">Map data could not load. Please refresh the page.</div>';
  }

  const handleCtrlZoom = (event) => {
    if (!mapWrap?.contains(event.target)) return;

    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();
      map.scrollWheelZoom.enable();
      const zoomDelta = event.deltaY < 0 ? 0.35 : -0.35;
      map.setZoomAround(map.mouseEventToContainerPoint(event), map.getZoom() + zoomDelta);
      window.clearTimeout(map._curbZoomTimer);
      map._curbZoomTimer = window.setTimeout(() => map.scrollWheelZoom.disable(), 200);
    } else {
      map.scrollWheelZoom.disable();
    }
  };

  mapElement.addEventListener('wheel', handleCtrlZoom, { passive: false });
}

window.addEventListener('load', initCoverageMap);
