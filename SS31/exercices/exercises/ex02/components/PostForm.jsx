import { useForm } from "react-hook-form";
import MDEditor from "@uiw/react-md-editor";

export default function PostForm({ initial, onSubmit }) {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: initial || { title:"", thumbnail:"", content:"", status:"draft" }
  });
  const content = watch("content");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <input {...register("title", { required: true })} placeholder="Tiêu đề" />
      <input {...register("thumbnail")} placeholder="URL hình ảnh" />
      <select {...register("status")}>
        <option value="draft">Nháp</option>
        <option value="published">Đã xuất bản</option>
      </select>

      <div data-color-mode="light">
        <MDEditor value={content} onChange={(v)=>setValue("content", v || "")} />
      </div>

      <button type="submit">Lưu</button>
    </form>
  );
}
