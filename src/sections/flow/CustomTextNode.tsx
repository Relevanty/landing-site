import { NodeProps } from "reactflow"





type CustomData = {
  label: string
}

export function CustomTextNode({ data }: NodeProps<CustomData>) {
  return (
    <div
      style={{
        padding: "10px",
        borderRadius: "8px",
        fontSize: "16px",
        lineHeight: "1.5",
        minWidth: "180px",
        maxWidth: "400px",
        textAlign: "left",
        color: "black",
      }}
    >
      {data.label}
    </div>
  )
}

export function CustomTextNode2({ data }: NodeProps<CustomData>) {
  return (
    <div
      style={{
        padding: "10px",
        borderRadius: "8px",
        fontSize: "16px",
        lineHeight: "1.5",
        minWidth: "180px",
        maxWidth: "300px",
        textAlign: "left",
        color: "black",
      }}
    >
      {data.label}
    </div>
  )
}
