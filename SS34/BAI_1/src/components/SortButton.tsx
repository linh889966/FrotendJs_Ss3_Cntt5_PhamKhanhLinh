import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export type SortKey = "id"|"name"|"age"|"gender";
export default function SortButton({
  value, onChange
}: { value: SortKey; onChange:(k:SortKey)=>void; }) {
  const [anchor, setAnchor] = useState<null|HTMLElement>(null);
  const open = Boolean(anchor);
  const keys: SortKey[] = ["id","name","age","gender"];

  return (
    <>
      <Button variant="outlined" size="small" onClick={(e)=>setAnchor(e.currentTarget)}>
        Sắp xếp: {value.toUpperCase()}
      </Button>
      <Menu open={open} anchorEl={anchor} onClose={()=>setAnchor(null)}>
        {keys.map(k=>(
          <MenuItem key={k} onClick={()=>{ onChange(k); setAnchor(null); }}>
            {k.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
