import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface WorkflowNode {
  id: string;
  label: string;
  icon: string;
  x: number;
  y: number;
  color: string;
}

interface WorkflowConnection {
  from: string;
  to: string;
}

interface WorkflowVisualizationProps {
  nodes: WorkflowNode[];
  connections: WorkflowConnection[];
  className?: string;
}

export function WorkflowVisualization({ nodes, connections, className = '' }: WorkflowVisualizationProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getNodePosition = (nodeId: string) => {
    const node = nodes.find(n => n.id === nodeId);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  const calculatePath = (from: string, to: string) => {
    const start = getNodePosition(from);
    const end = getNodePosition(to);
    
    const midX = (start.x + end.x) / 2;
    
    return `M ${start.x} ${start.y} Q ${midX} ${start.y}, ${midX} ${(start.y + end.y) / 2} T ${end.x} ${end.y}`;
  };

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 800 500"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Connection lines */}
        <g>
          {connections.map((conn, idx) => {
            const pathD = calculatePath(conn.from, conn.to);
            const pathId = `path-${idx}`;
            
            return (
              <g key={`conn-${idx}`}>
                {/* Static dashed line */}
                <path
                  d={pathD}
                  stroke="hsl(var(--accent) / 0.2)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4 4"
                  className="animate-flow-dash"
                />
                
                {/* Animated data pulse */}
                {mounted && (
                  <>
                    <path
                      id={pathId}
                      d={pathD}
                      fill="none"
                      stroke="none"
                    />
                    <motion.circle
                      r="4"
                      fill="hsl(var(--accent))"
                      initial={{ offsetDistance: '0%', opacity: 0 }}
                      animate={{ offsetDistance: '100%', opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: idx * 0.3,
                        ease: 'linear',
                      }}
                      style={{
                        offsetPath: `path('${pathD}')`,
                      }}
                    />
                  </>
                )}
              </g>
            );
          })}
        </g>

        {/* Nodes */}
        <g>
          {nodes.map((node, idx) => (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              {/* Node glow */}
              <circle
                cx={node.x}
                cy={node.y}
                r="28"
                fill={node.color}
                opacity="0.15"
                className="animate-pulse-glow"
                style={{ animationDelay: `${idx * 0.2}s` }}
              />
              
              {/* Node background */}
              <rect
                x={node.x - 24}
                y={node.y - 24}
                width="48"
                height="48"
                rx="12"
                fill={node.color}
                stroke="hsl(var(--background))"
                strokeWidth="2"
              />
              
              {/* Icon */}
              <text
                x={node.x}
                y={node.y + 6}
                textAnchor="middle"
                fontSize="20"
                fill="white"
              >
                {node.icon}
              </text>
              
              {/* Label */}
              <text
                x={node.x}
                y={node.y + 48}
                textAnchor="middle"
                fontSize="12"
                fontWeight="600"
                fill="hsl(var(--foreground))"
                className="font-display"
              >
                {node.label}
              </text>
            </motion.g>
          ))}
        </g>
      </svg>
    </div>
  );
}
