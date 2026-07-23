import { motion } from 'framer-motion';

const NODE_W = 148;
const NODE_H = 44;
const NODE_RX = 22;

const nodes = [
  { id: 'lead',    label: 'Lead Captured',    x: 90,  y: 220 },
  { id: 'crm',     label: 'CRM Updated',       x: 280, y: 110 },
  { id: 'follow',  label: 'Follow-up Sent',    x: 275, y: 330 },
  { id: 'viewing', label: 'Viewing Booked',    x: 490, y: 185 },
  { id: 'deal',    label: 'Deal Won',           x: 670, y: 270 },
];

const connections = [
  { from: 'lead',    to: 'crm' },
  { from: 'lead',    to: 'follow' },
  { from: 'crm',     to: 'viewing' },
  { from: 'follow',  to: 'viewing' },
  { from: 'viewing', to: 'deal' },
];

function getPos(id: string) {
  const n = nodes.find(n => n.id === id)!;
  return { x: n.x, y: n.y };
}

function cubicPath(fromId: string, toId: string) {
  const s = getPos(fromId);
  const e = getPos(toId);
  const dx = e.x - s.x;
  return `M ${s.x} ${s.y} C ${s.x + dx * 0.45} ${s.y}, ${e.x - dx * 0.45} ${e.y}, ${e.x} ${e.y}`;
}

export function WorkflowVisualization() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      <svg
        viewBox="0 0 780 440"
        className="w-full h-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Subtle decorative arcs — organic, low-opacity */}
        <motion.ellipse
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.07 }}
          transition={{ duration: 2.5, delay: 0.3 }}
          cx="380" cy="220" rx="230" ry="140"
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="1"
        />
        <motion.ellipse
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2.5, delay: 0.6 }}
          cx="500" cy="180" rx="120" ry="90"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.75"
        />

        {/* Connection paths */}
        {connections.map((conn, idx) => {
          const d = cubicPath(conn.from, conn.to);
          const duration = 2.8 + idx * 0.4;
          const delay = idx * 0.6;
          return (
            <g key={`conn-${idx}`}>
              {/* Static dashed line */}
              <path
                d={d}
                stroke="hsl(var(--secondary))"
                strokeWidth="1"
                fill="none"
                strokeDasharray="5 5"
                opacity="0.5"
              />
              {/* Animated dot travelling the path */}
              <motion.circle
                r="3.5"
                fill="hsl(var(--primary))"
                opacity="0.75"
                initial={{ offsetDistance: '0%' }}
                animate={{ offsetDistance: '100%' }}
                transition={{
                  duration,
                  repeat: Infinity,
                  delay,
                  ease: 'linear',
                  repeatDelay: 0.8,
                }}
                style={{ offsetPath: `path('${d}')` } as React.CSSProperties}
              />
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, idx) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + idx * 0.18, duration: 0.9, ease: 'easeOut' }}
          >
            {/* Subtle drop-shadow rect behind */}
            <rect
              x={node.x - NODE_W / 2 + 1}
              y={node.y - NODE_H / 2 + 2}
              width={NODE_W}
              height={NODE_H}
              rx={NODE_RX}
              fill="rgba(0,0,0,0.04)"
            />
            {/* Main pill node */}
            <rect
              x={node.x - NODE_W / 2}
              y={node.y - NODE_H / 2}
              width={NODE_W}
              height={NODE_H}
              rx={NODE_RX}
              fill="hsl(var(--card))"
              stroke="hsl(var(--secondary))"
              strokeWidth="1.5"
            />
            {/* Small accent dot on left edge of pill */}
            <circle
              cx={node.x - NODE_W / 2 + 14}
              cy={node.y}
              r="4"
              fill="hsl(var(--primary))"
              opacity="0.55"
            />
            <text
              x={node.x + 4}
              y={node.y + 5}
              textAnchor="middle"
              fontSize="12.5"
              fontFamily="'DM Sans', sans-serif"
              fontWeight="400"
              fill="hsl(var(--foreground))"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
