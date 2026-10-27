import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ currentEmployee, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    employeeId: '',
    fullName: '',
    gender: 'Nam',
    dateOfBirth: '',
    department: 'IT',
    position: 'Nhan vien',
    email: '',
    phone: '',
    hireDate: '',
    status: 'Active'
  });

  useEffect(() => {
    if (currentEmployee) {
      setFormData(currentEmployee);
    }
  }, [currentEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">
          {currentEmployee ? 'Cập Nhật Nhân Viên' : 'Thêm Nhân Viên Mới'}
        </h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Mã Nhân Viên</label>
              <input
                type="text"
                className="form-control"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                required
                disabled={!!currentEmployee}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Họ và Tên</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Giới Tính</label>
              <select
                className="form-select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Khác">Khác</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Ngày Sinh</label>
              <input
                type="date"
                className="form-control"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Phòng Ban</label>
              <input
                type="text"
                className="form-control"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Chức Vụ</label>
              <input
                type="text"
                className="form-control"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Số Điện Thoại</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Ngày Vào Làm</label>
              <input
                type="date"
                className="form-control"
                name="hireDate"
                value={formData.hireDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mt-4 text-end">
            <button type="submit" className="btn btn-success me-2">
              Lưu
            </button>
            {onCancel && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCancel}
              >
                Hủy
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
