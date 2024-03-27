import express from "express";
import {
  socialAuth,
  updatePassword,
  updateProfilePicture,
} from "../controllers/user.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { blockEmployee, createEmployee, deleteEmployee, editEmployee, getAllEmployeesInfo, getSingleEmployeeInfo, loginEmployee, logoutEmployee } from "../controllers/employee.controller";
const employeeRouter = express.Router();
employeeRouter.post("/create-employee", createEmployee);
employeeRouter.get("/get-all-employee",isAuthenticated, getAllEmployeesInfo);
employeeRouter.get("/get-single-employee/:id", getSingleEmployeeInfo);
employeeRouter.put("/edit-employee/:id",isAuthenticated,authorizeRoles("admin","superAdmin","user"), editEmployee);
employeeRouter.delete("/delete-employee/:id",isAuthenticated,authorizeRoles("admin","superAdmin","user"), deleteEmployee);
employeeRouter.post("/employee-logout", isAuthenticated,authorizeRoles("admin","superAdmin","user"), logoutEmployee);
employeeRouter.put("/employee-block/:id", isAuthenticated,authorizeRoles("admin","superAdmin","user"), blockEmployee);
employeeRouter.post("/login-employee", loginEmployee);




// employeeRouter.post("/activate-user", activateUser);
// employeeRouter.get("/logout", isAuthenticated,authorizeRoles("admin","superAdmin","user"), logoutUser);
// employeeRouter.get("/refresh", updateAcessToken);
// employeeRouter.get("/me", isAuthenticated,getUserInfo);
// employeeRouter.put("/update-user-info", isAuthenticated,updateUserInfo);
employeeRouter.put("/update-password", isAuthenticated,updatePassword);
employeeRouter.put("/update-user-avatar", isAuthenticated,updateProfilePicture);
employeeRouter.post('/socialauth',socialAuth)
export default employeeRouter;
