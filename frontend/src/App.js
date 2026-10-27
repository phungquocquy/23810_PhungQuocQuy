import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeDetail from './components/EmployeeDetail';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/employees';

function App() {
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');

  const fetchEmployees = async (query = '') => {
    try {
      const res = await axios.get(`${API_URL}?search=${query}`);
      setEmployees(res.data);
    } catch (err) {
      console.error('Lỗi lấy dữ liệu nhân viên:', err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchEmployees(search);
  };

  const handleSave = async (employeeData) => {
    try {
      if (currentEmployee) {
        await axios.put(`${API_URL}/${currentEmployee._id}`, employeeData);
      } else {
        await axios.post(API_URL, employeeData);
      }
      setShowForm(false);
      setCurrentEmployee(null);
      fetchEmployees();
    } catch (err) {
      alert('Lưu dữ liệu thất bại: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleEdit = (employee) => {
    setCurrentEmployee(employee);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa nhân viên này?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchEmployees();
      } catch (err) {
        alert('Xóa thất bại: ' + err.message);
      }
    }
  };

  return (
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom text-center">
        <h1 className="display-6 fw-bold text-primary">
          QUẢN LÝ NHÂN SỰ - PHÙNG QUỐC QUÝ (23810)
        </h1>
      </header>

      <div className="row mb-3 align-items-center">
        <div className="col-md-6">
          <form onSubmit={handleSearch} className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Tìm kiếm theo Mã NV hoặc Họ tên..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="btn btn-outline-primary">
              Tìm
            </button>
          </form>
        </div>
        <div className="col-md-6 text-end">
          <button
            className="btn btn-success"
            onClick={() => {
              setCurrentEmployee(null);
              setShowForm(!showForm);
            }}
          >
            {showForm ? 'Đóng Form' : '+ Thêm Nhân Viên'}
          </button>
        </div>
      </div>

      {showForm && (
        <EmployeeForm
          currentEmployee={currentEmployee}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      )}

      {selectedEmployee && (
        <EmployeeDetail
          employee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
        />
      )}

      <EmployeeList
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSelect={(emp) => setSelectedEmployee(emp)}
      />
    </div>
  );
}

export default App;
