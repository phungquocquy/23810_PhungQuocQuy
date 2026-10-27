const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// 1. Lấy danh sách nhân viên (kèm tìm kiếm theo mã hoặc họ tên)
router.get('/', async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};
    if (search) {
      query = {
        $or: [
          { employeeId: { $regex: search, $options: 'i' } },
          { fullName: { $regex: search, $options: 'i' } }
        ]
      };
    }
    const employees = await Employee.find(query);
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. Lấy thông tin chi tiết 1 nhân viên theo ID
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Không tìm thấy nhân viên' });
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 3. Thêm mới nhân viên
router.post('/', async (req, res) => {
  const employee = new Employee(req.body);
  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 4. Cập nhật thông tin nhân viên
router.put('/:id', async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 5. Xóa nhân viên
router.delete('/:id', async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: 'Đã xóa nhân viên thành công' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = route
