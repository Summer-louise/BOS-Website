import { motion } from 'framer-motion';

const PILL_W = 155;
const PILL_H = 52;
const RX = 26;
const LANE_GAP = 100;
const TOTAL_W = 760;
const LANE_Y1 = 60;
const LANE_Y2 = LANE_Y1 + PILL_H + LANE_GAP;
const TOTAL_H = LANE_Y2 + PILL_H + 80;

const GAP = (TOTAL_W - 4 * PILL_W) / 3; // gap between pills

function pillX(col: number) {
  return col * (PILL_W + GAP) + PILL_W / 2;
}

type Node = { label: string; sublabel: string; kind: 'pain' | 'solution'; col: number; lane: number };

const nodes: Node[] = [
  // Lane 1
  { label: 'After-hours enquiry', sublabel: 'Lead goes cold', kind: 'pain', col: 0, lane: 1 },
  { label: 'AI replies instantly', sublabel: 'Under 60 seconds', kind: 'solution', col: 1, lane: 1 },
  { label: 'CRM auto-updated', sublabel: 'Zero manual entry', kind: 'solution', col: 2, lane: 1 },
  { label: 'Viewing booked', sublabel: 'Before competitors call', kind: 'solution', col: 3, lane: 1 },
  // Lane 2
  { label: 'Past clients go quiet', sublabel: 'No follow-up system', kind: 'pain', col: 0, lane: 2 },
  { label: 'Auto nurture sequence', sublabel: 'Market updates sent', kind: 'solution', col: 1, lane: 2 },
  { label: 'New listing shared', sublabel: 'Social + email, instantly', kind: 'solution', col: 2, lane: 2 },
  { label: 'Referral or relist', sublabel: 'Top of mind all year', kind: 'solution', col: 3, lane: 2 },
];

const laneLabels = [
  { label: 'Lead Capture & Response', lane: 1 },
  { label: 'Marketing & Nurture', lane: 2 },
];

function nodeX(col: number) { return pillX(col); }
function nodeY(lane: number) { return lane === 1 ? LANE_Y1 + PILL_H / 2 : LANE_Y2 + PILL_H / 2; }
function labelY(lane: number) { return lane === 1 ? LANE_Y1 - 18 : LANE_Y2 - 18; }

export function WorkflowVisualization() {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <svg
        viewBox={`0 0 ${TOTAL_W} ${TOTAL_H}`}
        className="w-full max-w-[760px] mx-auto overflow-visible"
        style={{ minWidth: 480 }}
      >
        {/* Lane labels */}
        {laneLabels.map((ll) => (
          <text
            key={ll.label}
            x={0}
            y={labelY(ll.lane)}
            fontSize="10"
            fontFamily="'DM Sans', sans-serif"
            fontWeight="500"
            letterSpacing="1.5"
            fill="hsl(var(--muted-foreground))"
            textAnchor="start"
          >
            {ll.label.toUpperCase()}
          </text>
        ))}

        {/* Arrows between pills in same lane */}
        {[1, 2].map((lane) =>
          [0, 1, 2].map((col) => {
            const x1 = nodeX(col) + PILL_W / 2;
            const x2 = nodeX(col + 1) - PILL_W / 2;
            const y = nodeY(lane);
            const mid = (x1 + x2) / 2;
            return (
              <motion.g
                key={`arrow-${lane}-${col}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + col * 0.12 + (lane - 1) * 0.3, duration: 0.5 }}
              >
                {/* Dashed line */}
                <line
                  x1={x1 + 4} y1={y} x2={x2 - 8} y2={y}
                  stroke="hsl(var(--secondary))"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.7"
                />
                {/* Arrowhead */}
                <polygon
                  points={`${x2 - 6},${y - 4} ${x2 + 1},${y} ${x2 - 6},${y + 4}`}
                  fill="hsl(var(--secondary))"
                  opacity="0.7"
                />
                {/* Travelling dot */}
                <motion.circle
                  r="3"
                  fill="hsl(var(--primary))"
                  opacity="0.8"
                  initial={{ cx: x1 + 4 }}
                  animate={{ cx: x2 - 6 }}
                  transition={{
                    delay: 1 + col * 0.4 + (lane - 1) * 0.6,
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'linear',
                  }}
                  cy={y}
                />
              </motion.g>
            );
          })
        )}

        {/* Pills */}
        {nodes.map((node, idx) => {
          const cx = nodeX(node.col);
          const cy = nodeY(node.lane);
          const isPain = node.kind === 'pain';
          return (
            <motion.g
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.07, duration: 0.6, ease: 'easeOut' }}
            >
              {/* Shadow */}
              <rect
                x={cx - PILL_W / 2 + 1.5}
                y={cy - PILL_H / 2 + 2}
                width={PILL_W}
                height={PILL_H}
                rx={RX}
                fill="rgba(0,0,0,0.045)"
              />
              {/* Fill */}
              <rect
                x={cx - PILL_W / 2}
                y={cy - PILL_H / 2}
                width={PILL_W}
                height={PILL_H}
                rx={RX}
                fill={isPain ? 'hsl(var(--primary) / 0.08)' : 'hsl(var(--secondary) / 0.1)'}
                stroke={isPain ? 'hsl(var(--primary))' : 'hsl(var(--secondary))'}
                strokeWidth="1.5"
              />
              {/* Main label */}
              <text
                x={cx}
                y={cy - 7}
                textAnchor="middle"
                fontSize="10.5"
                fontFamily="'DM Sans', sans-serif"
                fontWeight="500"
                fill={isPain ? 'hsl(var(--primary))' : 'hsl(var(--foreground))'}
              >
                {node.label}
              </text>
              {/* Sub label */}
              <text
                x={cx}
                y={cy + 9}
                textAnchor="middle"
                fontSize="9"
                fontFamily="'DM Sans', sans-serif"
                fontWeight="300"
                fill="hsl(var(--muted-foreground))"
              >
                {node.sublabel}
              </text>
            </motion.g>
          );
        })}

        {/* Legend */}
        <g transform={`translate(0, ${TOTAL_H - 22})`}>
          <rect x="0" y="0" width="11" height="11" rx="2"
            fill="hsl(var(--primary) / 0.08)" stroke="hsl(var(--primary))" strokeWidth="1.2" />
          <text x="15" y="9" fontSize="8.5" fontFamily="'DM Sans', sans-serif"
            fill="hsl(var(--muted-foreground))">
            Pain point without automation
          </text>
          <rect x="190" y="0" width="11" height="11" rx="2"
            fill="hsl(var(--secondary) / 0.1)" stroke="hsl(var(--secondary))" strokeWidth="1.2" />
          <text x="205" y="9" fontSize="8.5" fontFamily="'DM Sans', sans-serif"
            fill="hsl(var(--muted-foreground))">
            Automated by BOS Automated
          </text>
        </g>
      </svg>
    </div>
  );
}
