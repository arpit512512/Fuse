'use client';

import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';
import { Eye, Brain, Zap, RotateCcw } from 'lucide-react';

const nodeDefaults = {
  type: 'default',
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
  style: {
    borderRadius: 16,
    padding: 12,
    background: 'hsl(var(--card))',
    color: 'hsl(var(--foreground))',
    border: '1px solid hsl(var(--muted)/0.3)',
    boxShadow: '0 0 12px rgba(124,58,237,0.3)',
  },
};

export function AgentFlow() {
  const initialNodes = [
    {
      id: 'perception',
      data: { label: <NodeContent icon={<Eye />} title="Perception" text="Watches dashboards, logs, CI" /> },
      position: { x: 0, y: 100 },
      ...nodeDefaults,
    },
    {
      id: 'planner',
      data: { label: <NodeContent icon={<Brain />} title="Planner" text="Reasoning & proposing next steps" /> },
      position: { x: 250, y: 60 },
      ...nodeDefaults,
    },
    {
      id: 'action',
      data: { label: <NodeContent icon={<Zap />} title="Action" text="Executes verified safe operations" /> },
      position: { x: 500, y: 100 },
      ...nodeDefaults,
    },
    {
      id: 'reflection',
      data: { label: <NodeContent icon={<RotateCcw />} title="Reflection" text="Learns from outcomes & approvals" /> },
      position: { x: 750, y: 160 },
      ...nodeDefaults,
    },
  ];

  const initialEdges = [
    { id: 'e1', source: 'perception', target: 'planner', animated: true, style: { stroke: '#7C3AED' } },
    { id: 'e2', source: 'planner', target: 'action', animated: true, style: { stroke: '#2563EB' } },
    { id: 'e3', source: 'action', target: 'reflection', animated: true, style: { stroke: '#7C3AED' } },
    { id: 'e4', source: 'reflection', target: 'perception', animated: true, style: { stroke: '#2563EB' } },
  ];

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div className="relative h-[500px] w-full rounded-2xl border border-primary/20 bg-gradient-to-br from-background to-muted/10">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
      >
        <MiniMap pannable zoomable />
        <Controls />
        <Background gap={16} color="hsl(var(--muted)/0.2)" />
      </ReactFlow>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground"
      >
        Context → Plan → Action → Reflection → Context
      </motion.div>
    </div>
  );
}

function NodeContent({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-xs text-muted-foreground">{text}</p>
    </motion.div>
  );
}

