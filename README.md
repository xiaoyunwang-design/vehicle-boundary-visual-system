# Vehicle Boundary Visual System — V2

Independent responsive rebuild of Figma nodes `817:694` and `831:17950`.

The original V1 remains unchanged at:

`/Users/Sherry/Documents/UAL MA/vehicle-boundary-website`

## Run locally

Open `index.html` directly, or serve this folder:

```bash
python3 -m http.server 4174
```

Then visit `http://localhost:4174`.

## Layout system

- Desktop design reference: 1512 px
- Desktop page margin: 40 px
- Gutter: 20 px
- Twelve equal fluid columns (101 px each at 1512 px)
- Every three columns form one 343 px major editorial field
- Tablet and mobile retain the twelve-column logic while elements expand to six- or twelve-column spans
- Mobile uses a horizontal scroll-snap vehicle selector

## Fonts and licensing

V2 uses two typeface families from the updated design system:

- Bebas Neue Regular for display titles, dates and vehicle names
- Neue Haas Unica Regular, Medium and Bold for navigation, captions, body copy, buttons and data

The 1512 px desktop scale is H1 160/140 px, H2 100/90 px and H3 50/45 px. Responsive sizes are defined in `styles.css`. The local font files were supplied for this prototype; confirm the appropriate webfont licences before publishing or deploying the site.

## Evidence policy

- Published dimensions are treated as official data.
- Rear-corner markers are qualitative interview findings, not measured blind zones.
- Parking clearance is calculated geometrically from bay and vehicle dimensions; it is not safety advice.
- Visible and digital boundary graphics are explicitly labelled as unmeasured or unavailable.
