import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import endPoint from "./routers/router";
import AdminLayout from "./layouts/adminlayout";
import PrivateRoute from "./components/PrivateRoute";
import CustomerPage from "./layouts/Customerlayout";

// Tạo các component giả cho các quản lý
const Placeholder = ({ name }) => <div>{name} - Chưa có dữ liệu</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/customer" element={<CustomerPage />} />
        <Route element={<PrivateRoute />}>
          <Route path={endPoint.ALL} element={<AdminLayout />}>
            {/* Các route cho quản lý sản phẩm và các thành phần khác */}
            <Route path={endPoint.QUANLY}>
              <Route
                path={endPoint.QUANLYSANPHAM}
                element={<Placeholder name="Quản lý sản phẩm" />}
              />
              <Route
                path={endPoint.QUANLYSANPHAMLOI}
                element={<Placeholder name="Quản lý sản phẩm lỗi" />}
              />
              <Route
                path={endPoint.QUANLYDANHMUC}
                element={<Placeholder name="Quản lý danh mục" />}
              />
              <Route
                path={endPoint.QUANLYMALOI}
                element={<Placeholder name="Quản lý mã lỗi" />}
              />
              <Route
                path={endPoint.QUANLYDATHANG}
                element={<Placeholder name="Quản lý đơn hàng" />}
              />
              <Route
                path={endPoint.QUANLYTHONGTINQAQC}
                element={<Placeholder name="Quản lý thông tin QA/QC" />}
              />
              <Route
                path={endPoint.QUANLYCONGVIEC}
                element={<Placeholder name="Quản lý công việc" />}
              />
              <Route
                path={endPoint.QUANLYCHUYEN}
                element={<Placeholder name="Quản lý chuyển" />}
              />
              <Route
                path={endPoint.QUANLYCALAMVIEC}
                element={<Placeholder name="Quản lý ca làm việc" />}
              />
            </Route>

            <Route path={endPoint.QUANLYKHO}>
              <Route
                path={endPoint.KHO}
                element={<Placeholder name="Quản lý kho" />}
              />
              <Route
                path={endPoint.QUANLYSODOKHO}
                element={<Placeholder name="Sơ đồ kho" />}
              />
            </Route>
            <Route
              path={endPoint.QUANLYNGUOIDUNG}
              element={<Placeholder name="Quản lý người dùng" />}
            />
            <Route path={endPoint.QUANLYCAPKHOA} element={<Placeholder name="Quản lý cặp khoá" />} />

            <Route
              path={endPoint.QUANLYKEYENPOINT}
              element={<Placeholder name="Quản lý key endpoint" />}
            />
            <Route
              path={endPoint.WHITELISTIP}
              element={<Placeholder name="Quản lý whitelist IP" />}
            />
            <Route path={endPoint.QUANLYQUYEN} element={<Placeholder name="Quản lý quyền người dùng" />} />
            <Route path={endPoint.LOGIN} element={<Placeholder name="Login" />} />
            <Route path={endPoint.REGISTER} element={<Placeholder name="Register" />} />
            <Route path={endPoint.ROLECLAIMS} element={<Placeholder name="Quản lý Role Claims" />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
