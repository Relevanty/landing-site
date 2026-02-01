import ReactFlow from "reactflow"
import "reactflow/dist/style.css"

import { CustomTextNode, CustomTextNode2 } from "./CustomTextNode"
import { desktopEdges, desktopNodes, mobileEdges, mobileNodes } from "./nodes/nodesDown"
import { useIsMobile } from "./useIsMobile"

const nodeTypes = {
  customText: CustomTextNode,
  customText2: CustomTextNode2,
}

const FlowDown = () => {
  const isMobile = useIsMobile()
  const nodes = isMobile ? mobileNodes : desktopNodes
  const edges = isMobile ? mobileEdges : desktopEdges

  return (
    <div
      style={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100vw",
        height: "130vh",
        backgroundColor: "#ffffff",
        padding: "10px",
      }}
    >
      <div style={{ width: "80%", height: "90%", cursor: "default" }}>
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

export default FlowDown
