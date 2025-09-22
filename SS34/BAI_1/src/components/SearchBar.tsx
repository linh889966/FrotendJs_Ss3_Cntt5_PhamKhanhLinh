import { TextField } from "@mui/material";

export default function SearchBar({
  value, onChange, className
}: { value:string; onChange:(v:string)=>void; className?:string; }) {
  return (
    <div className={className}>
      <TextField
        size="small"
        placeholder="Search here"
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        fullWidth
      />
    </div>
  );
}
