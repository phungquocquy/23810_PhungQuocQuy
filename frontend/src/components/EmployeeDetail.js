import React from 'react';

const EmployeeDetail = ({ employee, onClose }) => {
  if (!employee) return null;

  return (
    <div className="card mb-4 border-info">
      <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Chi Tiết Nhân Viên: {employee.fullName}</h5>
        <button className="btn-close btn-close-white" onClick={onClose}></button>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <p><strong>Mã Nhân Viên:</strong> {employee.employeeId}</p>
            <p><strong>Họ và Tên:</strong> {employee.fullName}</p>
            <p><strong>Giới Tính:</strong> {employee.gender}</p>
            <p><strong>Ngày Sinh:</strong> {employee.dateOfBirth}</p>
            <p><strong>Phòng Ban:</strong> {employee.department}</p>
          </div>
          <div className="col-md-6">
            <p><strong>Chức Vụ:</strong> {employee.position}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Số Điện Thoại:</strong> {employee.phone}</p>
            <p><strong>Ngày Vào Làm:</strong> {employee.hireDate}</p>
            <p><strong>Trạng Thái:</strong> {employee.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
