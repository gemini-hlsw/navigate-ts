import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { useRef, useState } from 'react';

import { CaretDown, CaretLeft, CaretRight, CaretUp } from '@/components/Icons';

export default function MainControls({ canEdit }: { canEdit: boolean }) {
  const [slider, setSlider] = useState(10);
  const upKey = useRef(null);
  const downKey = useRef(null);
  const leftKey = useRef(null);
  const rightKey = useRef(null);

  // useEffect(() => {
  //   document.addEventListener("keydown", keyPressed)

  //   return () => {
  //     document.removeEventListener("keydown", keyPressed)
  //   }
  // }, [])

  // function keyPressed(e: KeyboardEvent) {
  //   switch (e.key) {
  //     case "ArrowUp":
  //       upKey.current?.blur()
  //       setTimeout(() => upKey.current?.focus(), 50)
  //       break
  //     case "ArrowLeft":
  //       leftKey.current?.blur()
  //       setTimeout(() => leftKey.current?.focus(), 50)
  //       break
  //     case "ArrowRight":
  //       rightKey.current?.blur()
  //       setTimeout(() => rightKey.current?.focus(), 50)
  //       break
  //     case "ArrowDown":
  //       downKey.current?.blur()
  //       setTimeout(() => downKey.current?.focus(), 50)
  //       break
  //     case "+":
  //       setSlider((prev: any) => prev + 1)
  //       break
  //     case "-":
  //       setSlider((prev: any) => prev - 1)
  //       break
  //     default:
  //       break
  //   }
  // }

  function handleClick(e: React.SyntheticEvent) {
    console.log(e);
  }

  return (
    <div className="main-controls under-construction">
      <div className="top">
        <span style={{ alignSelf: 'center', gridArea: 'g11' }}>Handset</span>
        <Dropdown disabled={!canEdit} style={{ gridArea: 'g12' }} value={2} options={[{ label: 'a', value: 'a' }]} />
        <span style={{ alignSelf: 'center', gridArea: 'g21' }}>Probe</span>
        <Dropdown disabled={!canEdit} style={{ gridArea: 'g22' }} value={2} options={[{ label: 'a', value: 'a' }]} />
        <span style={{ alignSelf: 'center', gridArea: 'g31' }}>Coords</span>
        <Dropdown disabled={!canEdit} style={{ gridArea: 'g32' }} value={2} options={[{ label: 'a', value: 'a' }]} />
      </div>
      <div className="arrow">
        <Button
          disabled={!canEdit}
          onClick={handleClick}
          ref={upKey}
          style={{ gridArea: 'gu' }}
          icon={<CaretUp size="xl" />}
          aria-label="Bookmark"
        />
        <Button
          disabled={!canEdit}
          onClick={handleClick}
          ref={leftKey}
          style={{ gridArea: 'gl' }}
          icon={<CaretLeft size="xl" />}
          aria-label="Bookmark"
        />
        <InputNumber
          disabled={!canEdit}
          style={{ gridArea: 'g23' }}
          value={slider}
          onValueChange={(e) => setSlider(e.value ?? 0)}
          mode="decimal"
        />
        <Button
          disabled={!canEdit}
          onClick={handleClick}
          ref={rightKey}
          style={{ gridArea: 'gr' }}
          icon={<CaretRight size="xl" />}
          aria-label="Bookmark"
        />
        <Button
          disabled={!canEdit}
          onClick={handleClick}
          ref={downKey}
          style={{ gridArea: 'gd' }}
          icon={<CaretDown size="xl" />}
          aria-label="Bookmark"
        />
      </div>
      <div className="bottom">
        <span style={{ alignSelf: 'center', gridArea: 'g11' }}>Offset</span>
        <span style={{ textAlign: 'center', alignSelf: 'center', gridArea: 'g12' }}>X</span>
        <span style={{ textAlign: 'center', alignSelf: 'center', gridArea: 'g13' }}>Y</span>
        <span style={{ alignSelf: 'center', gridArea: 'g21' }}>Current</span>
        <span style={{ textAlign: 'center', alignSelf: 'center', gridArea: 'g22' }}>1.3</span>
        <span style={{ textAlign: 'center', alignSelf: 'center', gridArea: 'g23' }}>3.4</span>
        <span style={{ alignSelf: 'center', gridArea: 'g31' }}>New</span>
        <InputNumber
          disabled={!canEdit}
          style={{ gridArea: 'g32' }}
          value={slider}
          onValueChange={(e) => setSlider(e.value ?? 0)}
          mode="decimal"
          minFractionDigits={2}
        />
        <InputNumber
          disabled={!canEdit}
          style={{ gridArea: 'g33' }}
          value={slider}
          onValueChange={(e) => setSlider(e.value ?? 0)}
          mode="decimal"
          minFractionDigits={2}
        />
        <Button disabled={!canEdit} style={{ gridArea: 'g41' }} label="Apply" />
        <Button disabled={!canEdit} style={{ gridArea: 'g42' }} label="Reset" />
        <Button disabled={!canEdit} style={{ gridArea: 'g43' }} label="Absorb" />
        <Button disabled={!canEdit} style={{ gridArea: 'g5' }} label="Autoadjust" />
      </div>
    </div>
  );
}
