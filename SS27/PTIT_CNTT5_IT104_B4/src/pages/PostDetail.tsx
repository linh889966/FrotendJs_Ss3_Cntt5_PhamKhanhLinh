export interface IPost {
  id: number
  title: string
  excerpt: string
  content: string
}

export const posts: IPost[] = [
  {
    id: 1,
    title: "Bắt đầu với React",
    excerpt: "Cài môi trường và cách nghĩ cơ bản...",
    content:
      "React là thư viện JavaScript phổ biến để xây dựng giao diện. Tư duy thành phần (component) rất quan trọng. Bắt đầu với create-vite hoặc create-react-app, hiểu JSX và props. Làm quen state và sự kiện để tạo tương tác. Từ đó mở rộng với router, quản lý state và tối ưu hiệu năng."
  },
  {
    id: 2,
    title: "Sử dụng TailwindCSS",
    excerpt: "Tiện dụng với class CSS nhanh và rõ ràng...",
    content:
      "TailwindCSS cho phép tạo giao diện nhanh thông qua utility classes. Cấu hình theme để dùng màu và spacing nhất quán. Kết hợp responsive và pseudo-classes để xử lý hover, focus. Tổ chức component theo patterns giúp dự án nhất quán và dễ bảo trì."
  },
  {
    id: 3,
    title: "Giới thiệu về React Router",
    excerpt: "Điều hướng trang trong SPA...",
    content:
      "React Router giúp định nghĩa đường dẫn và render theo route. Sử dụng Routes/Route, Link/NavLink để chuyển trang. Với nested routes, dùng Outlet để hiển thị route con trong layout. Hooks như useParams, useNavigate, useSearchParams giúp đọc tham số và điều hướng linh hoạt."
  },
  {
    id: 4,
    title: "Quản lý state với Redux",
    excerpt: "Reducer, store và middleware...",
    content:
      "Redux quản lý state tập trung với mô hình một chiều. Tạo slice bằng Redux Toolkit để giảm boilerplate. Dùng createAsyncThunk cho tác vụ bất đồng bộ. Kết hợp React-Redux với hooks useSelector và useDispatch để kết nối giao diện."
  },
  {
    id: 5,
    title: "Hooks trong React",
    excerpt: "useState, useEffect và các hook phổ biến...",
    content:
      "Hooks đưa state và side-effect vào function component. useState quản lý giá trị, useEffect xử lý tác dụng phụ. useMemo và useCallback tối ưu hiệu năng khi truyền props. Tạo custom hook để tái sử dụng logic giữa các component."
  }
]
