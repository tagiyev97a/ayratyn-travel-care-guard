import { useId } from "react";

/**
 * Turkmen carpet motifs drawn as vector geometry.
 *
 * The main motif is a "gül" (göl): an octagonal medallion with a toothed edge,
 * a ring of alternating filled sectors and a diamond heart — the medallion that
 * Turkmen carpet-weavers repeat across the field of a carpet. Secondary motifs
 * are small lozenges, and the border strip is a kilim-style zigzag band.
 *
 * Everything is drawn in `currentColor`, so the caller picks the tone with a
 * `text-*` class or an inline `color`, and the strength with `opacity`.
 */

const ANG = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5] as const;
type Pt = readonly [number, number];

const pt = (r: number, a: number): Pt => {
  const rad = (a * Math.PI) / 180;
  return [r * Math.cos(rad), r * Math.sin(rad)];
};

const poly = (pts: readonly Pt[]) =>
  pts.map(([x, y]) => `${x.toFixed(3)},${y.toFixed(3)}`).join(" ");

const octPts = (r: number): Pt[] => ANG.map((a) => pt(r, a));
const octStr = (r: number) => poly(octPts(r));

/** Trapezoids between two octagons; alternating ones are filled. */
const ringSectors = (outer: number, inner: number): string[] =>
  octPts(outer).map((_, k) => {
    const a = ANG[k] ?? 0;
    const b = ANG[(k + 1) % ANG.length] ?? 0;
    return poly([pt(outer, a), pt(outer, b), pt(inner, b), pt(inner, a)]);
  });

/** Small triangles pointing out from every octagon corner. */
const teeth = (r: number): string[] =>
  ANG.map((a) => poly([pt(r + 0.14, a), pt(r, a - 7), pt(r, a + 7)]));

const SECTORS = ringSectors(1, 0.66);
const TEETH = teeth(1);

const DIAMOND_BIG: Pt[] = [[0, -0.34], [0.34, 0], [0, 0.34], [-0.34, 0]];
const DIAMOND_SMALL: Pt[] = [[0, -0.16], [0.16, 0], [0, 0.16], [-0.16, 0]];

function Gul({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${r})`}>
      {/* toothed outer edge */}
      {TEETH.map((p, k) => (
        <polygon key={k} points={p} fill="currentColor" fillOpacity={0.5} />
      ))}
      <polygon points={octStr(1)} fill="none" stroke="currentColor" strokeWidth={0.055} />

      {/* alternating ring of sectors */}
      {SECTORS.filter((_, k) => k % 2 === 0).map((p, k) => (
        <polygon key={k} points={p} fill="currentColor" fillOpacity={0.28} />
      ))}

      <polygon
        points={octStr(0.66)}
        fill="currentColor"
        fillOpacity={0.1}
        stroke="currentColor"
        strokeWidth={0.045}
      />

      {/* diamond heart */}
      <polygon points={poly(DIAMOND_BIG)} fill="currentColor" fillOpacity={0.55} />
      <polygon
        points={poly(DIAMOND_SMALL)}
        fill="currentColor"
        fillOpacity={0.15}
        stroke="currentColor"
        strokeWidth={0.05}
      />
    </g>
  );
}

/** Small lozenge with side hooks — the secondary motif between güls. */
function Lozenge({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${r})`}>
      <polygon
        points={poly([[0, -0.5], [0.34, 0], [0, 0.5], [-0.34, 0]])}
        fill="currentColor"
        fillOpacity={0.3}
        stroke="currentColor"
        strokeWidth={0.07}
      />
      <polygon
        points={poly([[0, -0.2], [0.14, 0], [0, 0.2], [-0.14, 0]])}
        fill="currentColor"
        fillOpacity={0.6}
      />
      <path
        d="M-0.34 0 L-0.62 -0.22 M0.34 0 L0.62 -0.22"
        stroke="currentColor"
        strokeWidth={0.08}
        fill="none"
      />
    </g>
  );
}

const TILE = 170;

/**
 * Full-bleed carpet field: güls on a diamond lattice, seamless in every direction.
 * Only the tile's centre, top-left güls and top/left lozenges are drawn, so
 * neighbouring tiles complete them without double-stroking.
 */
export function PatternField({ className = "" }: { className?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const pid = `tk-gul-${uid}`;

  return (
    <svg className={className} aria-hidden="true" focusable="false">
      <defs>
        <pattern id={pid} width={TILE} height={TILE} patternUnits="userSpaceOnUse">
          <Gul x={TILE / 2} y={TILE / 2} r={48} />
          <Gul x={0} y={0} r={48} />
          <Lozenge x={TILE / 2} y={0} r={22} />
          <Lozenge x={0} y={TILE / 2} r={22} />
          <path
            d={`M0 0 L${TILE} ${TILE} M${TILE} 0 L0 ${TILE}`}
            stroke="currentColor"
            strokeWidth={0.8}
            strokeOpacity={0.35}
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${pid})`} />
    </svg>
  );
}

const BAND_TILE = 36;
const BAND_H = 22;

/**
 * Kilim-style band: lozenges on a zigzag, like the border of a carpet.
 * The strip itself is transparent, so the caller paints the ground colour
 * behind it and picks the motif colour with a `text-*` class.
 */
export function PatternBorder({ className = "" }: { className?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const pid = `tk-band-${uid}`;
  const mid = BAND_H / 2;
  const cx = BAND_TILE / 2;

  return (
    <svg className={className} aria-hidden="true" focusable="false">
      <defs>
        <pattern id={pid} width={BAND_TILE} height={BAND_H} patternUnits="userSpaceOnUse">
          <path
            d={`M0 ${BAND_H - 4} L${BAND_TILE / 4} 4 L${cx} ${BAND_H - 4} L${(BAND_TILE * 3) / 4} 4 L${BAND_TILE} ${BAND_H - 4}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeOpacity={0.45}
          />
          <polygon
            points={poly([[cx, 3], [cx + 7, mid], [cx, BAND_H - 3], [cx - 7, mid]])}
            fill="currentColor"
            fillOpacity={0.8}
          />
          <polygon
            points={poly([[cx, 8], [cx + 3.4, mid], [cx, BAND_H - 8], [cx - 3.4, mid]])}
            fill="currentColor"
            fillOpacity={0.25}
            stroke="currentColor"
            strokeWidth={0.9}
          />
          <circle cx={0} cy={mid} r={2} fill="currentColor" fillOpacity={0.55} />
          <circle cx={BAND_TILE} cy={mid} r={2} fill="currentColor" fillOpacity={0.55} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${pid})`} />
    </svg>
  );
}
