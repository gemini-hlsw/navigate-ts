import { useContext } from "react"
import { TelescopeContext } from "../TelescopeProvider"
import { Title } from "../../Title/Title"

export function TargetDetails() {
  const { baseTarget } = useContext(TelescopeContext)
  if (!Boolean(baseTarget)) return null
  return (
    <>
      <Title title={`Base target ${baseTarget?.name}`} />
      <div className="target-details">
        <span>HA:</span>
        <span>{0}</span>
        <span>Elevation:</span>
        <span>{0}</span>
        <span></span>
        <span></span>
        <span>Azimuth:</span>
        <span>{0}</span>
        <span>Wrap p1:</span>
        <span>{0}</span>
        <span>Wrap p2:</span>
        <span>{0}</span>
        <span>Rotator:</span>
        <span>{0}</span>
        <span>Wrap p1:</span>
        <span>{0}</span>
        <span>Wrap p2:</span>
        <span>{0}</span>
        <span>Zenith dist:</span>
        <span>{0}</span>
        <span>Moon dist:</span>
        <span>{0}</span>
      </div>
    </>
  )
}