import { useEffect, useState } from "react";
import postsApi from "../api/postsApi";
import PostTable from "../components/PostTable";
import PostForm from "../components/PostForm";

export default function PostsPage(){
  const [rows, setRows] = useState([]);
  const [editing, setEditing] = useState(null);

  const load = async ()=> setRows(await postsApi.getAll({ _sort:"id", _order:"desc" }));
  useEffect(()=>{ load(); }, []);

  const handleCreate = async (data)=>{
    data.publishedAt = new Date().toISOString().slice(0,10);
    await postsApi.create(data);
    setEditing(null);
    load();
  };
  const handleUpdate = async (data)=>{
    await postsApi.update(editing.id, { ...editing, ...data });
    setEditing(null);
    load();
  };
  const handleDelete = async (id)=>{
    await postsApi.remove(id);
    load();
  };

  return (
    <div>
      <h1>Quản lý bài viết</h1>
      <button onClick={()=>setEditing({})}>Thêm mới bài viết</button>

      {editing !== null && (
        <PostForm
          initial={editing.id ? editing : undefined}
          onSubmit={editing.id ? handleUpdate : handleCreate}
        />
      )}

      <PostTable rows={rows} onEdit={setEditing} onDelete={handleDelete}/>
    </div>
  );
}
