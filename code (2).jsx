import React, { useState } from "react";
import ReactFlow, { addEdge, MiniMap, Controls } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", type: "input", data: { label: "User  Query" }, position: { x: 0, y: 0 } },
  { id: "2", data: { label: "KnowledgeBase" }, position: { x: 250, y: 0 } },
  { id: "3", data: { label: "LLM Engine" }, position: { x: 500, y: 0 } },
  { id: "4", type: "output", data: { label: "Output" }, position: { x: 750, y: 0 } },
];

export default function WorkflowBuilder() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  // Validate workflow, save workflow JSON, run workflow, etc.

  return (
    <div style={{ height: 500 }}>
      <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect}>
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}