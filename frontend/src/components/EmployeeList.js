import React from 'react';

const EmployeeList = ({ employees, onEdit, onDelete, onSelect }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th>Mã NV</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Phòng ban</th>
            <th>Chức vụ</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center py-3">
                Không có dữ liệu nhân viên
              </td>
            </tr>
          ) : (
            employees.map((emp) => (
              <tr key={emp._id}>
                <td>
                  <button
                    className="btn btn-link p-0 text-decoration-none fw-bold"
                    onClick={() => onSelect(emp)}
                  >
                    {emp.employeeId}
                  </button>
                </td>
                <td>{emp.fullName}</td>
                <td>{emp.gender}</td>
                <td>{emp.department}</td>
                <td>{emp.position}</td>
                <td>
                  <span
                    className={`badge ${
                      emp.status === 'Active' ? 'bg-success' : 'bg-secondary'
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => onEdit(emp)}
                  >
                    Sửa
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onDelete(emp._id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
