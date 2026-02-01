import React from "react"
import ReactFlow, { Edge, Node } from "reactflow"
import "reactflow/dist/style.css"

import { CustomTextNode, CustomTextNode2 } from "./CustomTextNode"
import { desktopEdges, desktopNodes, mobileEdges, mobileNodes } from "./nodes/nodesCenter"
import { useIsMobile } from "./useIsMobile"

const nodeTypes = {
  customText: CustomTextNode,
  customText2: CustomTextNode2,
}

const FlowCenter: React.FC = () => {
  const isMobile: boolean = useIsMobile()
  const nodes: Node[] = isMobile ? mobileNodes : desktopNodes
  const edges: Edge[] = isMobile ? mobileEdges : desktopEdges

  const desktopStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#ffffff",
    padding: "10px",
  }

  const mobileStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "90vw",
    height: "130vh",
    backgroundColor: "#ffffff",
    padding: "10px",
  }

  return (
    <div style={isMobile ? mobileStyle : desktopStyle}>
      <div style={{ width: isMobile ? "100%" : "80%", height: "100%", cursor: "default" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          defaultEdgeOptions={{
            type: "step",
            style: { strokeWidth: 2 },
          }}
          fitView
          zoomOnScroll={false}
          panOnScroll={false}
          zoomOnPinch={false}
          panOnDrag={false}
          zoomOnDoubleClick={false}
          preventScrolling={false}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          proOptions={{ hideAttribution: true }}
        />
      </div>
    </div>
  )
}

export default FlowCenter
